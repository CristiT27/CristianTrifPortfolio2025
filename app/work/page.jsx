"use client";

import { animate, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import WorkSliderButtons from "@/components/ui/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "SneakPeek",
    description:
      "SneakPeek is a modern Ecommerce project that showcases my skills with React, Next.js, Typescript, Tailwind, PostgreSQL, Prisma and Zod.",

    stack: [
      {
        name: "Next.js",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "React",
      },
      {
        name: "Typescript",
      },
    ],
    image: "/assets/work/SneakPeek.png",
    live: "https://sneak-peek-hazel.vercel.app/",
    github: "https://github.com/CristiT27/SneakPeek",
  },
  {
    num: "02",
    category: "frontend",
    title: "Soirée",
    description:
      "Soirée is a modern restaurant website I built using Next.js and Tailwind CSS. It combines sleek design with seamless performance, delivering a visually stunning and responsive experience that captures the essence of contemporary dining.",

    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "React",
      },
    ],
    image: "/assets/work/Soiree.png",
    live: "https://restaurant-soiree-project.vercel.app/",
    github: "https://github.com/CristiT27/restaurant-soiree-project",
  },
  {
    num: "03",
    category: "frontend",
    title: "CineMust",
    description:
      "CineMust is a sleek React web app powered by the OMDb API, offering a vast library of movies for discovery. Users can create personalized Watched lists and rate films, making it the ultimate companion for movie enthusiasts",

    stack: [
      {
        name: "React",
      },
      {
        name: "JavaScript",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: "/assets/work/CineMust.png",
    live: "https://cine-must.vercel.app/",
    github: "https://github.com/CristiT27/CineMust",
  },

  {
    num: "04",
    category: "frontend",
    title: "PackApp",
    description:
      "PackApp is a user-friendly React app designed to simplify travel preparation. It helps users create and manage packing lists, ensuring they have everything they need and never forget essential items for their trips.",
    stack: [
      {
        name: "React",
      },
      {
        name: "JavaScript",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: "/assets/work/PackApp.png",
    live: "https://pack-app-fawn.vercel.app/",
    github: "https://github.com/CristiT27/PackApp",
  },

  {
    num: "05",
    category: "backend",
    title: "GuestListApp",
    description:
      "GuestListApp is a robust Java Spring Boot application leveraging CRUD operations and REST API technology to streamline event management. It enables users to create, update, and manage a comprehensive database of guests for any event.",
    stack: [
      {
        name: "Spring Boot",
      },
      {
        name: "Java",
      },
      {
        name: "Thymeleaf",
      },
    ],
    image: "/assets/work/GuestList.png",
    live: "https://github.com/CristiT27/guest-list-project",
    github: "https://github.com/CristiT27/guest-list-project",
  },
  {
    num: "06",
    category: "frontend",
    title: "My Old Portfolio",
    description:
      "My old portfolio, crafted with vanilla JavaScript, HTML, CSS, and Bootstrap, holds a special place in my journey as a programmer. With its responsive design and clean execution, it represents an important milestone in my growth. Including it in my latest portfolio showcases not just where I am today, but the foundation of skills that got me here.",
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: "/assets/work/OldPortfolio.png",
    live: "https://cristit27.github.io/CristianTrifPortfolio/",
    github: "https://github.com/CristiT27/CristianTrifPortfolio",
  },
  {
    num: "07",
    category: "frontend",
    title: "Smart Grocery",
    description:
      "SmartGrocery is one of my first projects, serving as the frontend for an online grocery shop. Built with vanilla JavaScript, HTML, CSS, and Bootstrap, it highlights my early efforts in creating functional and visually appealing web applications while laying the groundwork for my growth as a developer.",
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: "/assets/work/SmartGrocery.png",
    live: "https://cristit27.github.io/CristianTrifGroceryStoreProject/",
    github: "https://github.com/CristiT27/CristianTrifGroceryStoreProject",
  },

  {
    num: "08",
    category: "frontend",
    title: "Ticket4Me",
    description:
      "Ticket4Me is a Cinema seat booking app I developed using vanilla JavaScript, HTML, CSS, and Bootstrap. With its simple, elegant, and efficient design, it provides users with a seamless experience, reflecting my focus on usability and aesthetic functionality.",
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: "/assets/work/Ticket4Me.png",
    live: "https://cristit27.github.io/CristianTrifCinemaBookingProject/",
    github: "https://github.com/CristiT27/CristianTrifCinemaBookingProject",
  },

  {
    num: "09",
    category: "frontend",
    title: "PasswordGenerator",
    description:
      "PasswordGenerator is my first simple React app, designed to quickly create strong and secure passwords. It showcases my initial exploration into React development with a clean and functional user interface.",
    stack: [
      {
        name: "React",
      },
      {
        name: "JavaScript",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: "/assets/work/PasswordGenerator.png",
    live: "https://cristit27.github.io/CristianTrifPasswordGenerator/",
    github: "https://github.com/CristiT27/CristianTrifPasswordGenerator",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h1 className="text-[56px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h1>

              {/*project category*/}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/*project description*/}
              <p className="text-white/60">{project.description}</p>

              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border */}
              <div className="border border-white/20"></div>
              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black"></div>
                      {/*image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover "
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
