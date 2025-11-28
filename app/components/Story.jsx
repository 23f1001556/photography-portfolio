"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function Story() {
  const storyItems = [
    {
      src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764056586/photo8_uxxgj4.jpg",
      title: "Love & Joy",
      description: "Capturing love and joy in everyday moments that feel like a movie."
    },
    {
      src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764061232/photo11_ecgp6k.jpg",
      title: "City Life",
      description: "Exploring the vibrant life of cities through my lens."
    },
    {
      src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764056585/photo9_rmkhfj.jpg",
      title: "People & Culture",
      description: "Immersing into cultures and telling stories through faces and gestures."
    },
    {
      src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/people4_vumpko.jpg",
      title: "Nanar's Street Bond",
      description: "In the narrow lanes of Nanar’s Old Town, a kindly old cloth merchant pauses, his weathered hands gently stroking the head of a stray dog. His eyes sparkle with warmth and joy, a quiet love shining through his smile. Amid the bustling streets, he radiates a simple happiness, reminding passersby of life’s small, beautiful connections."
    },
    {
      src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/photo5_jpvlxv.jpg",
      title: "Manikarnika Ghat",
      description: "At the sacred Manikarnika Ghat, the morning mist rises off the Ganges as an elderly man offers prayers. His face reflects devotion and peace, a quiet reverence for the river that has witnessed countless lifetimes."
    },
    {
      src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015918/people1_h0htzo.jpg",
      title: "Kolkata Rickshaw Life",
      description: "In the bustling streets of Kolkata, a man pulls his rickshaw through the chaos, each step a testament to hard work and survival. Around him, the city hums with modern life, yet echoes of the 90s linger in the old buildings and street sounds."
    },
    {
      src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015918/kolkata1_rra1oc.jpg",
      title: "Victoria Taxi Rush",
      description: "A yellow taxi speeds past the iconic Victoria Memorial, blurring against the grandeur of the monument. The contrast of motion and stillness captures the heartbeat of Kolkata."
    },
    {
      src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015921/people2_eh2e5q.jpg",
      title: "Sikh Warrior Pride",
      description: "A Sikh man stands proudly in his traditional warrior attire, turban perfectly tied, embodying strength, heritage, and timeless valor."
    }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % storyItems.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swipe left → next
      setCurrentIndex((prev) => (prev + 1) % storyItems.length);
    } else if (diff < -50) {
      // Swipe right → previous
      setCurrentIndex((prev) => (prev - 1 + storyItems.length) % storyItems.length);
    }
  };

  return (
    <div id="story" className="pt-8 pb-20 bg-neutral-950 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-white"
      >
        Visual Stories
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Wrapper */}
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {storyItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
              <div className="cursor-pointer md:w-1/2" onClick={() => setSelectedImage(item.src)}>
                <Image src={item.src} alt={item.title} width={600} height={400} className="rounded-lg object-cover w-full h-80" />
              </div>
              <div className={`md:w-1/2 text-center md:text-left ${index % 2 === 0 ? "md:order-2" : ""}`}>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {storyItems.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-blue-600" : "bg-gray-400"}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-[999]"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative"
            >
              <Image src={selectedImage} alt="Large Photo" width={900} height={600} className="rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
}
