"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div id="home" className="relative w-full h-screen">
        <Image
          src="https://res.cloudinary.com/duliozn9g/image/upload/v1764056586/photo8_uxxgj4.jpg"
          alt="my photo"
          fill={true}
          priority
          className="object-cover object-[center_40%]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>

        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Cinematic Moments
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-2xl drop-shadow-md">
            Capturing love, joy, and the unscripted beauty of life.
          </p>
        </motion.div>
      </div>

      {/* Bio Section */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center px-8 py-24 bg-black text-white">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="shrink-0 mb-10 md:mb-0 md:mr-20"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-gray-800 shadow-2xl">
            <Image
              src="https://res.cloudinary.com/duliozn9g/image/upload/v1764061232/photo11_ecgp6k.jpg"
              alt="Emaa"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
            Hello, I’m Nisha.
          </h3>
          <p className="mb-6 text-xl text-gray-300 leading-relaxed font-serif italic opacity-90">
            &quot;Photography, for me, <span className="text-[#d4af37]">is a medium to reveal the truth in every moment.</span> I am driven by storytelling, visual artistry, and the authentic emotions that define human experience. Through my lens, I don’t just capture a scene—I convey its essence.&quot;
          </p>
          <p className="text-xl text-gray-300 leading-relaxed font-serif italic opacity-90">
            &quot;<span className="text-[#d4af37]">Each image is an exploration of humanity, narrative, and light,</span> crafted to reflect genuine emotion and the subtleties of life. My goal is to transform fleeting moments into enduring stories that resonate beyond the frame.&quot;
          </p>

        </motion.div>
      </div>
    </div>
  );
}
