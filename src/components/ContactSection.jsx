import { Github, GithubIcon, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import React from "react";
import { cn } from "../lib/utils";

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
              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  
                  <div className="space-y-8">
                      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>


                      <div className="space-y-6 justify-center">
                          
                          <div className="flex items-start space-x-4">
                              <div className="p-3 rounded-full  bg-primary/10 ">
                                  <Mail className="w-6 h-6 text-primary"/>
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
                                  <Linkedin className="w-6 h-6 text-primary"/>
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
                                  <Github className="w-6 h-6 text-primary"/>
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
                                  <Phone className="w-6 h-6 text-primary"/>
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

                  

                  </div >

                  



                  <div className="bg-card p-8 rounded-lg shadow-xs">
                      <h3 className="text-2xl font-semibold mb-6">send Me a Message</h3>

                      <form className="space-y-6">
                          <div> 
                              <label htmlFor="name" className="block text-sm fonr-medium mb-2">Your Name</label>
                              <input
                                  type="text" id="name" name="name" placeholder="Alex heils..."required
                                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                              />
                          </div>


                             <div> 
                              <label htmlFor="email" className="block text-sm fonr-medium mb-2">Email</label>
                              <input
                                  type="email" id="email" name="email" placeholder="john@gmail.com" required
                                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                              />
                          </div>


                             <div> 
                              <label htmlFor="message" className="block text-sm fonr-medium mb-2">Message</label>
                              <textarea
                                   id="message" name="message" placeholder="Hi,I'd like to talk about..." required
                                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                              />
                          </div>

                          <button
                              type="submit"
                              className={cn("cosmic-button w-full flex items-center justify-center gap-2"
                                  
                              )}
                          >
                              Send Message
                              <Send size={16}/>
                          </button>
                          
                      </form>
                      
            </div>
             
                  
        </div>



      </div>
    </section>
  );
}

export default ContactSection;
