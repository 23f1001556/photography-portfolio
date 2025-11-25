"use client";
import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const photos = [
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764056586/photo8_uxxgj4.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764061232/photo11_ecgp6k.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764056585/photo9_rmkhfj.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015950/kolkata2_xeex58.jpg", category: "City" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015923/img5_b5y1yk.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/people4_vumpko.jpg", category: "People" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/photo5_jpvlxv.jpg", category: "City" },
    { src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/img7_hua4fs.jpg", category: "City" },
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
      <h2 className="text-3xl font-bold text-center mb-8">Select Photo Folder</h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300
              ${filter === cat
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                : "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredPhotos.map((photo, index) => (
          <div key={index} className="relative group cursor-pointer">
            <Image
              src={photo.src}
              alt={`${photo.category} Photo`}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-48 group-hover:opacity-80 transition"
              onClick={() => setSelectedImage(photo.src)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-[999]"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Large Photo"
              width={900}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
