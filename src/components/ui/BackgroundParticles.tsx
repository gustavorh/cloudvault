"use client";

import { useEffect } from "react";

export default function BackgroundParticles() {
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById("particles");
      if (!particlesContainer) return;

      const particleCount = 50;
      particlesContainer.innerHTML = "";

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle animate-float";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${Math.random() * 3 + 4}s`;
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div
      id="particles"
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden"
    />
  );
}
