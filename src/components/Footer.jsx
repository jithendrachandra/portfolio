import { KeyboardArrowUp } from "@mui/icons-material";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "rgba(9, 13, 22, 0.95)",
        borderTop: "1px solid rgba(56, 189, 248, 0.15)",
        padding: "2.5rem 1.5rem",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <span style={{ color: "#f8fafc", fontWeight: "700", fontSize: "1rem" }}>
            VenkataJithendra Chandra
          </span>
          <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: "0.2rem 0 0 0" }}>
            Full Stack AI Engineer @ Evomaton • Architecting Enterprise AI Platforms
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "#64748b", fontSize: "0.78rem" }}>
            © 2026 VenkataJithendra Chandra. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(56, 189, 248, 0.15)",
              color: "#38bdf8",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            title="Back to Top"
          >
            <KeyboardArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
