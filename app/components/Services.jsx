"use client";
import { motion } from "motion/react";
import { Check, Camera, Image as ImageIcon, Video } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Portrait Session",
            price: "$200",
            icon: <Camera className="w-12 h-12 mb-4 text-blue-400" />,
            features: ["1 Hour Session", "15 Edited Photos", "Online Gallery", "1 Location"],
            delay: 0.1
        },
        {
            title: "Wedding Photography",
            price: "$1500",
            icon: <ImageIcon className="w-12 h-12 mb-4 text-purple-400" />,
            features: ["8 Hours Coverage", "300+ Edited Photos", "Online Gallery", "Engagement Session Included"],
            delay: 0.2
        },
        {
            title: "Event Coverage",
            price: "$500",
            icon: <Video className="w-12 h-12 mb-4 text-pink-400" />,
            features: ["4 Hours Coverage", "100+ Edited Photos", "Quick Turnaround", "Candid & Posed Shots"],
            delay: 0.3
        }
    ];

    return (
        <section id="services" className="py-20 bg-neutral-950 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
                >
                    Services & Pricing
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: service.delay }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="bg-white/10 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">{service.price}</p>

                            <ul className="space-y-4 mb-8 flex-grow w-full text-left">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <Check className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                                Book Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
