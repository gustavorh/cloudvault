import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0f0f23]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or want to learn more about our services? We&apos;d
            love to hear from you. Fill out the form below and we&apos;ll get
            back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
