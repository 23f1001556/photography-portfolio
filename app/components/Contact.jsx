"use client";
import { motion } from "motion/react";
import { Mail, Phone, Instagram, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Let&apos;s Create Magic</h2>
            <p className="text-gray-400 font-light text-lg">
              Ready to tell your story? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Me</h3>
                  <a href="mailto:sidhantsksk@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    sidhantsksk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Call Me</h3>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Location</h3>
                  <p className="text-gray-400">
                    Available Worldwide<br />Based in India
                  </p>
                </div>
              </div>
            </div>

            {/* Social / Action */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center hover:bg-white/10 transition-colors cursor-pointer group">
                <Instagram className="w-10 h-10 mx-auto mb-4 text-pink-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Follow on Instagram</h3>
                <p className="text-sm text-gray-400">See my latest stories & behind the scenes</p>
              </div>

              <a
                href="mailto:sidhantsksk@gmail.com"
                className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors"
              >
                <span>Send a Message</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
