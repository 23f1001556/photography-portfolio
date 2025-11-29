"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Camera, X, Calendar, BookOpen } from "lucide-react";

const diaries = [
    {
        id: "banaras",
        title: "Banaras",
        subtitle: "The City of Lights",
        cover: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/photo5_jpvlxv.jpg",
        date: "October 2023",
        description: "A spiritual journey through the oldest living city in the world.",
        content: [
            { type: "text", text: "Banaras is not just a city; it's an experience. The air here is thick with devotion, the smell of incense, and the sound of temple bells. Walking through the narrow ghats, you lose track of time." },
            { type: "image", src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/photo5_jpvlxv.jpg", caption: "Morning prayers at the Ghats." },
            { type: "text", text: "Every corner tells a story. The sadhus with their ash-smeared bodies, the boatmen rowing silently across the Ganges, and the evening Aarti that lights up the river—it's all magical." },
            { type: "image", src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015920/photo4_n4dmka.jpg", caption: "The eternal flame." },
            { type: "text", text: "I spent days just sitting by the river, watching life and death coexist so peacefully. It changes you." }
        ]
    },
    {
        id: "kolkata",
        title: "Kolkata",
        subtitle: "The City of Joy",
        cover: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015918/kolkata1_rra1oc.jpg",
        date: "November 2023",
        description: "Capturing the soul of a city stuck in time.",
        content: [
            { type: "text", text: "Kolkata feels like a warm hug from the past. The yellow taxis, the tram lines, and the colonial architecture give it a unique charm that no other Indian city has." },
            { type: "image", src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015918/kolkata1_rra1oc.jpg", caption: "Yellow Taxi rush." },
            { type: "text", text: "The people here are the heartbeat of the city. From the busy markets of New Market to the quiet corners of Victoria Memorial, there is a story in every face." },
            { type: "image", src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015950/kolkata2_xeex58.jpg", caption: "Streets of North Kolkata." }
        ]
    },
    {
        id: "portraits",
        title: "Portraits",
        subtitle: "Faces of India",
        cover: "https://res.cloudinary.com/duliozn9g/image/upload/v1764061232/photo11_ecgp6k.jpg",
        date: "Ongoing",
        description: "Raw emotions captured through the lens.",
        content: [
            { type: "text", text: "A portrait is more than just a picture; it's a conversation. It's about trust and vulnerability. I love capturing the raw, unscripted emotions of people." },
            { type: "image", src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764061232/photo11_ecgp6k.jpg", caption: "Eyes that speak." },
            { type: "image", src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764056586/photo8_uxxgj4.jpg", caption: "Joy in simplicity." },
            { type: "image", src: "https://res.cloudinary.com/duliozn9g/image/upload/v1764015922/people4_vumpko.jpg", caption: "Wisdom of age." }
        ]
    }
];

export default function Diary() {
    const [selectedDiary, setSelectedDiary] = useState(null);

    return (
        <section id="diary" className="py-20 bg-neutral-950 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                        Photo Diaries
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        Collections of moments, stories, and memories from my journeys.
                    </p>
                </motion.div>

                {/* Diary Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {diaries.map((diary) => (
                        <motion.div
                            layoutId={`card-${diary.id}`}
                            key={diary.id}
                            onClick={() => setSelectedDiary(diary)}
                            className="group cursor-pointer relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl bg-neutral-900"
                            whileHover={{ y: -10 }}
                        >
                            <Image
                                src={diary.cover}
                                alt={diary.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-2 border border-white/10 z-10">
                                <BookOpen className="w-4 h-4 text-white" />
                                <span className="text-xs font-medium text-white uppercase tracking-wider">Read Story</span>
                            </div>

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <motion.div layoutId={`title-${diary.id}`}>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-1">{diary.title}</h3>
                                    <p className="text-sm text-gray-300 uppercase tracking-widest mb-2">{diary.subtitle}</p>
                                </motion.div>
                                <div className="flex items-center text-gray-400 text-xs space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {diary.title}</span>
                                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {diary.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Expanded View Modal */}
            <AnimatePresence>
                {selectedDiary && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedDiary(null)}
                    >
                        {/* Close Button (Fixed) */}
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedDiary(null); }}
                            className="fixed top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            layoutId={`card-${selectedDiary.id}`}
                            className="bg-neutral-900 w-full max-w-5xl min-h-[90vh] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >

                            {/* Header Image */}
                            <div className="relative h-[40vh] w-full shrink-0">
                                <Image
                                    src={selectedDiary.cover}
                                    alt={selectedDiary.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                                <div className="absolute bottom-8 left-8 md:left-12">
                                    <motion.h2 layoutId={`title-${selectedDiary.id}`} className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">
                                        {selectedDiary.title}
                                    </motion.h2>
                                    <p className="text-xl text-gray-300 font-light">{selectedDiary.description}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 overflow-y-auto">
                                <div className="max-w-3xl mx-auto space-y-12">
                                    {selectedDiary.content.map((block, idx) => (
                                        <div key={idx}>
                                            {block.type === "text" && (
                                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-serif">
                                                    {block.text}
                                                </p>
                                            )}
                                            {block.type === "image" && (
                                                <div className="my-8">
                                                    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-2">
                                                        <Image
                                                            src={block.src}
                                                            alt={block.caption}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="text-sm text-gray-500 italic text-center">{block.caption}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
