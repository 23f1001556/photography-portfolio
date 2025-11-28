"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="contact"
      className="p-8 max-w-xl mx-auto rounded shadow-md"
    >
      <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>

      <p className="mb-4">
        I’d love to hear from you! You can reach me through the following:
      </p>

      <ul className="space-y-3 text-lg">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:sidhantsksk@gmail.com"
            className="text-blue-600 underline"
          >
            sidhantsksk@gmail.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <a href="tel:+1234567890" className="text-blue-600 underline">
            +1 (234) 567-890
          </a>
        </li>
        <li>
          <strong>Portfolio:</strong>{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            My Portfolio
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
