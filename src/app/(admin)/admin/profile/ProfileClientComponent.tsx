"use client";

import { useState } from "react";
import { updateAdminProfile } from "@/app/actions/profile";
import { useRouter } from "next/navigation";

export default function ProfileClientComponent({ initialEmail }: { initialEmail: string }) {
  const [email, setEmail] = useState(initialEmail);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (newPassword && newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      setLoading(false);
      return;
    }

    if (newPassword && !currentPassword) {
      setError("Please enter your current password to set a new one.");
      setLoading(false);
      return;
    }

    try {
      await updateAdminProfile({
        email,
        currentPassword: currentPassword || undefined,
        newPassword: newPassword || undefined,
      });

      setSuccess("Profile updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "An error occurred while updating profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#1e293b" }}>My Profile</h1>
        <p style={{ color: "#64748b", marginTop: "4px" }}>Update your email address or password</p>
      </div>

      <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", maxWidth: "600px" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          {error && <div style={{ padding: "12px", backgroundColor: "#fef2f2", color: "#ef4444", borderRadius: "6px", border: "1px solid #f87171" }}>{error}</div>}
          {success && <div style={{ padding: "12px", backgroundColor: "#f0fdf4", color: "#22c55e", borderRadius: "6px", border: "1px solid #4ade80" }}>{success}</div>}

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#334155" }}>Email Address *</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              style={{ padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "15px", backgroundColor: "#f8fafc" }}
            />
          </div>

          <hr style={{ borderColor: "#f1f5f9", margin: "10px 0" }} />
          
          <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#334155", margin: 0 }}>Change Password (Optional)</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#334155" }}>Current Password</label>
            <input 
              type="password" 
              value={currentPassword} 
              onChange={(e) => setCurrentPassword(e.target.value)} 
              style={{ padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "15px", backgroundColor: "#f8fafc" }}
              placeholder="Leave blank if not changing password"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#334155" }}>New Password</label>
            <input 
              type="password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              style={{ padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "15px", backgroundColor: "#f8fafc" }}
              placeholder="Enter new password"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#334155" }}>Confirm New Password</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              style={{ padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "15px", backgroundColor: "#f8fafc" }}
              placeholder="Confirm new password"
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
            <button 
              type="submit" 
              disabled={loading}
              style={{ 
                padding: "12px 24px", 
                backgroundColor: "#eab308", 
                color: "white", 
                border: "none", 
                borderRadius: "6px", 
                cursor: loading ? "not-allowed" : "pointer",
                fontWeight: "bold",
                fontSize: "15px",
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
