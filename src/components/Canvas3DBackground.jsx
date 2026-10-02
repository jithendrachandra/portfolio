import { useEffect, useRef } from "react";

const Canvas3DBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create 3D particles with z depth
    const particleCount = Math.min(85, Math.floor((width * height) / 18000));
    const particles = [];

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 800 + 100, // Z depth
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.8,
        color:
          Math.random() > 0.4
            ? "rgba(0, 210, 255, " // Cyan
            : Math.random() > 0.5
            ? "rgba(52, 211, 153, " // Emerald
            : "rgba(168, 85, 247, ", // Violet
      });
    }

    const focalLength = 400;

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const offsetX = (mouse.x - width / 2) * 0.1;
      const offsetY = (mouse.y - height / 2) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Draw faint radial glow at mouse position
      const radialGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        350
      );
      radialGlow.addColorStop(0, "rgba(0, 180, 255, 0.08)");
      radialGlow.addColorStop(0.5, "rgba(16, 185, 129, 0.03)");
      radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Projected 2D points for line drawing
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move 3D particle
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around boundaries in 3D
        if (p.x < -width / 2) p.x = width / 2;
        if (p.x > width / 2) p.x = -width / 2;
        if (p.y < -height / 2) p.y = height / 2;
        if (p.y > height / 2) p.y = -height / 2;
        if (p.z < 50) p.z = 900;
        if (p.z > 900) p.z = 50;

        // 3D Perspective Projection
        const scale = focalLength / (focalLength + p.z);
        const projX = (p.x + offsetX) * scale + width / 2;
        const projY = (p.y + offsetY) * scale + height / 2;
        const projR = p.radius * scale;
        const alpha = Math.min(1, Math.max(0.15, (1 - p.z / 900) * 0.9));

        projected.push({ x: projX, y: projY, z: p.z, scale, alpha, color: p.color });

        // Draw particle node
        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(0.5, projR), 0, Math.PI * 2);
        ctx.fillStyle = p.color + alpha + ")";
        ctx.shadowBlur = 12 * scale;
        ctx.shadowColor = p.color + "0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw 3D connecting constellation lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.25 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 200, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8 * Math.min(p1.scale, p2.scale);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.85,
      }}
    />
  );
};

export default Canvas3DBackground;
