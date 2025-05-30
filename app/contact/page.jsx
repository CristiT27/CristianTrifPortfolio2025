"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 758 617 360",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "cristiantrif29@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Sibiu, Romania",
  },
];

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-8 px-4 sm:py-12"
    >
      <div className="container mx-auto max-w-xl sm:max-w-3xl">
        <ul className="flex flex-col gap-10 sm:gap-16">
          {info.map((item, index) => (
            <li key={index} className="flex items-center gap-6 sm:gap-8">
              <div className="w-14 h-14 sm:w-18 sm:h-18 bg-[#27272c] text-accent rounded flex items-center justify-center text-2xl sm:text-3xl">
                {item.icon}
              </div>
              <div>
                <p className="text-white/70 uppercase tracking-wide font-semibold text-xs sm:text-sm">
                  {item.title}
                </p>
                <h3 className="text-lg sm:text-2xl font-semibold break-words">
                  {item.description}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default Contact;
