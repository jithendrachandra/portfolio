import { useState } from "react";
import { images } from "../Images";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MailOutline,
  PhoneIphone,
  LocationOnOutlined,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  WhatsApp,
  ContentCopy,
  Check,
  BusinessCenter,
} from "@mui/icons-material";
import { Snackbar, Alert } from "@mui/material";

function Sidebar() {
  const [openContent, setOpenContent] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`${label} copied to clipboard!`);
    setToastOpen(true);
  };

  return (
    <aside className={openContent ? "sidebar active" : "sidebar"} data-sidebar style={{ zIndex: 10 }}>
      <div className="sidebar-info">
        <figure
          className="avatar-box"
          style={{
            position: "relative",
            borderRadius: "1.2rem",
            padding: "4px",
            background: "linear-gradient(135deg, #00d2ff, #34d399, #a855f7)",
            boxShadow: "0 0 20px rgba(0, 210, 255, 0.3)",
          }}
        >
          <img
            style={{ borderRadius: "1rem", display: "block", objectFit: "cover" }}
            src={images.avatar}
            alt="VenkataJithendra Chandra"
            width="80"
            height="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="VenkataJithendra Chandra" style={{ fontSize: "1.3rem", fontWeight: "700" }}>
            VenkataJithendra Chandra
          </h1>

          <p className="title" style={{ fontSize: "0.82rem", fontWeight: "600", color: "#38bdf8", marginTop: "0.3rem" }}>
            Full Stack AI Engineer
          </p>

          <div
            style={{
              marginTop: "0.5rem",
              background: "rgba(16, 185, 129, 0.15)",
              color: "#34d399",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: "0.5rem",
              padding: "0.25rem 0.5rem",
              fontSize: "0.68rem",
              fontWeight: "600",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", boxShadow: "0 0 6px #34d399" }} />
            Evomaton
          </div>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setOpenContent((prev) => !prev)}
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          {openContent ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <a href="mailto:jithendrachandra20@gmail.com" className="contact-link">
                  jithendrachandra20@gmail.com
                </a>
                <button
                  onClick={() => handleCopy("jithendrachandra20@gmail.com", "Email")}
                  style={{ color: "#94a3b8", cursor: "pointer" }}
                  title="Copy email"
                >
                  <ContentCopy style={{ fontSize: "0.9rem" }} />
                </button>
              </div>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhoneIphone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <a href="tel:+917416847239" className="contact-link">
                  +91 7416847239
                </a>
                <button
                  onClick={() => handleCopy("+917416847239", "Phone")}
                  style={{ color: "#94a3b8", cursor: "pointer" }}
                  title="Copy phone number"
                >
                  <ContentCopy style={{ fontSize: "0.9rem" }} />
                </button>
              </div>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnOutlined />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address style={{ color: "#e2e8f0", fontSize: "0.85rem" }}>
                Bengaluru / Nellore, India
              </address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/jithendra-chandra/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <LinkedIn />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/jithendrachandra"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <GitHub />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://x.com/jithendra2004?s=21"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Twitter />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/vj_ch22?igsh=ZnhvcGZmYXY2YzIy&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Instagram />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://wa.me/7416847239"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <WhatsApp />
            </a>
          </li>
        </ul>
      </div>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setToastOpen(false)} severity="success" sx={{ width: "100%" }}>
          {copiedText}
        </Alert>
      </Snackbar>
    </aside>
  );
}

export default Sidebar;
