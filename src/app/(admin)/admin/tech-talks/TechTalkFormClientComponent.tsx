"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createTechTalk, updateTechTalk } from "@/app/actions/techtalk";
import type { TechTalk } from "@/lib/prisma";
import Link from "next/link";
import FileUpload from "@/components/admin/FileUpload";
import RichTextEditor from "@/components/admin/RichTextEditor";

export default function TechTalkFormClientComponent({ initialTalk }: { initialTalk?: TechTalk | null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: initialTalk?.title || "",
    slug: initialTalk?.slug || "",
    image: initialTalk?.image || "",
    excerpt: initialTalk?.excerpt || "",
    content: initialTalk?.content || "",
    status: initialTalk?.status || "draft",
  });

  // Auto-generate slug from title if it's a new tech talk
  useEffect(() => {
    if (!initialTalk && formData.title) {
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.title, initialTalk]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (initialTalk) {
        await updateTechTalk(initialTalk.id, formData);
      } else {
        await createTechTalk(formData);
      }
      router.push("/admin/tech-talks");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Error saving tech talk. Ensure slug is unique.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{initialTalk ? "Edit Tech Talk" : "New Tech Talk"}</h1>
        <Link href="/admin/tech-talks" style={{ padding: "8px 16px", backgroundColor: "#f3f4f6", color: "#374151", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
          Back to List
        </Link>
      </div>

      <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", width: "100%" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Title <span style={{color: "red"}}>*</span></label>
              <input required type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Slug <span style={{color: "red"}}>*</span></label>
              <input required type="text" value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Status <span style={{color: "red"}}>*</span></label>
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px", backgroundColor: "white" }}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div>
              <FileUpload 
                label={<>Cover Image <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></>}
                value={formData.image} 
                onChange={(url) => setFormData({ ...formData, image: url })} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Excerpt (Short Description) <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></label>
            <textarea value={formData.excerpt || ""} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} style={{ width: "100%", padding: "12px", border: "1px solid #d1d5db", borderRadius: "4px", minHeight: "80px" }} />
          </div>

          <div>
            <RichTextEditor 
              label={<>Content <span style={{color: "red"}}>*</span></>}
              value={formData.content}
              onChange={(html) => setFormData({ ...formData, content: html })}
            />
          </div>
          
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "10px" }}>
            <button type="submit" disabled={loading} style={{ padding: "12px 32px", backgroundColor: "#eab308", color: "#1e293b", border: "none", borderRadius: "4px", cursor: "pointer", opacity: loading ? 0.7 : 1, fontWeight: "bold", fontSize: "16px" }}>
              {loading ? "Saving..." : "Save Tech Talk"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
