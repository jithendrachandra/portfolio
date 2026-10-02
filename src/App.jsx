import { useEffect, useRef, useState } from "react";
import { projects } from "./data/projectsData";
import { experienceData } from "./data/experience";
import { educationData } from "./data/education";
import {
  programmingLangSkillsData,
  aiMlSkillsData,
  frameworksLibrariesSkillsData,
  cloudSkillsData,
  databaseSkillsData,
  apiSkillsData,
} from "./data/skills";
import "./App.css";

const framePaths = Array.from({ length: 192 }, (_, index) => `/frames/frame-${String(index + 1).padStart(4, "0")}.webp`);
framePaths[0] = "/frames/frame-0001.png";
framePaths[framePaths.length - 1] = "/frames/frame-0192.png";
const featured = projects.slice(0, 4);
const capabilityGroups = [
  ["Languages", programmingLangSkillsData],
  ["Applied intelligence", aiMlSkillsData],
  ["Frameworks", frameworksLibrariesSkillsData],
  ["Infrastructure", cloudSkillsData],
  ["Data", databaseSkillsData],
  ["Services", apiSkillsData],
];

function CinematicOpening() {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!root || !canvas || !context) return undefined;
    const images = new Array(framePaths.length);
    const pendingImages = new Array(framePaths.length);
    const loading = new Set();
    const queued = new Set();
    let current = 0;
    let lastDisplayed = null;
    let posterPreview = null;
    let raf = 0;
    let resizeRaf = 0;
    let disposed = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function pumpQueue() {
      for (const index of queued) {
        if (Math.abs(index - current) > 2) queued.delete(index);
      }
      while (!disposed && loading.size < 4 && queued.size) {
        const index = [...queued].sort((a, b) => Math.abs(a - current) - Math.abs(b - current))[0];
        queued.delete(index);
        if (images[index] || loading.has(index) || Math.abs(index - current) > 2) continue;
        startFrameLoad(index);
      }
    }
    function startFrameLoad(index) {
      const image = new Image();
      image.decoding = "async";
      loading.add(index);
      pendingImages[index] = image;
      image.onload = () => {
        loading.delete(index);
        pendingImages[index] = null;
        image.onload = null;
        image.onerror = null;
        if (Math.abs(index - current) <= 2) {
          images[index] = image;
          draw();
        }
        if (index === 0) posterPreview = null;
        pumpQueue();
      };
      image.onerror = () => {
        loading.delete(index);
        pendingImages[index] = null;
        image.onload = null;
        image.onerror = null;
        pumpQueue();
      };
      image.src = framePaths[index];
    }
    const loadFrame = (index) => {
      if (images[index] || loading.has(index) || queued.has(index) || index < 0 || index >= framePaths.length) return;
      queued.add(index);
    };
    const drawFrame = (image, alpha = 1) => {
      if (!image?.complete || !image.naturalWidth) return;
      const width = canvas.width;
      const height = canvas.height;
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;
      context.globalAlpha = alpha;
      context.drawImage(image, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
    };
    function draw() {
      if (disposed) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      const lower = Math.floor(current);
      const upper = Math.min(lower + 1, framePaths.length - 1);
      const mix = current - lower;
      const lowerImage = images[lower];
      const upperImage = images[upper];
      const fallback = lowerImage || upperImage || images.find(Boolean) || lastDisplayed || posterPreview;
      if (!fallback) return;
      context.globalAlpha = 1;
      context.fillStyle = "#090b0e";
      context.fillRect(0, 0, width, height);
      if (lowerImage && upperImage && upper !== lower) {
        drawFrame(lowerImage);
        drawFrame(images[upper], mix);
        lastDisplayed = mix >= 0.5 ? upperImage : lowerImage;
      } else {
        lastDisplayed = lowerImage || upperImage || fallback;
        drawFrame(lastDisplayed);
      }
    }
    const update = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const travel = Math.max(1, root.offsetHeight - window.innerHeight);
      const progress = reducedMotion ? 0 : Math.max(0, Math.min(1, -rect.top / travel));
      const next = progress * (framePaths.length - 1);
      if (Math.abs(next - current) > 0.003) {
        current = next;
        const lower = Math.floor(current);
        const upper = Math.min(Math.ceil(current), framePaths.length - 1);
        loadFrame(lower);
        loadFrame(upper);
        loadFrame(lower - 1);
        loadFrame(upper + 1);
        pumpQueue();
        const firstNeeded = Math.max(0, lower - 1);
        const lastNeeded = Math.min(framePaths.length - 1, upper + 1);
        images.forEach((image, index) => {
          if (image && (index < firstNeeded || index > lastNeeded)) {
            image.onload = null;
            images[index] = null;
          }
        });
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
        draw();
      }
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { cancelAnimationFrame(resizeRaf); resizeRaf = requestAnimationFrame(draw); };
    loadFrame(0);
    loadFrame(1);
    pumpQueue();
    const preview = new Image();
    preview.decoding = "async";
    preview.onload = () => {
      preview.onload = null;
      if (!images[0] && !lastDisplayed) {
        posterPreview = preview;
        draw();
      }
    };
    preview.src = "/frames/frame-0001.webp";
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    schedule();
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      preview.onload = null;
      preview.src = "";
      posterPreview = null;
      lastDisplayed = null;
      pendingImages.forEach((image) => {
        if (!image) return;
        image.onload = null;
        image.onerror = null;
        image.src = "";
      });
      loading.clear();
      queued.clear();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <section className="opening" id="opening" ref={rootRef} aria-label="Cinematic introduction">
    <div className="opening-pin">
      <canvas className="opening-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="opening-shade" />
      <header className="topbar">
        <a className="wordmark" href="#opening" aria-label="Jithendra Chandra, home">Jithendra Chandra</a>
        <nav aria-label="Main navigation">
          <a href="#work">Selected work</a><a href="#path">Trajectory</a><a href="#contact">Contact <span>↗</span></a>
        </nav>
      </header>
      <div className="opening-copy">
        <p className="eyebrow opening-status"><span className="status-dot" /> FULL STACK AI ENGINEER <i>·</i> EVOMATON</p>
        <h1>Intelligence,<br /><em>put to work.</em></h1>
        <p className="opening-intro">I build AI systems that hold up<br className="desktop-only" /> in the real world.</p>
      </div>
      <div className="opening-bottom">
        <span>JITHENDRA CHANDRA</span><span className="scroll-cue"><span /> SCROLL TO ENTER</span>
      </div>
      <div className="frame-progress"><span ref={progressRef} /></div>
    </div>
  </section>;
}

