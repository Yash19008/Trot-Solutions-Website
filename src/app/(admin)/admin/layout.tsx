import React from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout" style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main style={{ flex: 1, minWidth: 0, width: "100%", padding: "40px", overflowY: "auto", overflowX: "hidden", height: "100vh" }}>
        {children}
      </main>
    </div>
  );
}
