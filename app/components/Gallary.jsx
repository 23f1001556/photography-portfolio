"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const photos = [
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764056586/photo8_uxxgj4.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764061232/photo11_ecgp6k.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764056585/photo9_rmkhfj.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015950/kolkata2_xeex58.jpg", category: "City" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/people4_vumpko.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/photo5_jpvlxv.jpg", category: "City" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/img4_e3mxl7.jpg", category: "City" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015920/photo4_n4dmka.jpg", category: "City" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015918/photo3_ur48up.jpg", category: "City" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015919/photo1_qixbbs.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015918/kolkata1_rra1oc.jpg", category: "City" },

    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015918/people1_h0htzo.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015921/people3_bla6jf.jpg", category: "People" },

    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1763496684/samples/landscapes/beach-boat.jpg", category: "City" },
  ];

  const filteredPhotos = filter === "All" ? photos : photos.filter(photo => photo.category === filter);
  const categories = ["All", "People", "City"];

  return (
    <div id="gallery" className="bg-gray-900 text-white px-6 py-12">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8"
      >
        Select Photo Folder
      </motion.h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(cat => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300
              ${filter === cat
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                : "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"}`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Photo Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              layout
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 }
              }}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              key={photo.src}
              className="relative group cursor-pointer aspect-square overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={photo.src}
                alt={`${photo.category} Photo`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                onClick={() => setSelectedImage(photo.src)}
              />
              <div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                onClick={() => setSelectedImage(photo.src)}
              >
                <p className="text-white font-serif tracking-widest uppercase text-sm">View</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
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
              <Image
                src={selectedImage}
                alt="Large Photo"
                width={900}
                height={600}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
