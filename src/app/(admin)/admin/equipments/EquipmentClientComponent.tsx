"use client";

import { useState } from "react";
import DataTable from "react-data-table-component";
import { deleteEquipment } from "@/app/actions/equipment";
import type { Equipment } from "@/lib/prisma";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EquipmentClientComponent({ initialEqs }: { initialEqs: Equipment[] }) {
  const [eqs, setEqs] = useState<Equipment[]>(initialEqs);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const lowerQuery = searchQuery.toLowerCase();
  const filteredEqs = eqs.filter((eq) => {
    if (!lowerQuery) return true;
    return (
      eq.title.toLowerCase().includes(lowerQuery) ||
      (eq.modelNo && eq.modelNo.toLowerCase().includes(lowerQuery)) ||
      (eq.status && eq.status.toLowerCase().includes(lowerQuery))
    );
  });

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this equipment?")) {
      try {
        await deleteEquipment(id);
        setEqs(eqs.filter((e) => e.id !== id));
        router.refresh();
      } catch (error) {
        console.error(error);
        alert("Failed to delete equipment.");
      }
    }
  };

  const customStyles = {
    table: {
      style: {
        backgroundColor: '#ffffff',
      },
    },
    headRow: {
      style: {
        backgroundColor: '#f8fafc',
        borderBottomWidth: '1px',
        borderBottomColor: '#e2e8f0',
      },
    },
    headCells: {
      style: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#475569',
        textTransform: 'uppercase' as any,
        letterSpacing: '0.05em',
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    cells: {
      style: {
        fontSize: '15px',
        color: '#334155',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '12px',
        paddingBottom: '12px',
      },
    },
    rows: {
      style: {
        borderBottomColor: '#f1f5f9',
        borderBottomStyle: 'solid' as const,
        borderBottomWidth: '1px',
      },
    },
    pagination: {
      style: {
        borderTopColor: '#e2e8f0',
        padding: '12px',
      },
    },
  };

  const columns = [
    {
      name: "Sr No",
      selector: (row: Equipment, rowIndex?: number) => (rowIndex ?? 0) + 1,
      width: "80px",
    },
    {
      name: "Image",
      cell: (row: Equipment) => row.image ? <img src={row.image} alt={row.title} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }} /> : "N/A",
      width: "100px",
    },
    {
      name: "Title",
      selector: (row: Equipment) => row.title,
      sortable: true,
    },
    {
      name: "Model No",
      selector: (row: Equipment) => row.modelNo || "N/A",
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: Equipment) => row.status ? row.status.charAt(0).toUpperCase() + row.status.slice(1) : "N/A",
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row: Equipment) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Link href={`/admin/equipments/${row.id}`} style={{ padding: "8px 16px", backgroundColor: "#3b82f6", color: "white", borderRadius: "6px", textDecoration: "none", fontSize: "14px", fontWeight: "600", border: "1px solid #2563eb", textAlign: "center" }}>
            Edit
          </Link>
          <button onClick={() => handleDelete(row.id)} style={{ padding: "8px 16px", backgroundColor: "#ef4444", color: "white", borderRadius: "6px", cursor: "pointer", fontSize: "14px", fontWeight: "600", border: "1px solid #dc2626" }}>
            Delete
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "150px"
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", width: "100%" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Resale Equipments</h1>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <input 
            type="text" 
            placeholder="Search equipments..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #d1d5db", fontSize: "14px", width: "250px" }}
          />
          <Link href="/admin/equipments/new" style={{ padding: "10px 16px", backgroundColor: "#eab308", color: "#1e293b", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", whiteSpace: "nowrap" }}>
            + Add Equipment
          </Link>
        </div>
      </div>
      
      <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e7eb", width: "100%" }}>
        <DataTable
          columns={columns}
          data={filteredEqs}
          pagination
          highlightOnHover
          striped
          responsive
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}
