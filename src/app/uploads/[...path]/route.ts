import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const UPLOAD_ROOT = path.join(process.cwd(), "public", "uploads");

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function resolveUploadPath(segments: string[]): string | null {
  const relativePath = path.normalize(segments.join("/"));
  if (!relativePath || relativePath === "." || relativePath.startsWith("..")) {
    return null;
  }

  const filePath = path.resolve(UPLOAD_ROOT, relativePath);
  if (!filePath.startsWith(UPLOAD_ROOT + path.sep) && filePath !== UPLOAD_ROOT) {
    return null;
  }

  return filePath;
}

async function serveUpload(params: { path?: string[] }) {
  const segments = params.path ?? [];
  const filePath = resolveUploadPath(segments);

  if (!filePath) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  try {
    const file = await readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = CONTENT_TYPES[ext] ?? "application/octet-stream";

    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ path?: string[] }> }
) {
  const params = await context.params;
  return serveUpload(params);
}

export async function HEAD(
  _request: NextRequest,
  context: { params: Promise<{ path?: string[] }> }
) {
  const response = await GET(_request, context);
  return new NextResponse(null, {
    status: response.status,
    headers: response.headers,
  });
}