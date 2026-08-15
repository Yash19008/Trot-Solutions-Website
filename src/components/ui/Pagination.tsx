import Link from "next/link";
import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  basePath: string;
}

export default function Pagination({ totalPages, currentPage, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-wrapper mt-5 text-center" style={{ paddingBottom: "40px" }}>
      <ul className="pagination justify-content-center" style={{ gap: "10px" }}>
        {currentPage > 1 && (
          <li className="page-item">
            <Link
              href={`${basePath}?page=${currentPage - 1}`}
              className="page-link"
              style={{
                borderRadius: "5px",
                padding: "10px 15px",
                color: "var(--builza-black)",
                fontWeight: 600,
              }}
            >
              <i className="fas fa-angle-left"></i> Prev
            </Link>
          </li>
        )}

        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <li key={page} className={`page-item ${isActive ? "active" : ""}`}>
              <Link
                href={`${basePath}?page=${page}`}
                className="page-link"
                style={{
                  borderRadius: "5px",
                  padding: "10px 15px",
                  backgroundColor: isActive ? "var(--builza-base)" : "white",
                  color: isActive ? "white" : "var(--builza-black)",
                  fontWeight: 600,
                  border: isActive ? "none" : "1px solid #ddd",
                }}
              >
                {page}
              </Link>
            </li>
          );
        })}

        {currentPage < totalPages && (
          <li className="page-item">
            <Link
              href={`${basePath}?page=${currentPage + 1}`}
              className="page-link"
              style={{
                borderRadius: "5px",
                padding: "10px 15px",
                color: "var(--builza-black)",
                fontWeight: 600,
              }}
            >
              Next <i className="fas fa-angle-right"></i>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
