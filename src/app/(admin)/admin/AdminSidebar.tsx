"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Blogs", path: "/admin/blogs" },
    { name: "Tech Talks", path: "/admin/tech-talks" },
    { name: "Equipments", path: "/admin/equipments" },
    { name: "Careers", path: "/admin/careers" },
    { name: "Leads & Forms", path: "/admin/leads" },
    { name: "My Profile", path: "/admin/profile" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <aside style={{ width: "260px", backgroundColor: "#1e293b", color: "#fff", padding: "20px", display: "flex", flexDirection: "column", boxShadow: "2px 0 5px rgba(0,0,0,0.1)" }}>
      <div style={{ marginBottom: "40px", textAlign: "center", backgroundColor: "white", padding: "10px", borderRadius: "8px" }}>
        <Link href="/">
          <img src="/assets/images/resources/logo.webp" alt="TROT Logo" style={{ maxWidth: "100%", height: "auto" }} />
        </Link>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        {navItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== "/admin" && pathname.startsWith(item.path));
          return (
            <Link
              key={item.path}
              href={item.path}
              style={{
                padding: "12px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                backgroundColor: isActive ? "#eab308" : "transparent", // Yellow theme
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#1e293b" : "#cbd5e1", // Dark text on active yellow
                transition: "all 0.2s"
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: "auto", paddingTop: "20px", borderTop: "1px solid #334155" }}>
        <LogoutButton />
      </div>
    </aside>
  );
}
