import { useState } from "react";
import { images } from "../Images";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MailOutline,
  PhoneIphone,
  CalendarToday,
  LocationOnOutlined,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";

function Sidebar() {
  const [openContent, setOpenContent] = useState(false);

  return (
    <aside className={openContent ? "sidebar active" : "sidebar"} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            style={{ borderRadius: "1rem" }}
            src={images.avatar}
            alt="VenkataJithendra Chandra"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="VenkataJithendra" >
            VenkataJithendra
          </h1>
          <h1 className="name" title="Chandra" >
            Chandra
          </h1>

          <p className="title">AIML Engineer</p>
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

              <a href="jithendrachandra20@gmail.com" className="contact-link">
                jithendrachandra20@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhoneIphone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+91 7416847239" className="contact-link">
                +91 7416847239
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarToday />
            </div>


            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Nellore, Andhra Pradesh, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.instagram.com/vj_ch22?igsh=ZnhvcGZmYXY2YzIy&utm_source=qr"
              className="social-link"
            >
              <Instagram />
            </a>
          </li>
          <li className="social-item">
            <a href="https://x.com/jithendra2004?s=21" className="social-link">
              <Twitter />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/jithendra-chandra/"
              className="social-link"
            >
              <LinkedIn />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/jithendrachandra" className="social-link">
              <GitHub />
            </a>
          </li>
          <li className="social-item">
            <a href="https://wa.me/7416847239" className="social-link">
              <WhatsApp />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