function sectionLabel(number, label) {
  return <div className="section-label"><span>{number}</span><span>{label}</span><span className="label-line" /></div>;
}

function AskAboutWork() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ask = async (event) => {
    event.preventDefault();
    const userInput = question.trim();
    if (!userInput || loading) return;
    setLoading(true);
    setError("");
    setAnswer("");
    try {
      const response = await fetch("/getAiResponse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput }),
      });
      if (!response.ok) throw new Error("The assistant is unavailable right now.");
      const data = await response.json();
      setAnswer(data.response || "No response was returned.");
      setQuestion("");
    } catch {
      setError("The assistant is offline. You can still reach Jithendra directly below.");
    } finally {
      setLoading(false);
    }
  };

  return <div className="ask-strip reveal">
    <div className="ask-intro"><span className="eyebrow">A SMALL INTERFACE TO THE WORK</span><h3>Ask the archive.</h3><p>Projects, tools, or the thinking behind them.</p></div>
    <form className="ask-form" onSubmit={ask}>
      <label className="sr-only" htmlFor="work-question">Ask about Jithendra’s work</label>
      <input id="work-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="What went into the document vision system?" maxLength={500} />
      <button type="submit" disabled={loading || !question.trim()} aria-label="Send question">{loading ? "…" : "↗"}</button>
      <p className="ask-status" aria-live="polite">{loading ? "Thinking…" : error || answer}</p>
    </form>
  </div>;
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("in-view"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <div className="portfolio-shell">
    <CinematicOpening />
    <main>
      <section className="manifesto section-pad" id="approach">
        {sectionLabel("01", "A point of view")}
        <div className="manifesto-grid reveal">
          <p className="manifesto-lead">From <span>model</span><br />to <span>infrastructure.</span></p>
          <div className="manifesto-note"><p>I build where AI meets real-world software—working with AI agents, MCP, and intelligent systems to turn complex workflows into tools that are simpler, smarter, and more reliable.
</p><a href="#work" className="text-link">Explore the work <span>↘</span></a></div>
        </div>
        <div className="signal-strip"><span>VISION SYSTEMS</span><span>AGENTIC AI</span><span>CLOUD ARCHITECTURE</span><span>PRODUCT ENGINEERING</span></div>
      </section>

      <section className="work-section section-pad" id="work">
        {sectionLabel("02", "Selected systems")}
        <div className="work-heading reveal"><h2>Built for the<br /><em>edge cases.</em></h2><p>Engineering becomes visible in the details: the oversized file, the ambiguous mark-up, the moment a workflow cannot fail.</p></div>
        <div className="project-sequence">
          {featured.map((project, index) => <article className={`project-story project-story-${index + 1} reveal`} key={project.title}>
            <div className="project-visual">
              {project.images?.[0] && <img src={project.images[0]} alt={project.alt || project.title} loading="lazy" />}
              <span className="visual-index">0{index + 1} <i>/</i> 04</span><span className="visual-category">{project.category}</span>
            </div>
            <div className="project-copy"><div className="project-kicker">{project.company || "INDEPENDENT WORK"}{project.suite ? ` / ${project.suite}` : ""}</div><h3>{project.title}</h3><p>{project.desc.split("\n")[0].replace(/\*\*/g, "")}</p>
              <div className="project-tags">{project.tags?.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}</div>
              {project.repo && <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">View repository <span>↗</span></a>}
              {project.metrics?.slice(0, 2).map((metric) => <div className="project-fact" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
            </div>
          </article>)}
        </div>
        <details className="archive reveal"><summary><span>More experiments</span><span>Browse {Math.max(0, projects.length - featured.length)} projects <b>＋</b></span></summary><div className="archive-list">{projects.slice(featured.length).map((project, i) => <a href={project.repo || "#contact"} key={project.title} target={project.repo ? "_blank" : undefined} rel="noreferrer"><span>{String(i + featured.length + 1).padStart(2, "0")}</span><strong>{project.title}</strong><small>{project.category}</small><span>↗</span></a>)}</div></details>
      </section>

      <section className="systems-section section-pad" id="systems">
        {sectionLabel("03", "The working set")}
        <div className="systems-grid reveal"><div><h2>A stack is<br />a <em>point of view.</em></h2><p>Tools selected to build, ship, observe, and improve intelligent products.</p></div><div className="capability-map" role="group" aria-label="Technical capabilities graph">{capabilityGroups.map(([label, items], groupIndex) => <section className="capability-cluster" key={label}><h3><span className="cap-index">0{groupIndex + 1}</span>{label}</h3><div className="skill-nodes">{items.map(({ name, image }, skillIndex) => <span className="skill-node" key={name} style={{ "--node-index": skillIndex }}><img src={image} alt="" aria-hidden="true" loading="lazy" /><span>{name}</span></span>)}</div></section>)}</div></div>
        <AskAboutWork />
      </section>

      <section className="path-section section-pad" id="path">
        {sectionLabel("04", "The trajectory")}
        <div className="path-heading reveal"><h2>Increasingly close<br />to the <em>whole system.</em></h2><p>From applied models to the platform around them.</p></div>
        <div className="career-list">{experienceData.map((role, index) => <article className="career-row reveal" key={role.id}><span className="career-num">0{index + 1}</span><div><span className="career-period">{role.period} <i>·</i> {role.location}</span><h3>{role.title}</h3><p>{role.description}</p></div><span className="career-mark">↗</span></article>)}</div>
        <div className="education-row reveal"><span>FOUNDATION</span><div><h3>{educationData[0]?.title}</h3><p>{educationData[0]?.description} <i>·</i> {educationData[0]?.period} <i>·</i> {educationData[0]?.percentage}</p></div></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        {sectionLabel("05", "Open channel")}
        <div className="contact-main reveal"><p className="eyebrow">HAVE A HARD PROBLEM?</p><h2>Let’s make it<br /><em>work in the world.</em></h2><a className="contact-email" href="mailto:jithendrachandra20@gmail.com">jithendrachandra20@gmail.com <span>↗</span></a></div>
        <div className="contact-foot"><span>JITHENDRA CHANDRA · AI/ML ENGINEER</span><div><a href="https://www.linkedin.com/in/jithendra-chandra/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/jithendrachandra" target="_blank" rel="noreferrer">GitHub ↗</a></div><span>© {new Date().getFullYear()}</span></div>
      </section>
    </main>
  </div>;
}

export default App;
