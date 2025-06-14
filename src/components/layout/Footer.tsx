"use client";

import Link from "next/link";

const footerSections = [
  {
    title: "CloudVault",
    content:
      "Premium hosting solutions for modern businesses. Reliable, secure, and always online.",
  },
  {
    title: "Services",
    links: [
      { text: "Shared Hosting", href: "#" },
      { text: "VPS Hosting", href: "#" },
      { text: "Dedicated Servers", href: "#" },
      { text: "Cloud Hosting", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", href: "#" },
      { text: "Contact Us", href: "#" },
      { text: "System Status", href: "#" },
      { text: "Documentation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
      { text: "Careers", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="py-16 bg-black/50">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#8b5cf6] font-bold mb-5">{section.title}</h3>
              {section.content ? (
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              ) : (
                <ul className="space-y-3">
                  {section.links?.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-[#8b5cf6] transition-colors duration-300"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-[#8b5cf6]/20 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} CloudVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
