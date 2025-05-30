"use client";

import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in crafting qualitative and responsive web applications that prioritize both performance and user experience. With expertise in React, Next.js, and Tailwind CSS, I deliver scalable solutions adaptable to a wide range of projects and collaboration styles.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I have experience in graphic design, creating intuitive and visually compelling designs that enhance user experiences and align with project goals. Using tools like Figma, Adobe Illustrator, and Photoshop, I craft detailed mockups and blueprints suitable for any type of application.",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "I provide SEO services aimed at improving website visibility and driving organic traffic. Through effective keyword strategies, site structure optimization, and content enhancement, platforms can achieve higher rankings in search engine results and connect with their target audience.",
    href: "",
  },
  {
    num: "04",
    title: "API development",
    description:
      "I develop robust and efficient RESTful APIs using Java and Spring Boot. By focusing on scalability and performance, I create seamless integrations that support diverse application functionalities.",
    href: "",
  },
];

import { motion } from "framer-motion";
import { Section } from "lucide-react";

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                {/* title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description*/}
                <p className="text-white/60">{service.description}</p>
                {/*border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
