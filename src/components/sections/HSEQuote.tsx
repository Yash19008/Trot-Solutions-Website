export default function HSEQuote() {
  return (
    <section
      className="hse-quote-section"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "60px 0",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="hse-quote-content text-center"
              style={{ maxWidth: "900px", margin: "0 auto" }}
            >
              <span
                className="fas fa-quote-left"
                style={{
                  fontSize: "50px",
                  color: "var(--builza-gray)",
                  marginBottom: "25px",
                  display: "inline-block",
                  opacity: 0.5
                }}
              ></span>
              <h4
                style={{
                  color: "var(--builza-black)",
                  fontStyle: "italic",
                  fontWeight: "500",
                  fontSize: "26px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                “We are firmly committed to complying with all HSE protocols
                established by our esteemed clients. We continue to uphold our
                HSE standards and zero tolerance policy towards any form of
                non-compliance”
              </h4>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px" }}>
                  <div style={{ width: "40px", height: "3px", backgroundColor: "var(--builza-gray)", marginBottom: "15px", opacity: 0.5 }}></div>
                  <p
                    style={{
                      color: "var(--builza-black)",
                      fontSize: "18px",
                      fontWeight: "700",
                      margin: "0",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    M. Jose Manuel
                  </p>
                  <p
                    style={{
                      color: "var(--builza-gray)",
                      fontSize: "15px",
                      fontWeight: "600",
                      margin: "5px 0 0 0",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Technical Director &bull; Trot Group
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
