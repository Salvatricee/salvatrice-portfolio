"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, User, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import AnimatedSection from "../components/AnimatedSection";

const WEB3FORMS_ACCESS_KEY = "eda24aa3-9b84-4a11-aa62-42ff6f68aea7";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "submit-error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("submit-error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} via portfolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("submit-error");
      }
    } catch {
      setStatus("submit-error");
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-card border-t border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mb-16">
            <span className="text-primary-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
              Let&apos;s Build Something Together.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Whether it&apos;s a product idea, a design problem, or just a
              conversation about technology, I&apos;d love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10">
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-transparent border-2 border-line rounded-2xl p-8 space-y-6">
              <h3 className="font-heading text-xl font-bold text-ink mb-2">Send a Message</h3>

              <div>
                <label className="block text-sm font-medium text-ink mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full pl-11 pr-4 py-3 rounded-lg border border-line bg-card text-ink placeholder:text-muted focus:outline-none focus:border-primary-blue transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full pl-11 pr-4 py-3 rounded-lg border border-line bg-card text-ink placeholder:text-muted focus:outline-none focus:border-primary-blue transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3 w-4 h-4 text-muted" />
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell me about your project or just say hello..." className="w-full pl-11 pr-4 py-3 rounded-lg border border-line bg-card text-ink placeholder:text-muted focus:outline-none focus:border-primary-blue transition-colors resize-none" />
                </div>
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">Please fill in every field before sending.</p>
              )}
              {status === "submit-error" && (
                <p className="text-sm text-red-600">Something went wrong while sending your message. Please try again, or email me directly.</p>
              )}
              {status === "success" && (
                <p className="text-sm text-primary-blue">Thanks for reaching out! I&apos;ll get back to you soon.</p>
              )}

              <motion.button type="submit" whileHover={{ scale: 1.02 }} disabled={status === "sending"} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue hover:bg-bright-blue text-white font-medium rounded-lg transition-colors disabled:opacity-60">
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-line rounded-2xl p-8 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-ink mb-3">Prefer a direct message?</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">You can also reach me directly through any of these.</p>
              <div className="space-y-3">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=isalvatricee@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink hover:text-primary-blue transition-colors">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a href="https://github.com/Salvatricee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink hover:text-primary-blue transition-colors">
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/salvatrice-igabineza-0535a2302/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink hover:text-primary-blue transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}