import {
  Github,
  GithubIcon,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");
    try {
      await emailjs.send(
        "service_hxqsshq", // Replace with your EmailJS service ID
        "template_outia7b", // Replace with your EmailJS template ID
        formData,
        "KztbH0jcxSbKEzgoM" // Replace with your EmailJS public key
      );
      setStatusMessage("Message sent successfully!");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className=" text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Looking for a passionate developer to join your team? I’m always open
          to new opportunities, collaborations, and meaningful conversations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full  bg-primary/10 ">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:yasindunavodh06@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    yasindunavodh06@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full  bg-primary/10 ">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Linkedin</h4>
                  <a
                    href="https://www.linkedin.com/in/yasindu-navodh/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                  >
                    www.linkedin.com/in/yasindu-navodh
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full  bg-primary/10 ">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href="https://github.com/Yasindu-Navo"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                  >
                    github.com/Yasindu-Navo
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full  bg-primary/10 ">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+94768663035"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 76-8663035
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm fonr-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="Alex heils..."
                  required
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm fonr-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  placeholder="john@gmail.com"
                  required
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm fonr-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi,I'd like to talk about..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send size={16} className={isLoading ? "animate-spin" : ""} />
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-center text-sm text-muted-foreground">
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
