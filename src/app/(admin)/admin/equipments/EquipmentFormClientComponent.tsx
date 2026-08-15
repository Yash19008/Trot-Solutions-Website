"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createEquipment, updateEquipment } from "@/app/actions/equipment";
import type { Equipment } from "@/lib/prisma";
import Link from "next/link";
import FileUpload from "@/components/admin/FileUpload";

export default function EquipmentFormClientComponent({ initialEq }: { initialEq?: Equipment | null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: initialEq?.title || "",
    image: initialEq?.image || "",
    image2: initialEq?.image2 || "",
    image3: initialEq?.image3 || "",
    image4: initialEq?.image4 || "",
    image5: initialEq?.image5 || "",
    modelNo: initialEq?.modelNo || "",
    stock: initialEq?.stock?.toString() || "0",
    location: initialEq?.location || "",
    incoterms: initialEq?.incoterms || "",
    status: initialEq?.status || "available",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const dataToSubmit = {
      ...formData,
      stock: parseInt(formData.stock, 10) || 0,
    };

    try {
      if (initialEq) {
        await updateEquipment(initialEq.id, dataToSubmit);
      } else {
        await createEquipment(dataToSubmit);
      }
      router.push("/admin/equipments");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Error saving equipment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{initialEq ? "Edit Equipment" : "New Equipment"}</h1>
        <Link href="/admin/equipments" style={{ padding: "8px 16px", backgroundColor: "#f3f4f6", color: "#374151", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
          Back to List
        </Link>
      </div>

      <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", width: "100%" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Equipment Title <span style={{color: "red"}}>*</span></label>
              <input required type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Model No. <span style={{color: "red"}}>*</span></label>
              <input required type="text" value={formData.modelNo} onChange={(e) => setFormData({ ...formData, modelNo: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "24px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Stock <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></label>
              <input type="number" min="0" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Location <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></label>
              <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Incoterms <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></label>
              <input type="text" value={formData.incoterms} onChange={(e) => setFormData({ ...formData, incoterms: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>Status <span style={{color: "red"}}>*</span></label>
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} style={{ width: "100%", padding: "10px", border: "1px solid #d1d5db", borderRadius: "4px", backgroundColor: "white" }}>
                <option value="available">Available</option>
                <option value="sold">Sold</option>
              </select>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <FileUpload 
              label={<>Primary Image <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></>}
              value={formData.image} 
              onChange={(url) => setFormData({ ...formData, image: url })} 
            />
            <FileUpload 
              label={<>Image 2 <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></>}
              value={formData.image2} 
              onChange={(url) => setFormData({ ...formData, image2: url })} 
            />
            <FileUpload 
              label={<>Image 3 <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></>}
              value={formData.image3} 
              onChange={(url) => setFormData({ ...formData, image3: url })} 
            />
            <FileUpload 
              label={<>Image 4 <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></>}
              value={formData.image4} 
              onChange={(url) => setFormData({ ...formData, image4: url })} 
            />
            <FileUpload 
              label={<>Image 5 <span style={{color: "#6b7280", fontWeight: "normal", fontSize: "12px"}}>(Optional)</span></>}
              value={formData.image5} 
              onChange={(url) => setFormData({ ...formData, image5: url })} 
            />
          </div>
          
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "10px" }}>
            <button type="submit" disabled={loading} style={{ padding: "12px 32px", backgroundColor: "#eab308", color: "#1e293b", border: "none", borderRadius: "4px", cursor: "pointer", opacity: loading ? 0.7 : 1, fontWeight: "bold", fontSize: "16px" }}>
              {loading ? "Saving..." : "Save Equipment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
