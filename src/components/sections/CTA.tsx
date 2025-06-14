"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-r from-[#8b5cf6]/10 to-[#06b6d4]/10"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-[#8b5cf6] bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of satisfied customers who trust CloudVault for their
            hosting needs. Start your journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#" className="btn btn-primary">
              Start Free Trial
            </Link>
            <Link href="#" className="btn btn-secondary">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
