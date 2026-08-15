"use client";

import { useState } from "react";

interface FileUploadProps {
  label: React.ReactNode;
  value: string | null | undefined;
  onChange: (url: string) => void;
  accept?: string;
}

export default function FileUpload({ label, value, onChange, accept = "image/*" }: FileUploadProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    if (value) {
      formData.append("oldFileUrl", value);
    }

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      onChange(data.url);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during upload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label style={{ fontSize: "14px", fontWeight: "bold" }}>{label}</label>
      
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <input 
          type="file" 
          accept={accept} 
          onChange={handleFileChange} 
          disabled={loading}
          style={{ 
            padding: "8px", 
            border: "1px dashed #d1d5db", 
            borderRadius: "4px",
            width: "100%",
            backgroundColor: "#f9fafb"
          }} 
        />
        {loading && <span style={{ fontSize: "12px", color: "#6b7280" }}>Uploading...</span>}
      </div>

      {error && <span style={{ fontSize: "12px", color: "#ef4444" }}>{error}</span>}
      
      {value && (
        <div style={{ marginTop: "8px", padding: "12px", backgroundColor: "#f8fafc", borderRadius: "6px", fontSize: "14px", border: "1px solid #e2e8f0" }}>
          <strong style={{ display: "block", marginBottom: "8px", color: "#475569" }}>Current File:</strong> 
          {value.toLowerCase().endsWith(".pdf") ? (
            <a href={value} target="_blank" rel="noreferrer" style={{ color: "#2563eb", textDecoration: "underline", fontWeight: "500" }}>{value}</a>
          ) : (
            <div>
              <img src={value} alt="Preview" style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "6px", objectFit: "contain", border: "1px solid #cbd5e1", backgroundColor: "white", padding: "4px" }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
