import React from "react";
import "./HeaderNav.css";

const navLinks = [
  { id: "hero", label: "Overview" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "ai-assistant", label: "AI Assistant" },
  { id: "contact", label: "Contact" },
];

const HeaderNav = ({ activeSection, setActiveSection }) => {
  const handleNavClick = (event, id) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      console.error(`Section not found: ${id}`);
      return;
    }

    setActiveSection(id);

    const headerOffset = 100;
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - headerOffset,
      behavior: "smooth",
    });
  };

  return (
    <header className="header-nav">
      <nav className="header-navigation">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={`#${link.id}`}
                onClick={(event) => handleNavClick(event, link.id)}
                className={`nav-link ${
                  activeSection === link.id ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;