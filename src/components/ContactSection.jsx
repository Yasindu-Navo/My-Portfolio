import React from "react";

function ContactSection() {
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
      </div>
    </section>
  );
}

export default ContactSection;
