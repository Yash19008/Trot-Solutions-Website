import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// Public route — no auth required (career applicants are not logged-in users)
// Strictly limited to CV/resume files only.

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

// Allowed MIME types for CV uploads
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// File magic bytes (first bytes of file) to verify actual file type
const MAGIC_BYTES: Record<string, Uint8Array> = {
  "application/pdf": new Uint8Array([0x25, 0x50, 0x44, 0x46]), // %PDF
  "application/msword": new Uint8Array([0xd0, 0xcf, 0x11, 0xe0]), // DOC
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": new Uint8Array([0x50, 0x4b, 0x03, 0x04]), // ZIP/DOCX
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
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    // 1. Size check
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File exceeds 5MB limit." }, { status: 400 });
    }

    if (file.size === 0) {
      return NextResponse.json({ error: "Empty file is not allowed." }, { status: 400 });
    }

    // 2. MIME type check (client-declared)
    const declaredType = file.type.toLowerCase();
    if (!ALLOWED_MIME_TYPES.includes(declaredType)) {
      return NextResponse.json(
        { error: "Only PDF and Word documents (.pdf, .doc, .docx) are allowed." },
        { status: 400 }
      );
    }

    // 3. Read buffer and verify magic bytes (prevents MIME spoofing)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    if (!checkMagicBytes(buffer, declaredType)) {
      return NextResponse.json(
        { error: "File content does not match declared type. Upload rejected." },
        { status: 400 }
      );
    }

    // 4. Extension check — must match MIME
    const originalExt = path.extname(file.name).toLowerCase();
    const allowedExtensions: Record<string, string[]> = {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    };
    if (!allowedExtensions[declaredType]?.includes(originalExt)) {
      return NextResponse.json(
        { error: "File extension does not match file type." },
        { status: 400 }
      );
    }

    // 5. Generate a cryptographically safe filename (no user input in path)
    const safeExt = originalExt;
    const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
    const uniqueFilename = `cv-${uniqueId}${safeExt}`;

    // 6. Write to upload directory
    const uploadDir = path.join(process.cwd(), "public", "uploads", "cv");
    await mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, uniqueFilename);
    await writeFile(filePath, buffer);

    const fileUrl = `/uploads/cv/${uniqueFilename}`;
    return NextResponse.json({ filePath: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("CV Upload error:", error);
    return NextResponse.json({ error: "Internal Server Error during upload." }, { status: 500 });
  }
}
