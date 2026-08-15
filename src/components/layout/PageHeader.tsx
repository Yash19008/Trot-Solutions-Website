import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  bgVideo?: string;
  bgPosition?: string;
  hideTitle?: boolean;
  bgColor?: string;
  hideOverlay?: boolean;
  headerLogo?: string;
}

export default function PageHeader({ title, breadcrumbs, bgImage, bgVideo, bgPosition, hideTitle, bgColor, hideOverlay, headerLogo }: PageHeaderProps) {
  return (
    <section className={`page-header ${hideOverlay ? 'hide-overlay' : ''}`}>
      {hideOverlay && (
        <style>{`.page-header.hide-overlay .page-header__bg::before { display: none !important; }`}</style>
      )}
      <div className="page-header__bg" style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none', backgroundPosition: bgPosition || undefined, backgroundColor: bgColor || undefined }}>
        {bgVideo && (
          <>
            <video autoPlay muted loop playsInline style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover" }}>
              <source src={bgVideo} type="video/mp4" />
            </video>
            <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "linear-gradient(90deg, rgba(14, 18, 29, 0.976) 0%, rgba(14, 18, 29, 0.85) 20%, rgba(14, 18, 29, 0) 71%)", zIndex: "1" }}></div>
          </>
        )}
      </div>
      <div className="container">
        <div className="page-header__inner">
          {!hideTitle && (
            headerLogo ? (
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src={headerLogo} alt={title} style={{ maxHeight: '80px', marginBottom: '20px' }} />
              </div>
            ) : (
              <h3>{title}</h3>
            )
          )}
          <div className="thm-breadcrumb__inner">
            <ul className="thm-breadcrumb list-unstyled">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                  </li>
                  {index < breadcrumbs.length - 1 && (
                    <li><span className="fas fa-angle-right"></span></li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
