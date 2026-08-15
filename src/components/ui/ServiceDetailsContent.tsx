import React, { ReactNode } from "react";

export interface ServiceDetailsContentProps {
  image: string;
  title: string;
  text: ReactNode;
  capabilities: string[];
  titleRightNode?: ReactNode;
}

export default function ServiceDetailsContent({
  image,
  title,
  text,
  capabilities,
  titleRightNode,
}: ServiceDetailsContentProps) {
  return (
    <>
      <div className="service-details__img">
        <img src={image} alt={title} />
      </div>
      
      {titleRightNode ? (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3
            className="service-details__title-1 mb-0"
            style={{ marginTop: "25px" }}
          >
            {title}
          </h3>
          {titleRightNode}
        </div>
      ) : (
        <h3 className="service-details__title-1">{title}</h3>
      )}

      <p className="service-details__text-1 mb-4">{text}</p>

      {capabilities && capabilities.length > 0 && (
        <div className="service-details__img-box">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="service-details__img-box-single"
                style={{ marginBottom: "30px" }}
              >
                <div className="service-details__img-box-content">
                  <div className="service-details__img-box-content-icon-and-title">
                    <div className="service-details__img-box-content-icon">
                      <span className="icon-property-1"></span>
                    </div>
                    <h3 className="service-details__img-box-content-title">
                      Key Capabilities
                    </h3>
                  </div>
                  <ul className="service-details__points-list list-unstyled mt-4">
                    {capabilities.map((capability, index) => (
                      <li key={index}>
                        <div className="icon">
                          <span className="icon-check-box"></span>
                        </div>
                        <p>{capability}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
