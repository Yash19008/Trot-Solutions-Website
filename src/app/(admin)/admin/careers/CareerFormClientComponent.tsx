"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCareer, updateCareer } from "@/app/actions/career";
import type { Career } from "@/lib/prisma";
import Link from "next/link";
import FileUpload from "@/components/admin/FileUpload";

export default function CareerFormClientComponent({ initialCareer }: { initialCareer?: Career | null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Format the deadline to YYYY-MM-DD for the HTML date input if it exists
  const defaultDeadline = initialCareer?.deadline 
    ? new Date(initialCareer.deadline).toISOString().split('T')[0]
    : "";

  const [formData, setFormData] = useState({
    title: initialCareer?.title || "",
    position: initialCareer?.position || "",
    image: initialCareer?.image || "",
    location: initialCareer?.location || "",
    deadline: defaultDeadline,
    excerpt: initialCareer?.excerpt || "",
    jobDetailsPdf: initialCareer?.jobDetailsPdf || "",
    status: initialCareer?.status || "open",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Parse deadline string to Date object
    const dataToSubmit = {
      ...formData,
      deadline: formData.deadline ? new Date(formData.deadline) : null,
    };

    try {
      if (initialCareer) {
        await updateCareer(initialCareer.id, dataToSubmit);
      } else {
        await createCareer(dataToSubmit);
      }
      router.push("/admin/careers");
      router.refresh(); // Refresh server data
    } catch (error) {
      console.error(error);
      alert("Error saving career.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{initialCareer ? "Edit Career" : "New Career"}</h1>
        <Link href="/admin/careers" style={{ padding: "8px 16px", backgroundColor: "#f3f4f6", color: "#374151", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
          Back to List
        </Link>
      </div>

      <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", width: "100%" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Job Title <span style={{color: "red"}}>*</span></label>
              <input required type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Position Code / Type <span style={{color: "red"}}>*</span></label>
              <input required type="text" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Location <span style={{color: "red"}}>*</span></label>
              <input required type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Deadline <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></label>
              <input type="date" value={formData.deadline} onChange={(e) => setFormData({ ...formData, deadline: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Status <span style={{color: "red"}}>*</span></label>
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px", backgroundColor: "white" }}>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <FileUpload 
              label={<>Cover Image <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></>}
              value={formData.image} 
              onChange={(url) => setFormData({ ...formData, image: url })} 
            />
            <FileUpload 
              label={<>Job Details (PDF) <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></>}
              value={formData.jobDetailsPdf} 
              onChange={(url) => setFormData({ ...formData, jobDetailsPdf: url })} 
              accept="application/pdf"
            />
          </div>
          
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Short Description (Excerpt) <span style={{color: "red"}}>*</span></label>
            <textarea required value={formData.excerpt || ""} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} style={{ width: "100%", padding: "12px", border: "1px solid #d1d5db", borderRadius: "4px", minHeight: "150px" }} />
          </div>
          
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "10px" }}>
            <button type="submit" disabled={loading} style={{ padding: "12px 32px", backgroundColor: "#eab308", color: "#1e293b", border: "none", borderRadius: "4px", cursor: "pointer", opacity: loading ? 0.7 : 1, fontWeight: "bold", fontSize: "16px" }}>
              {loading ? "Saving..." : "Save Career"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
