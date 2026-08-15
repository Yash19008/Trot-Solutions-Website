import React from 'react';
import Link from 'next/link';

export interface SidebarLink {
  label: string;
  href: string;
}

interface ServiceSidebarProps {
  title: string;
  links: SidebarLink[];
  currentPath: string;
}

export default function ServiceSidebar({ title, links, currentPath }: ServiceSidebarProps) {
  return (
    <div className="service-details__sidebar">
      <div className="service-details__services-box">
        <h3 className="service-details__services-title">{title}</h3>
        <ul className="service-details__services-list list-unstyled">
          {links.map((link, index) => (
            <li key={index} className={currentPath === link.href ? "active" : ""}>
              <Link href={link.href}>
                {link.label} <span className="fas fa-arrow-right"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="service-details__sidebar-contact">
        <div
          className="service-details__sidebar-contact-bg"
          style={{ backgroundImage: "url(assets/images/new_images/7080da8553c03dd00fc78065e8756e1a.jpg)" }}
        ></div>
        <div className="service-details__sidebar-contact-content">
          <div className="icon">
            <span className="icon-call"></span>
          </div>
          <h3>
            <a href="tel:+97145647450">+971 45 647 450</a>
            <a href="mailto:info@trotsolutions.com">info@trotsolutions.com</a>
          </h3>
          <p>
            If You Need Any Help
            <br /> Contact With Us
          </p>
          <div className="service-details__sidebar-contact-btn-box">
            <a className="thm-btn" href="https://wa.me/971526500217" target="_blank" rel="noreferrer">
              Contact Us
              <span className="fas fa-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
