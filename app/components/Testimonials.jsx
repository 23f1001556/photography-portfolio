"use client";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Wedding Client",
            quote: "Absolutely stunning photos! Captured every emotion perfectly. We couldn't be happier with our wedding album.",
            delay: 0.1
        },
        {
            name: "Mike & Jenny",
            role: "Couple Shoot",
            quote: "Professional, friendly, and incredibly talented. Made us feel so comfortable during the shoot.",
            delay: 0.2
        },
        {
            name: "TechCorp Inc.",
            role: "Corporate Event",
            quote: "Delivered high-quality images for our annual summit. Great attention to detail and very reliable.",
            delay: 0.3
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-neutral-900 text-white relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
                >
                    What Clients Say
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative group hover:bg-white/10 transition-colors"
                        >
                            <Quote className="absolute top-6 left-6 w-10 h-10 text-white/10 group-hover:text-white/20 transition-colors" />

                            <div className="flex mb-4 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-6 italic relative z-10 leading-relaxed">
                                &quot;{item.quote}&quot;
                            </p>

                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{item.name}</h4>
                                    <p className="text-sm text-gray-400">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
