"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import DataTable from "react-data-table-component";
import { updateInquiryStatus, deleteInquiryLead, updateCareerLeadStatus, deleteCareerLead } from "@/app/actions/lead";
import type { InquiryLead, CareerLead } from "@/lib/prisma";
import { useRouter } from "next/navigation";

/** Format a date consistently on both server and client. */
function formatDate(date: Date | string): string {
  const d = new Date(date);
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  const year = d.getUTCFullYear();
  return `${day} ${month} ${year}`;
}

/* ─── Status badge helpers ─── */
const inquiryStatusStyle = (status: string): React.CSSProperties => {
  const map: Record<string, { bg: string; color: string }> = {
    NEW: { bg: "#dbeafe", color: "#1d4ed8" },
    Contacted: { bg: "#fef3c7", color: "#92400e" },
    Closed: { bg: "#f3f4f6", color: "#6b7280" },
  };
  const s = map[status] ?? { bg: "#f3f4f6", color: "#374151" };
  return { background: s.bg, color: s.color, padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 700, whiteSpace: "nowrap" };
};

const careerStatusStyle = (status: string): React.CSSProperties => {
  const map: Record<string, { bg: string; color: string }> = {
    NEW: { bg: "#dbeafe", color: "#1d4ed8" },
    Reviewed: { bg: "#fef3c7", color: "#92400e" },
    Interviewing: { bg: "#ede9fe", color: "#6d28d9" },
    Hired: { bg: "#dcfce7", color: "#15803d" },
    Rejected: { bg: "#fee2e2", color: "#b91c1c" },
  };
  const s = map[status] ?? { bg: "#f3f4f6", color: "#374151" };
  return { background: s.bg, color: s.color, padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 700, whiteSpace: "nowrap" };
};

/* ─── Detail row helper ─── */
function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#94a3b8" }}>
        {label}
      </span>
      <span style={{ fontSize: "14px", color: "#1e293b", lineHeight: "1.5", wordBreak: "break-word" }}>
        {value || <span style={{ color: "#cbd5e1" }}>—</span>}
      </span>
    </div>
  );
}

