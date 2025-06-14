"use client";

import Link from "next/link";

const ServerBox = ({ delay }: { delay: number }) => (
  <div
    className="w-[280px] h-[60px] bg-gradient-to-r from-[#8b5cf6]/10 to-[#06b6d4]/10 border border-[#8b5cf6]/30 rounded-xl mb-4 relative backdrop-blur-lg animate-pulse-slow"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="absolute left-5 top-1/2 -translate-y-1/2 flex gap-2">
      <div className="w-2 h-2 rounded-full bg-[#10b981] animate-blink" />
      <div
        className="w-2 h-2 rounded-full bg-[#06b6d4] animate-blink"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-blink"
        style={{ animationDelay: "1s" }}
      />
    </div>
  </div>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent animate-fade-in-up">
              Cloud Infrastructure That Grows With You
            </h1>
            <p
              className="text-xl text-gray-300 mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Deploy your applications with confidence using our
              enterprise-grade infrastructure. Experience hosting services that
              scale with your business, backed by 24/7 expert support and
              cutting-edge technology.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="#services" className="btn btn-primary">
                Try Free VPS
              </Link>
              <Link href="#features" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div
            className="relative h-[500px] animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <ServerBox delay={0} />
              <ServerBox delay={0.3} />
              <ServerBox delay={0.6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
