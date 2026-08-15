import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const [blogCount, techTalkCount, equipmentCount, careerLeadCount, inquiryLeadCount] = await Promise.all([
    prisma.blog.count(),
    prisma.techTalk.count(),
    prisma.equipment.count(),
    prisma.careerLead.count(),
    prisma.inquiryLead.count(),
  ]);

  return (
    <div>
      <h1 style={{ fontSize: "32px", marginBottom: "20px", fontWeight: "bold", color: "#111827" }}>
        Dashboard
      </h1>
      <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "40px" }}>
        Welcome back, {session.user?.name || session.user?.email}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontSize: "18px", color: "#6b7280", marginBottom: "10px" }}>Blogs</h3>
          <p style={{ fontSize: "36px", fontWeight: "bold", color: "#111827" }}>{blogCount}</p>
          <Link href="/admin/blogs" style={{ color: "#d97706", textDecoration: "none", fontSize: "14px", marginTop: "10px", display: "inline-block" }}>Manage Blogs &rarr;</Link>
        </div>

        <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontSize: "18px", color: "#6b7280", marginBottom: "10px" }}>Tech Talks</h3>
          <p style={{ fontSize: "36px", fontWeight: "bold", color: "#111827" }}>{techTalkCount}</p>
          <Link href="/admin/tech-talks" style={{ color: "#d97706", textDecoration: "none", fontSize: "14px", marginTop: "10px", display: "inline-block" }}>Manage Tech Talks &rarr;</Link>
        </div>

        <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontSize: "18px", color: "#6b7280", marginBottom: "10px" }}>Equipments</h3>
          <p style={{ fontSize: "36px", fontWeight: "bold", color: "#111827" }}>{equipmentCount}</p>
          <Link href="/admin/equipments" style={{ color: "#d97706", textDecoration: "none", fontSize: "14px", marginTop: "10px", display: "inline-block" }}>Manage Equipments &rarr;</Link>
        </div>

        <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontSize: "18px", color: "#6b7280", marginBottom: "10px" }}>Inquiries</h3>
          <p style={{ fontSize: "36px", fontWeight: "bold", color: "#111827" }}>{inquiryLeadCount}</p>
          <Link href="/admin/leads" style={{ color: "#d97706", textDecoration: "none", fontSize: "14px", marginTop: "10px", display: "inline-block" }}>View Inquiries &rarr;</Link>
        </div>

        <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontSize: "18px", color: "#6b7280", marginBottom: "10px" }}>Job Applications</h3>
          <p style={{ fontSize: "36px", fontWeight: "bold", color: "#111827" }}>{careerLeadCount}</p>
          <Link href="/admin/leads" style={{ color: "#d97706", textDecoration: "none", fontSize: "14px", marginTop: "10px", display: "inline-block" }}>View Applications &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
