"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f0f23]/95 backdrop-blur-xl"
          : "bg-[#0f0f23]/80 backdrop-blur-lg"
      }`}
    >
      <div className="container py-5">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent"
          >
            CloudVault
          </Link>
          <ul className="hidden md:flex gap-8">
            {["Home", "Services", "Features", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#8b5cf6] transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
