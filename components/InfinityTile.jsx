"use client";

import { useEffect, useMemo, useState } from "react";

export default function InfinityTile({ imageSrc, alt = "Infinity tile" }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener?.("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener?.("change", updateMotionPreference);
    };
  }, []);

  const baseRotation = useMemo(() => ({ x: 12, y: -8 }), []);
  const maxTilt = 10;

  const handleMouseMove = (event) => {
    if (reducedMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * maxTilt;
    const rotateX = (y / rect.height - 0.5) * -maxTilt;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const transform = `rotateX(${baseRotation.x + tilt.x}deg) rotateY(${
    baseRotation.y + tilt.y
  }deg)`;

  return (
    <div className="tileStage" data-reduced-motion={reducedMotion}>
      <div
        className="tileWrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="tileBox" style={{ transform }}>
          <div className="tileFrame">
            <div className="tileWindow">
              <img src={imageSrc} alt={alt} loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tileStage {
          perspective: 900px;
        }

        .tileWrapper {
          display: inline-block;
          padding: 20px;
        }

        .tileBox {
          --face-depth: 20px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.25s ease;
          box-shadow: 20px 30px 50px rgba(0, 0, 0, 0.45);
        }

        .tileStage[data-reduced-motion="true"] .tileBox {
          transition: none;
        }

        .tileBox::before,
        .tileBox::after {
          content: "";
          position: absolute;
          transform-style: preserve-3d;
        }

        .tileBox::before {
          left: 0;
          top: 0;
          width: 100%;
          height: var(--face-depth);
          transform-origin: top;
          transform: translateY(calc(-1 * var(--face-depth))) rotateX(90deg);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.35),
            rgba(200, 210, 255, 0.15)
          );
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .tileBox::after {
          right: 0;
          top: 0;
          width: var(--face-depth);
          height: 100%;
          transform-origin: right;
          transform: translateX(var(--face-depth)) rotateY(90deg);
          background: linear-gradient(
            180deg,
            rgba(10, 10, 20, 0.6),
            rgba(0, 0, 0, 0.85)
          );
        }

        .tileFrame {
          width: 280px;
          height: 280px;
          border-radius: 22px;
          background: linear-gradient(
            145deg,
            rgba(40, 40, 60, 0.95),
            rgba(10, 10, 16, 0.95)
          );
          border: 1px solid rgba(255, 255, 255, 0.12);
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
        }

        .tileWindow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .tileWindow img {
          width: 75%;
          height: 75%;
          object-fit: contain;
        }

        @media (max-width: 640px) {
          .tileFrame {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </div>
  );
}