/* ─── Modal overlay ─── */
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(15, 23, 42, 0.65)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        animation: "fadeInOverlay 0.15s ease",
      }}
    >
      <div style={{
        background: "#fff", borderRadius: "14px", width: "100%", maxWidth: "680px",
        maxHeight: "90vh", display: "flex", flexDirection: "column",
        boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
        animation: "slideUpModal 0.2s ease",
      }}>
        {/* Modal header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px", borderBottom: "1px solid #f1f5f9",
          background: "#1e293b", borderRadius: "14px 14px 0 0",
        }}>
          <h2 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#f1f5f9" }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer",
              width: "32px", height: "32px", borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#cbd5e1", fontSize: "18px", lineHeight: 1, transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            ×
          </button>
        </div>
        {/* Modal body */}
        <div style={{ overflowY: "auto", padding: "24px", flex: 1 }}>
          {children}
        </div>
      </div>
      <style>{`
        @keyframes fadeInOverlay { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUpModal { from { transform: translateY(16px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}

/* ─── Inquiry detail modal content ─── */
function InquiryDetailModal({ lead, onClose, onStatusChange, onDelete }: {
  lead: InquiryLead;
  onClose: () => void;
  onStatusChange: (id: string, status: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <Modal title={`Inquiry — ${lead.name}`} onClose={onClose}>
      {/* Top meta strip */}
      <div style={{
        display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px",
        padding: "14px 16px", background: "#f8fafc", borderRadius: "10px",
        border: "1px solid #e2e8f0",
      }}>
        <span style={inquiryStatusStyle(lead.status)}>{lead.status}</span>
        {lead.userType && (
          <span style={{
            background: lead.userType === "Job Seeker" ? "#dbeafe" : "#dcfce7",
            color: lead.userType === "Job Seeker" ? "#1d4ed8" : "#15803d",
            padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 700,
          }}>{lead.userType}</span>
        )}
        {lead.category && (
          <span style={{ background: "#fef3c7", color: "#92400e", padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 700 }}>
            {lead.category}
          </span>
        )}
        <span style={{ marginLeft: "auto", fontSize: "12px", color: "#94a3b8", alignSelf: "center" }}>
          📅 {formatDate(lead.createdAt)}
        </span>
      </div>

      {/* Contact details grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px", marginBottom: "20px" }}>
        <DetailRow label="Full Name" value={lead.name} />
        <DetailRow label="Email" value={
          <a href={`mailto:${lead.email}`} style={{ color: "#2563eb" }}>{lead.email}</a>
        } />
        <DetailRow label="Phone" value={
          lead.phone ? <a href={`tel:${lead.phone}`} style={{ color: "#2563eb" }}>{lead.phone}</a> : null
        } />
        <DetailRow label="Company" value={lead.companyName} />
      </div>

      {/* Message */}
      <div style={{ marginBottom: "24px" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#94a3b8" }}>Message</span>
        <div style={{
          marginTop: "8px", padding: "14px 16px", background: "#f8fafc",
          borderRadius: "8px", border: "1px solid #e2e8f0",
          whiteSpace: "pre-wrap", lineHeight: "1.7", color: "#334155", fontSize: "14px",
        }}>
          {lead.message}
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
          <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569", whiteSpace: "nowrap" }}>Update Status:</label>
          <select
            value={lead.status}
            onChange={(e) => onStatusChange(lead.id, e.target.value)}
            style={{ padding: "6px 10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "13px", flex: 1 }}
          >
            <option value="NEW">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <button
          onClick={() => { onClose(); onDelete(lead.id); }}
          style={{ padding: "8px 18px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: 600 }}
        >
          🗑 Delete
        </button>
        <button
          onClick={onClose}
          style={{ padding: "8px 18px", background: "#1e293b", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: 600 }}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

/* ─── Career detail modal content ─── */
function CareerDetailModal({ lead, onClose, onStatusChange, onDelete }: {
  lead: CareerLead;
  onClose: () => void;
  onStatusChange: (id: string, status: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <Modal title={`Application — ${lead.name}`} onClose={onClose}>
      {/* Top meta strip */}
      <div style={{
        display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px",
        padding: "14px 16px", background: "#f8fafc", borderRadius: "10px",
        border: "1px solid #e2e8f0",
      }}>
        <span style={careerStatusStyle(lead.status)}>{lead.status}</span>
        {lead.position && (
          <span style={{ background: "#fef3c7", color: "#92400e", padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 700 }}>
            {lead.position}
          </span>
        )}
        <span style={{ marginLeft: "auto", fontSize: "12px", color: "#94a3b8", alignSelf: "center" }}>
          📅 {formatDate(lead.createdAt)}
        </span>
      </div>

      {/* Contact details grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "18px", marginBottom: "20px" }}>
        <DetailRow label="Full Name" value={lead.name} />
        <DetailRow label="Email" value={
          <a href={`mailto:${lead.email}`} style={{ color: "#2563eb" }}>{lead.email}</a>
        } />
        <DetailRow label="Phone" value={
          lead.phone ? <a href={`tel:${lead.phone}`} style={{ color: "#2563eb" }}>{lead.phone}</a> : null
        } />
        <DetailRow label="Position Applied" value={lead.position || "General Application"} />
        <DetailRow label="Resume / CV" value={
          lead.resumeUrl
            ? <a href={lead.resumeUrl} target="_blank" rel="noreferrer" style={{ color: "#2563eb", fontWeight: 600 }}>📄 Download CV</a>
            : null
        } />
      </div>

      {/* Cover letter */}
      <div style={{ marginBottom: "24px" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#94a3b8" }}>Cover Letter</span>
        <div style={{
          marginTop: "8px", padding: "14px 16px", background: "#f8fafc",
          borderRadius: "8px", border: "1px solid #e2e8f0",
          whiteSpace: "pre-wrap", lineHeight: "1.7", color: "#334155", fontSize: "14px",
        }}>
          {lead.coverLetter || <span style={{ color: "#94a3b8", fontStyle: "italic" }}>No cover letter provided.</span>}
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
          <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569", whiteSpace: "nowrap" }}>Update Status:</label>
          <select
            value={lead.status}
            onChange={(e) => onStatusChange(lead.id, e.target.value)}
            style={{ padding: "6px 10px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "13px", flex: 1 }}
          >
            <option value="NEW">New</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Hired">Hired</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <button
          onClick={() => { onClose(); onDelete(lead.id); }}
          style={{ padding: "8px 18px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: 600 }}
        >
          🗑 Delete
        </button>
        <button
          onClick={onClose}
          style={{ padding: "8px 18px", background: "#1e293b", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: 600 }}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

/* ─── Shared action buttons style ─── */
const viewBtnStyle: React.CSSProperties = {
  padding: "6px 14px", background: "#1e293b", color: "#fff",
  border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px", fontWeight: 600,
};
const deleteBtnStyle: React.CSSProperties = {
  padding: "6px 14px", background: "#ef4444", color: "#fff",
  border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px", fontWeight: 600,
};

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function LeadsClientComponent({
  initialInquiries,
  initialCareers,
}: {
  initialInquiries: InquiryLead[];
  initialCareers: CareerLead[];
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"inquiries" | "careers">("inquiries");
  const [inquiries, setInquiries] = useState<InquiryLead[]>(initialInquiries);
  const [careers, setCareers] = useState<CareerLead[]>(initialCareers);

  // Modal state
  const [viewingInquiry, setViewingInquiry] = useState<InquiryLead | null>(null);
  const [viewingCareer, setViewingCareer] = useState<CareerLead | null>(null);

  // Filter state
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const lowerQuery = searchQuery.toLowerCase();

  // Derived filtered data
  const filteredInquiries = inquiries.filter((lead) => {
    const leadDate = new Date(lead.createdAt);
    if (startDate && new Date(startDate) > leadDate) return false;
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      if (end < leadDate) return false;
    }
    
    if (lowerQuery) {
      const matchesSearch = 
        lead.name.toLowerCase().includes(lowerQuery) ||
        lead.email.toLowerCase().includes(lowerQuery) ||
        (lead.companyName && lead.companyName.toLowerCase().includes(lowerQuery)) ||
        (lead.phone && lead.phone.toLowerCase().includes(lowerQuery)) ||
        (lead.message && lead.message.toLowerCase().includes(lowerQuery));
      if (!matchesSearch) return false;
    }
    return true;
  });

  const filteredCareers = careers.filter((lead) => {
    const leadDate = new Date(lead.createdAt);
    if (startDate && new Date(startDate) > leadDate) return false;
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      if (end < leadDate) return false;
    }

    if (lowerQuery) {
      const matchesSearch = 
        lead.name.toLowerCase().includes(lowerQuery) ||
        lead.email.toLowerCase().includes(lowerQuery) ||
        (lead.position && lead.position.toLowerCase().includes(lowerQuery)) ||
        (lead.phone && lead.phone.toLowerCase().includes(lowerQuery));
      if (!matchesSearch) return false;
    }
    return true;
  });

  // Export Logic
  const handleExportCSV = () => {
    const type = activeTab;
    const data = type === "inquiries" ? filteredInquiries : filteredCareers;

    if (data.length === 0) {
      toast.error("No data to export.");
      return;
    }

    let csvContent = "";

    if (type === "inquiries") {
      csvContent += "S.No,Name,Company,Email,Phone,User Type,Category,Status,Date,Message\n";
      (data as InquiryLead[]).forEach((lead, i) => {
        const row = [
          i + 1,
          `"${(lead.name || "").replace(/"/g, '""')}"`,
          `"${(lead.companyName || "").replace(/"/g, '""')}"`,
          `"${(lead.email || "").replace(/"/g, '""')}"`,
          `"${(lead.phone || "").replace(/"/g, '""')}"`,
          `"${(lead.userType || "").replace(/"/g, '""')}"`,
          `"${(lead.category || "").replace(/"/g, '""')}"`,
          `"${(lead.status || "").replace(/"/g, '""')}"`,
          `"${formatDate(lead.createdAt)}"`,
          `"${(lead.message || "").replace(/"/g, '""').replace(/\n/g, ' ')}"`,
        ];
        csvContent += row.join(",") + "\n";
      });
    } else {
      csvContent += "S.No,Name,Email,Phone,Position,Status,Date,Resume Link,Cover Letter\n";
      (data as CareerLead[]).forEach((lead, i) => {
        const resumeLink = lead.resumeUrl
          ? (lead.resumeUrl.startsWith('http') ? lead.resumeUrl : `${window.location.origin}${lead.resumeUrl}`)
          : "N/A";
        const row = [
          i + 1,
          `"${(lead.name || "").replace(/"/g, '""')}"`,
          `"${(lead.email || "").replace(/"/g, '""')}"`,
          `"${(lead.phone || "").replace(/"/g, '""')}"`,
          `"${(lead.position || "General Application").replace(/"/g, '""')}"`,
          `"${(lead.status || "").replace(/"/g, '""')}"`,
          `"${formatDate(lead.createdAt)}"`,
          `"${resumeLink}"`,
          `"${(lead.coverLetter || "").replace(/"/g, '""').replace(/\n/g, ' ')}"`,
        ];
        csvContent += row.join(",") + "\n";
      });
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${type}_export_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ── Inquiry handlers ── */
  const handleInquiryStatus = async (id: string, newStatus: string) => {
    try {
      await updateInquiryStatus(id, newStatus);
      setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i)));
      if (viewingInquiry?.id === id) setViewingInquiry((prev) => prev ? { ...prev, status: newStatus } : null);
      router.refresh();
      toast.success("Inquiry status updated");
    } catch { toast.error("Error updating status"); }
  };

  const handleInquiryDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this inquiry?")) {
      try {
        await deleteInquiryLead(id);
        setInquiries((prev) => prev.filter((i) => i.id !== id));
        router.refresh();
        toast.success("Inquiry deleted successfully");
      } catch { toast.error("Error deleting inquiry"); }
    }
  };

  /* ── Career handlers ── */
  const handleCareerStatus = async (id: string, newStatus: string) => {
    try {
      await updateCareerLeadStatus(id, newStatus);
      setCareers((prev) => prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c)));
      if (viewingCareer?.id === id) setViewingCareer((prev) => prev ? { ...prev, status: newStatus } : null);
      router.refresh();
      toast.success("Application status updated");
    } catch { toast.error("Error updating status"); }
  };

  const handleCareerDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this application?")) {
      try {
        await deleteCareerLead(id);
        setCareers((prev) => prev.filter((c) => c.id !== id));
        router.refresh();
        toast.success("Application deleted successfully");
      } catch { toast.error("Error deleting application"); }
    }
  };

  /* ── Table columns ── */
  const inquiryColumns = [
    { name: "Name", selector: (row: InquiryLead) => row.name, sortable: true, wrap: true, minWidth: "160px" },
    {
      name: "User Type",
      cell: (row: InquiryLead) => {
        if (!row.userType) return <span style={{ color: "#9ca3af", fontSize: "12px" }}>—</span>;
        const isJS = row.userType === "Job Seeker";
        return (
          <span style={{ background: isJS ? "#dbeafe" : "#dcfce7", color: isJS ? "#1d4ed8" : "#15803d", padding: "2px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: 600, whiteSpace: "nowrap" }}>
            {row.userType}
          </span>
        );
      },
      sortable: true,
      minWidth: "50px",
    },
    { name: "Email", selector: (row: InquiryLead) => row.email, sortable: true, wrap: true, minWidth: "350px" },
    { name: "Category", selector: (row: InquiryLead) => row.category || "N/A", sortable: true, wrap: true, minWidth: "150px" },
    { name: "Date", selector: (row: InquiryLead) => formatDate(row.createdAt), sortable: true, minWidth: "130px" },
    {
      name: "Status",
      cell: (row: InquiryLead) => <span style={inquiryStatusStyle(row.status)}>{row.status}</span>,
      sortable: true,
      minWidth: "120px",
    },
    {
      name: "Actions",
      cell: (row: InquiryLead) => (
        <div style={{ display: "flex", gap: "6px" }}>
          <button style={viewBtnStyle} onClick={() => setViewingInquiry(row)}>👁 View</button>
          <button style={deleteBtnStyle} onClick={() => handleInquiryDelete(row.id)}>Delete</button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      minWidth: "190px",
    },
  ];

  const careerColumns = [
    { name: "Name", selector: (row: CareerLead) => row.name, sortable: true, wrap: true, minWidth: "160px" },
    { name: "Email", selector: (row: CareerLead) => row.email, sortable: true, wrap: true, minWidth: "350px" },
    { name: "Position", selector: (row: CareerLead) => row.position || "General", sortable: true, wrap: true, minWidth: "300px" },
    { name: "Date", selector: (row: CareerLead) => formatDate(row.createdAt), sortable: true, minWidth: "130px" },
    {
      name: "Status",
      cell: (row: CareerLead) => <span style={careerStatusStyle(row.status)}>{row.status}</span>,
      sortable: true,
      minWidth: "50px",
    },
    {
      name: "Resume",
      cell: (row: CareerLead) =>
        row.resumeUrl
          ? <a href={row.resumeUrl} target="_blank" rel="noreferrer" style={{ color: "#2563eb", fontSize: "12px", fontWeight: 600 }}>📄 View</a>
          : <span style={{ color: "#9ca3af", fontSize: "12px" }}>—</span>,
      minWidth: "100px",
    },
    {
      name: "Actions",
      cell: (row: CareerLead) => (
        <div style={{ display: "flex", gap: "6px" }}>
          <button style={viewBtnStyle} onClick={() => setViewingCareer(row)}>👁 View</button>
          <button style={deleteBtnStyle} onClick={() => handleCareerDelete(row.id)}>Delete</button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      minWidth: "190px",
    },
  ];

  /* ── Custom DataTable styles ── */
  const tableCustomStyles = {
    headRow: { style: { background: "#f8fafc", borderBottom: "2px solid #e2e8f0" } },
    headCells: { style: { fontSize: "14px", fontWeight: 700, color: "#475569", textTransform: "uppercase" as const, letterSpacing: "0.05em" } },
    rows: { style: { fontSize: "15px", "&:hover": { background: "#f0f9ff !important" } } },
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#1e293b", margin: 0 }}>Leads &amp; Applications</h1>
          <p style={{ margin: "2px 0 0", fontSize: "13px", color: "#94a3b8" }}>
            {activeTab === "inquiries" ? `${filteredInquiries.length} inquiry lead${filteredInquiries.length !== 1 ? "s" : ""}` : `${filteredCareers.length} application${filteredCareers.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {(["inquiries", "careers"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "9px 18px", border: "none", borderRadius: "8px", cursor: "pointer",
                fontWeight: 700, fontSize: "13px", transition: "all 0.15s",
                background: activeTab === tab ? "#1e293b" : "#f1f5f9",
                color: activeTab === tab ? "#fff" : "#475569",
                boxShadow: activeTab === tab ? "0 2px 8px rgba(30,41,59,0.25)" : "none",
              }}
            >
              {tab === "inquiries" ? "📨 General Inquiries" : "💼 Job Applications"}
            </button>
          ))}
        </div>
      </div>

      {/* Filters and Actions */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px", background: "#fff", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", flex: 1 }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flex: 1, minWidth: "200px", maxWidth: "350px" }}>
            <input 
              type="text" 
              placeholder="Search by name, email, phone..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "13px", color: "#1e293b" }}
            />
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>From:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{ padding: "6px 12px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "13px", color: "#1e293b" }}
            />
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>To:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={{ padding: "6px 12px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "13px", color: "#1e293b" }}
            />
          </div>
          {(startDate || endDate || searchQuery) && (
            <button
              onClick={() => { setStartDate(""); setEndDate(""); setSearchQuery(""); }}
              style={{ padding: "6px 12px", background: "#f1f5f9", color: "#475569", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: 600 }}
            >
              Clear Filters
            </button>
          )}
        </div>
        <button
          onClick={handleExportCSV}
          style={{ padding: "8px 16px", background: "#10b981", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px", boxShadow: "0 2px 4px rgba(16, 185, 129, 0.2)" }}
        >
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        {activeTab === "inquiries" ? (
          <DataTable
            columns={inquiryColumns}
            data={filteredInquiries}
            customStyles={tableCustomStyles}
            pagination
            paginationPerPage={10}
            highlightOnHover
            striped
            responsive
            noDataComponent={
              <div style={{ padding: "40px 20px", textAlign: "center", color: "#94a3b8" }}>
                <div style={{ fontSize: "40px", marginBottom: "10px" }}>📭</div>
                <p style={{ margin: 0 }}>No inquiries yet.</p>
              </div>
            }
          />
        ) : (
          <DataTable
            columns={careerColumns}
            data={filteredCareers}
            customStyles={tableCustomStyles}
            pagination
            paginationPerPage={10}
            highlightOnHover
            striped
            responsive
            noDataComponent={
              <div style={{ padding: "40px 20px", textAlign: "center", color: "#94a3b8" }}>
                <div style={{ fontSize: "40px", marginBottom: "10px" }}>📭</div>
                <p style={{ margin: 0 }}>No applications yet.</p>
              </div>
            }
          />
        )}
      </div>

      {/* Modals */}
      {viewingInquiry && (
        <InquiryDetailModal
          lead={viewingInquiry}
          onClose={() => setViewingInquiry(null)}
          onStatusChange={handleInquiryStatus}
          onDelete={handleInquiryDelete}
        />
      )}
      {viewingCareer && (
        <CareerDetailModal
          lead={viewingCareer}
          onClose={() => setViewingCareer(null)}
          onStatusChange={handleCareerStatus}
          onDelete={handleCareerDelete}
        />
      )}
    </div>
  );
}
