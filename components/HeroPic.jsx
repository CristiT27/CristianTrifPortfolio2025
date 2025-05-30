"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

const icons = [
  { id: "nextjs", component: <SiNextdotjs size={100} color="#ffffff" /> },
  { id: "react", component: <FaReact size={100} color="#61DAFB" /> },
  { id: "tailwind", component: <SiTailwindcss size={100} color="#38BDF8" /> },
  { id: "javascript", component: <SiJavascript size={100} color="#F7DF1E" /> },
  { id: "html", component: <FaHtml5 size={100} color="#E34F26" /> },
  { id: "css", component: <FaCss3Alt size={100} color="#1572B6" /> },
  { id: "bootstrap", component: <FaBootstrap size={100} color="#7952B3" /> },
  { id: "figma", component: <FaFigma size={100} color="#4045B8" /> },
  {
    id: "illustrator",
    component: <SiAdobeillustrator size={100} color="#E54233" />,
  },
  {
    id: "photoshop",
    component: <SiAdobephotoshop size={100} color="#2250B8" />,
  },
  { id: "java", component: <FaJava size={100} color="#007396" /> },
  { id: "springboot", component: <SiSpringboot size={100} color="#6DB33F" /> },
  { id: "sql", component: <SiMysql size={100} color="#007333" /> },
];

function HeroPic() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1500); // Matches the animation duration

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.2, ease: "easeIn" },
        }}
        className="w-[198px] h-[268px] xl:w-[498px] xl:h-[498px]"
      >
        {/*skills*/}

        <AnimatePresence mode="wait">
          <motion.div
            key={icons[currentIndex].id}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // 1 second animation
            className="flex justify-center items-center w-[198px] h-[198px] xl:w-[498px] xl:h-[498px] bg-primary absolute"
          >
            <div className="object-contain">
              {icons[currentIndex].component}
            </div>
          </motion.div>
        </AnimatePresence>

        {/*circle*/}

        <motion.svg
          className="w-[200px] xl:w-[506px] h-[200px] xl:h-[506px] relative"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "160 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default HeroPic;
