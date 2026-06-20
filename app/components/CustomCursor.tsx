"use client";

import { useEffect, useRef } from "react";

const DOT_COUNT = 24; // Number of dots in the trail
const PARTICLE_POOL_SIZE = 24; // Maximum number of sparkles active at once

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  active: boolean;
}

export default function CustomCursor() {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsCoords = useRef<{ x: number; y: number }[]>(
    Array.from({ length: DOT_COUNT }, () => ({ x: 0, y: 0 }))
  );
  const mouseCoords = useRef({ x: 0, y: 0 });
  const isVisible = useRef(false);
  const scale = useRef(1);
  const targetScale = useRef(1);

  // Sparkles particle pool
  const particlesRef = useRef<Particle[]>(
    Array.from({ length: PARTICLE_POOL_SIZE }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      alpha: 0,
      size: 0,
      active: false,
    }))
  );
  const particleDotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Verify fine pointer (mouse) capability
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    // Dynamically adjust dotsCoords to match the current DOT_COUNT (handles hot reloading safely)
    if (dotsCoords.current.length !== DOT_COUNT) {
      dotsCoords.current = Array.from({ length: DOT_COUNT }, () => ({
        x: mouseCoords.current.x || 0,
        y: mouseCoords.current.y || 0,
      }));
    }

    const dots = dotsRef.current;
    const coords = dotsCoords.current;
    const mouse = mouseCoords.current;
    const particles = particlesRef.current;

    // First mouse move initializes coordinates
    let coordsInitialized = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isVisible.current = true;

      if (!coordsInitialized) {
        coordsInitialized = true;
        coords.forEach((coord) => {
          if (coord) {
            coord.x = e.clientX;
            coord.y = e.clientY;
          }
        });
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
    };

    // Magnify main dot when hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        target.closest('a, button, select, input, textarea, [role="button"], .cursor-pointer')
      ) {
        targetScale.current = 1.6;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        target.closest('a, button, select, input, textarea, [role="button"], .cursor-pointer')
      ) {
        targetScale.current = 1.0;
      }
    };

    // Click handler to trigger sparkles explosion
    const handleMouseDown = (e: MouseEvent) => {
      let spawned = 0;
      // Spawn 12 particles from the pool
      for (let i = 0; i < PARTICLE_POOL_SIZE && spawned < 12; i++) {
        if (!particles[i].active) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 2.5 + Math.random() * 4.5; // velocity speed range
          particles[i].x = e.clientX;
          particles[i].y = e.clientY;
          particles[i].vx = Math.cos(angle) * speed;
          particles[i].vy = Math.sin(angle) * speed;
          particles[i].alpha = 1.0;
          particles[i].size = 3 + Math.random() * 4; // size between 3px and 7px
          particles[i].active = true;
          spawned++;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);

    let animationFrameId: number;

    const tick = () => {
      // Lerp scale
      scale.current += (targetScale.current - scale.current) * 0.15;

      // Update positions with custom lerp speeds to create trailing effect
      if (coords[0]) {
        coords[0].x += (mouse.x - coords[0].x) * 0.35;
        coords[0].y += (mouse.y - coords[0].y) * 0.35;
      }

      for (let i = 1; i < DOT_COUNT; i++) {
        if (coords[i] && coords[i - 1]) {
          coords[i].x += (coords[i - 1].x - coords[i].x) * 0.45;
          coords[i].y += (coords[i - 1].y - coords[i].y) * 0.45;
        }
      }

      // Update DOM transform style and opacity for trails
      for (let index = 0; index < DOT_COUNT; index++) {
        const dot = dots[index];
        const coord = coords[index];
        if (dot && coord) {
          const currentScale = index === 0 ? scale.current : 1;
          dot.style.transform = `translate3d(${coord.x}px, ${coord.y}px, 0) translate(-50%, -50%) scale(${currentScale})`;
          // Apply opacity driven by isVisible
          dot.style.opacity = isVisible.current ? (dot.dataset.opacity || "1") : "0";
        }
      }

      // Update sparkles particle positions and DOM
      particles.forEach((p, idx) => {
        const el = particleDotsRef.current[idx];
        if (p.active) {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.95; // drag/friction
          p.vy *= 0.95;
          p.vy += 0.15; // gravity pull downwards
          p.alpha -= 0.025; // fade rate

          if (p.alpha <= 0) {
            p.active = false;
            if (el) {
              el.style.opacity = "0";
              el.style.transform = "translate3d(-100px, -100px, 0)";
            }
          } else {
            if (el) {
              el.style.width = `${p.size}px`;
              el.style.height = `${p.size}px`;
              el.style.opacity = p.alpha.toString();
              el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
            }
          }
        } else {
          if (el) {
            el.style.opacity = "0";
          }
        }
      });

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Trailing Dots */}
      {Array.from({ length: DOT_COUNT }).map((_, index) => {
        const isFirst = index === 0;
        const size = isFirst ? 14 : Math.max(2, 6 - (index - 1) * 0.4);
        const opacity = Math.max(0.1, 1 - index * 0.12).toFixed(2);

        return (
          <div
            key={`dot-${index}`}
            ref={(el) => {
              dotsRef.current[index] = el;
            }}
            data-opacity={opacity}
            className={`fixed top-0 left-0 pointer-events-none rounded-full transition-opacity duration-300 ${isFirst ? "" : "bg-gold"
              }`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0, // initially transparent, controlled by requestAnimationFrame tick
              zIndex: 99999 - index,
              transform: "translate3d(-100px, -100px, 0)", // initially offscreen
              border: isFirst ? "2px solid #C9A86A" : "none",
              backgroundColor: isFirst ? "#0B0B0F" : undefined,
              filter: isFirst ? "invert(1)" : "none",
              mixBlendMode: isFirst ? "difference" : "normal",
              boxShadow: isFirst
                ? "0 0 10px rgba(201, 168, 106, 0.8), 0 0 20px rgba(201, 168, 106, 0.4)"
                : "none",
            }}
          />
        );
      })}

      {/* Sparkles Particle Elements Pool */}
      {Array.from({ length: PARTICLE_POOL_SIZE }).map((_, index) => (
        <div
          key={`sparkle-${index}`}
          ref={(el) => {
            particleDotsRef.current[index] = el;
          }}
          className="fixed top-0 left-0 pointer-events-none rounded-full bg-gold"
          style={{
            opacity: 0,
            zIndex: 99999 + 10,
            transform: "translate3d(-100px, -100px, 0)",
            boxShadow: "0 0 8px rgba(201, 168, 106, 0.9), 0 0 15px rgba(201, 168, 106, 0.5)",
          }}
        />
      ))}
    </>
  );
}
