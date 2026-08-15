import React from 'react';
import PageHeader, { BreadcrumbItem } from './PageHeader';
import ServiceSidebar, { SidebarLink } from './ServiceSidebar';
import ImageSlider from './ImageSlider';

interface ServicePageLayoutProps {
  // PageHeader Props
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  bgVideo?: string;
  hideTitle?: boolean;
  bgColor?: string;
  hideOverlay?: boolean;
  headerLogo?: string;
  
  // ServiceSidebar Props
  sidebarTitle: string;
  sidebarLinks: SidebarLink[];
  currentPath: string;

  // Content
  children: React.ReactNode;
  carouselImages?: string[];
}

export default function ServicePageLayout({
  title,
  breadcrumbs,
  bgImage,
  bgVideo,
  sidebarTitle,
  sidebarLinks,
  currentPath,
  children,
  carouselImages,
  hideTitle,
  bgColor,
  hideOverlay,
  headerLogo
}: ServicePageLayoutProps) {
  return (
    <>
      <PageHeader 
        title={title} 
        breadcrumbs={breadcrumbs} 
        bgImage={bgImage} 
        bgVideo={bgVideo}
        hideTitle={hideTitle}
        bgColor={bgColor}
        hideOverlay={hideOverlay}
        headerLogo={headerLogo}
      />
      
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 order-2 order-lg-1">
              <ServiceSidebar 
                title={sidebarTitle} 
                links={sidebarLinks} 
                currentPath={currentPath} 
              />
            </div>
            <div className="col-xl-8 col-lg-7 order-1 order-lg-2">
              <div className="service-details__left">
                {children}
              </div>
            </div>
          </div>
        </div>
        {carouselImages && carouselImages.length > 0 && (
          <div className="container" style={{ marginTop: '50px' }}>
            <div className="row">
              <div className="col-xl-12">
                <ImageSlider images={carouselImages} />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
