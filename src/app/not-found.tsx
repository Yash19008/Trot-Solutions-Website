import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      color: "#1e293b",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{
        fontSize: "120px",
        fontWeight: "900",
        margin: "0",
        color: "#eab308", // Yellow theme
        lineHeight: "1"
      }}>
        404
      </h1>
      
      <h2 style={{
        fontSize: "32px",
        fontWeight: "bold",
        marginTop: "20px",
        marginBottom: "10px"
      }}>
        Page Not Found
      </h2>
      
      <p style={{
        fontSize: "18px",
        color: "#64748b",
        maxWidth: "500px",
        marginBottom: "40px"
      }}>
        Oops! The page you are looking for doesn't exist or has been moved. 
      </p>

      <div style={{ display: "flex", gap: "16px" }}>
        <Link 
          href="/" 
          style={{
            padding: "12px 24px",
            backgroundColor: "#eab308", // Yellow theme
            color: "#1e293b", // Dark text for contrast on yellow
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            transition: "all 0.2s",
            boxShadow: "0 4px 6px -1px rgba(234, 179, 8, 0.2)"
          }}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
