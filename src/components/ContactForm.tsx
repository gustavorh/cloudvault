"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-[#0f0f23]/50 backdrop-blur-lg rounded-xl border border-[#8b5cf6]/20">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#0f0f23] border border-[#8b5cf6]/20 rounded-lg text-gray-300 focus:outline-none focus:border-[#8b5cf6] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#0f0f23] border border-[#8b5cf6]/20 rounded-lg text-gray-300 focus:outline-none focus:border-[#8b5cf6] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 bg-[#0f0f23] border border-[#8b5cf6]/20 rounded-lg text-gray-300 focus:outline-none focus:border-[#8b5cf6] transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {submitStatus === "success" && (
          <p className="text-green-400 text-center">
            Message sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-400 text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
