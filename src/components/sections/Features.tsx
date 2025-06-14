"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: "⚡",
    title: "99.9% Uptime Guarantee",
    description: "Your website stays online when your customers need it most",
  },
  {
    icon: "🔒",
    title: "Advanced Security",
    description:
      "Multi-layered protection with SSL certificates and malware scanning",
  },
  {
    icon: "📞",
    title: "24/7 Expert Support",
    description: "Our technical team is always ready to help you succeed",
  },
  {
    icon: "💾",
    title: "Daily Backups",
    description:
      "Automatic backups ensure your data is always safe and recoverable",
  },
  {
    icon: "🚀",
    title: "SSD Storage",
    description: "Lightning-fast performance with solid-state drive technology",
  },
];

const ServerBox = ({ delay }: { delay: number }) => (
  <div
    className="w-[280px] h-[60px] bg-gradient-to-r from-[#8b5cf6]/10 to-[#06b6d4]/10 border border-[#8b5cf6]/30 rounded-xl mb-4 relative backdrop-blur-lg animate-swoosh-in"
    style={{
      animationDelay: `${delay}s`,
      transformOrigin: "left center",
      opacity: 0,
      animation: `swooshIn 0.8s ease-out ${delay}s forwards`,
    }}
  >
    <div className="absolute left-5 top-1/2 -translate-y-1/2 flex gap-2">
      <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
      <div
        className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse"
        style={{ animationDelay: "0.3s" }}
      />
      <div
        className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse"
        style={{ animationDelay: "0.6s" }}
      />
    </div>
  </div>
);

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".feature-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32">
      <style jsx global>{`
        @keyframes swooshIn {
          0% {
            opacity: 0;
            transform: scale(0.1) translateX(-100%);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1) translateX(10%);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }
      `}</style>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-[#8b5cf6] bg-clip-text text-transparent animate-fade-in">
              Why Choose CloudVault?
            </h2>
            <p
              className="text-xl text-gray-300 mb-10 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Transform your hosting experience with CloudVault. Get
              enterprise-grade infrastructure, lightning-fast performance, and
              dedicated support - all at competitive prices. Your success is our
              priority.
            </p>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li
                  key={feature.title}
                  className="feature-item flex items-center p-5 bg-[#8b5cf6]/5 rounded-xl transition-all duration-300 hover:bg-[#8b5cf6]/10 hover:translate-x-2.5 hover:shadow-lg hover:shadow-[#8b5cf6]/20 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-xl flex items-center justify-center text-lg mr-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {feature.icon}
                  </div>
                  <div>
                    <strong className="block text-white mb-1 transition-colors duration-300 group-hover:text-[#8b5cf6]">
                      {feature.title}
                    </strong>
                    <span className="text-gray-300">{feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <ServerBox delay={0} />
              <ServerBox delay={0.3} />
              <ServerBox delay={0.6} />
              <ServerBox delay={0.9} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
