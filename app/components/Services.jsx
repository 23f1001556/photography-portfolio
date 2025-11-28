"use client";
import { motion } from "motion/react";

export default function Services() {
    const services = [
        {
            title: "Portrait Session",
            price: "$200",
            features: ["1 Hour Session", "15 Edited Photos", "Online Gallery", "1 Location"],
            delay: 0.1
        },
        {
            title: "Wedding Photography",
            price: "$1500",
            features: ["8 Hours Coverage", "300+ Edited Photos", "Online Gallery", "Engagement Session Included"],
            delay: 0.2
        },
        {
            title: "Event Coverage",
            price: "$500",
            features: ["4 Hours Coverage", "100+ Edited Photos", "Quick Turnaround", "Candid & Posed Shots"],
            delay: 0.3
        }
    ];

    return (
        <section id="services" className="py-16 bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12"
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
                            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col"
                        >
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-4xl font-bold text-blue-600 mb-6">{service.price}</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                                Book Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
