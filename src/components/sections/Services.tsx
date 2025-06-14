"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🌐",
    title: "Shared Hosting",
    description:
      "Perfect for beginners and small websites. Get started with reliable hosting at an affordable price with easy-to-use control panels and 24/7 support.",
  },
  {
    icon: "⚡",
    title: "VPS Hosting",
    description:
      "Dedicated resources and enhanced performance for growing websites. Full root access and customizable server configurations for your specific needs.",
  },
  {
    icon: "🚀",
    title: "Dedicated Servers",
    description:
      "Maximum performance and complete control with enterprise-grade hardware. Perfect for high-traffic websites and mission-critical applications.",
  },
  {
    icon: "☁️",
    title: "Cloud Hosting",
    description:
      "Scalable and flexible cloud infrastructure that grows with your business. Pay only for what you use with guaranteed uptime and automatic backups.",
  },
  {
    icon: "🛡️",
    title: "Managed Hosting",
    description:
      "Let our experts handle the technical aspects while you focus on your business. Includes security updates, monitoring, and performance optimization.",
  },
  {
    icon: "🌍",
    title: "CDN & Security",
    description:
      "Global content delivery network and advanced security features to keep your website fast and secure worldwide with DDoS protection included.",
  },
];

export default function Services() {
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

    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-black/20">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 bg-gradient-to-r from-white to-[#8b5cf6] bg-clip-text text-transparent">
            Our Hosting Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our comprehensive range of hosting solutions designed to
            meet every need and budget
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card bg-[#8b5cf6]/5 border border-[#8b5cf6]/20 rounded-2xl p-10 transition-all duration-300 backdrop-blur-lg relative overflow-hidden hover:-translate-y-2.5 hover:border-[#8b5cf6]/40 hover:shadow-xl hover:shadow-[#8b5cf6]/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-2xl flex items-center justify-center text-2xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent -translate-x-full transition-transform duration-600 group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
