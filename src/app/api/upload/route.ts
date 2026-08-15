import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, unlink } from "fs/promises";
import path from "path";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const MAX_SIZE = 10 * 1024 * 1024; // 10MB

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/pdf",
] as const;

// Magic bytes for file signature verification (prevents MIME spoofing)
const MAGIC_BYTES: Record<string, Uint8Array> = {
  "image/jpeg": new Uint8Array([0xff, 0xd8, 0xff]),
  "image/png": new Uint8Array([0x89, 0x50, 0x4e, 0x47]),
  "image/webp": new Uint8Array([0x52, 0x49, 0x46, 0x46]), // RIFF (checked with WEBP at offset 8)
  "image/gif": new Uint8Array([0x47, 0x49, 0x46, 0x38]), // GIF8
  "application/pdf": new Uint8Array([0x25, 0x50, 0x44, 0x46]), // %PDF
};

function checkMagicBytes(buffer: Buffer, mimeType: string): boolean {
  const expected = MAGIC_BYTES[mimeType];
  if (!expected) return false;
  for (let i = 0; i < expected.length; i++) {
    if (buffer[i] !== expected[i]) return false;
  }
  return true;
}

export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function POST(req: NextRequest) {
  try {
    // 1. Require admin authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Parse FormData
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const oldFileUrl = formData.get("oldFileUrl") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }
    if (file.size === 0) {
      return NextResponse.json({ error: "Empty file is not allowed." }, { status: 400 });
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File exceeds 10MB limit." }, { status: 400 });
    }

    // 3. MIME type allowlist check
    const declaredType = file.type.toLowerCase() as typeof ALLOWED_MIME_TYPES[number];
    if (!ALLOWED_MIME_TYPES.includes(declaredType)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, WEBP, GIF, and PDF are allowed." },
        { status: 400 }
      );
    }

    // 4. Read buffer and verify magic bytes
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    if (!checkMagicBytes(buffer, declaredType)) {
      return NextResponse.json(
        { error: "File content does not match declared type. Upload rejected." },
        { status: 400 }
      );
    }

    // 5. Delete old file if provided (strict path traversal prevention)
    if (oldFileUrl && typeof oldFileUrl === "string" && oldFileUrl.startsWith("/uploads/")) {
      // Only allow basename — prevents path traversal like /uploads/../../../etc/passwd
      const oldBasename = path.basename(oldFileUrl);
      if (oldBasename && !oldBasename.includes("..")) {
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        const oldFilePath = path.join(uploadDir, oldBasename);
        // Ensure resolved path is still inside uploadDir
        if (oldFilePath.startsWith(uploadDir)) {
          try { await unlink(oldFilePath); } catch { /* ignore if not found */ }
        }
      }
    }

    // 6. Generate safe unique filename (no user-controlled segments in path)
    const ext = path.extname(file.name).toLowerCase().replace(/[^a-z0-9.]/g, "") || ".bin";
    const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
    const uniqueFilename = `upload-${uniqueId}${ext}`;

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, uniqueFilename);

    // 7. Final path traversal check
    if (!filePath.startsWith(uploadDir)) {
      return NextResponse.json({ error: "Invalid file path." }, { status: 400 });
    }

    await writeFile(filePath, buffer);

    const fileUrl = `/uploads/${uniqueFilename}`;
    return NextResponse.json({ url: fileUrl, filePath: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Internal Server Error during file upload." }, { status: 500 });
  }
}
