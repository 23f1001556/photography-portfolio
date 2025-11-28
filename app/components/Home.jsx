"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div id="home" className="relative w-full h-[90vh]">
        <Image
          src="https://res.cloudinary.com/duliozn9g/image/upload/v1764056586/photo8_uxxgj4.jpg"
          alt="my photo"
          fill={true}
          loading="eager"
          className="object-cover object-[center_40%]"
        />
        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-[100px] left-[32px] text-left max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-white">
            Photographs of love, joy, and moments of life that feel like a movie
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-800 dark:text-gray-300">
            Capturing moments, one photo at a time.
          </p>
        </motion.div>
      </div>

      {/* Emaa Section */}
      <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center px-8 py-8 bg-gray-50 dark:bg-gray-900">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="shrink-0 mb-6 md:mb-0 md:mr-16"
        >
          <Image
            src="https://res.cloudinary.com/duliozn9g/image/upload/v1764061232/photo11_ecgp6k.jpg"
            alt="Emaa"
            width={200}
            height={200}
            loading="eager"
            className="rounded-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">
            Hello! I’m Emaa, a photographer from Kolkata
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I tell stories through my photographs, capturing not just moments, but the emotions that make them alive. Coming to India, I fell deeply in love with its culture, the vibrant energy, and the raw emotions in everyday life. For me, photography is about connection — with others, with nature, and with the hidden parts of yourself waiting to be discovered.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Do you feel the same? Let’s meet through stories and emotions and get to know each other better!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
