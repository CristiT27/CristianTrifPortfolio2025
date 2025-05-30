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
      className="py-12"
    >
      <div className="container mx-auto flex justify-center">
        <ul className="flex flex-col gap-16 max-w-md w-full">
          {info.map((item, index) => (
            <li key={index} className="flex items-center gap-8">
              <div className="w-[72px] h-[72px] bg-[#27272c] text-accent rounded flex items-center justify-center text-[32px]">
                {item.icon}
              </div>
              <div>
                <p className="text-white/70 uppercase tracking-wide font-semibold">
                  {item.title}
                </p>
                <h3 className="text-2xl font-semibold">{item.description}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default Contact;
