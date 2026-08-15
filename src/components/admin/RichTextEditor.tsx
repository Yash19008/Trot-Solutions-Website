"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";
import DOMPurify from "dompurify";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false, loading: () => <p>Loading Editor...</p> });

interface RichTextEditorProps {
  label: React.ReactNode;
  value: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ label, value, onChange }: RichTextEditorProps) {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        ["link", "image", "video"],
        ["blockquote", "code-block"],
        ["clean"],
      ],
    }),
    []
  );

  const formats = [
    "header",
    "bold", "italic", "underline", "strike",
    "list",
    "script",
    "indent",
    "color", "background",
    "link", "image", "video",
    "blockquote", "code-block"
  ];

  const handleChange = (content: string) => {
    // Basic sanitization, though React/Next will also handle innerHTML securely.
    // DOMPurify is used here if you later decide to render it directly.
    onChange(content);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <style>{`
        .quill-editor-container .ql-editor {
          min-height: 400px;
          font-size: 16px;
        }
      `}</style>
      <label style={{ fontSize: "14px", fontWeight: "bold" }}>{label}</label>
      <div className="quill-editor-container" style={{ backgroundColor: "white" }}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={handleChange}
          modules={modules}
          formats={formats}
        />
      </div>
      {/* 
        To render securely on the frontend later, use:
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(dbContent) }} />
      */}
    </div>
  );
}
