"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/login` })}
      style={{
        marginTop: "auto",
        backgroundColor: "#ef4444",
        color: "white",
        border: "none",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Log Out
    </button>
  );
}
