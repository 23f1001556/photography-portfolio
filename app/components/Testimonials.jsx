"use client";
import { motion } from "motion/react";

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
        <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12"
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
                            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md relative"
                        >
                            <div className="text-4xl text-blue-500 absolute top-4 left-4 opacity-30">"</div>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 italic relative z-10">
                                {item.quote}
                            </p>
                            <div>
                                <h4 className="font-bold text-lg">{item.name}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
