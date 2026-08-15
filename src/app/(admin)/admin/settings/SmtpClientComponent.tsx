"use client";

import { useState } from "react";
import { updateSmtpConfig } from "@/app/actions/smtp";
import type { SmtpConfig } from "@/lib/prisma";

export default function SmtpClientComponent({ config }: { config: SmtpConfig | null }) {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    host: config?.host || "",
    port: config?.port || 465,
    secure: config?.secure ?? true,
    user: config?.user || "",
    password: "", // Never populate password on client side
    fromEmail: config?.fromEmail || "",
    notifyEmail: config?.notifyEmail || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    try {
      await updateSmtpConfig(formData);
      setSuccessMsg("SMTP settings saved successfully.");
      setFormData({ ...formData, password: "" }); // Reset password field
    } catch (error) {
      console.error(error);
      alert("Error saving SMTP settings.");
    }
    setLoading(false);
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>SMTP Settings</h1>
        <p style={{ color: "#6b7280", marginTop: "5px" }}>Configure the email server used to send notifications for leads and contacts.</p>
      </div>

      <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", maxWidth: "600px" }}>
        {successMsg && <div style={{ padding: "12px", backgroundColor: "#d1fae5", color: "#065f46", borderRadius: "4px", marginBottom: "20px" }}>{successMsg}</div>}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: "bold" }}>SMTP Host</label>
            <input required type="text" value={formData.host} onChange={(e) => setFormData({ ...formData, host: e.target.value })} placeholder="e.g. smtp.gmail.com" style={{ width: "100%", padding: "8px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: "bold" }}>SMTP Port</label>
            <input required type="number" value={formData.port} onChange={(e) => setFormData({ ...formData, port: parseInt(e.target.value) })} style={{ width: "100%", padding: "8px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input type="checkbox" id="secure" checked={formData.secure} onChange={(e) => setFormData({ ...formData, secure: e.target.checked })} />
            <label htmlFor="secure" style={{ fontSize: "14px" }}>Use Secure Connection (SSL/TLS)</label>
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: "bold" }}>SMTP Username</label>
            <input required type="text" value={formData.user} onChange={(e) => setFormData({ ...formData, user: e.target.value })} style={{ width: "100%", padding: "8px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: "bold" }}>SMTP Password</label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder={config ? "Leave blank to keep existing password" : "Enter password"} style={{ width: "100%", padding: "8px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: "bold" }}>From Email Address</label>
            <input required type="email" value={formData.fromEmail} onChange={(e) => setFormData({ ...formData, fromEmail: e.target.value })} placeholder="noreply@trotsolutions.com" style={{ width: "100%", padding: "8px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: "bold" }}>Notification Email (Optional)</label>
            <input type="email" value={formData.notifyEmail} onChange={(e) => setFormData({ ...formData, notifyEmail: e.target.value })} placeholder="admin@trotsolutions.com" style={{ width: "100%", padding: "8px", border: "1px solid #d1d5db", borderRadius: "4px" }} />
            <span style={{ fontSize: "12px", color: "#6b7280" }}>Where should lead notifications be sent?</span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button type="submit" disabled={loading} style={{ padding: "10px 20px", backgroundColor: "#eab308", color: "#1e293b", border: "none", borderRadius: "4px", cursor: "pointer", opacity: loading ? 0.7 : 1, width: "100%", fontWeight: "bold" }}>
              {loading ? "Saving..." : "Save Configuration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
