import Contact from "../pages/Contact";
import { Mail, ConnectWithoutContact } from "@mui/icons-material";

const ContactSection = () => {
  return (
    <section id="contact" style={{ padding: "3rem 0", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span
            style={{
              background: "rgba(16, 185, 129, 0.15)",
              color: "#34d399",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: "1rem",
              padding: "0.35rem 1rem",
              fontSize: "0.8rem",
              fontWeight: "700",
              display: "inline-block",
              marginBottom: "0.6rem",
            }}
          >
            LET&apos;S CONNECT
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: "800", color: "#f8fafc", margin: 0 }}>
            Get In Touch
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: "0.4rem" }}>
            Open for high-impact Full Stack AI Engineering roles, enterprise consultations, and technology leadership.
          </p>
        </div>

        <div
          style={{
            background: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "2rem",
            padding: "1.5rem",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
