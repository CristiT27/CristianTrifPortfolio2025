"use client";

import {
  FaReact,
  FaHtml5,
  FaBootstrap,
  FaFigma,
  FaJava,
  FaBriefcase,
  FaGraduationCap,
  FaBolt,
  FaCss3,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "I am a skilled Software Developer with 2 years of professional experience in Java and Vector CANoe, bringing strong expertise in frontend development and UI/UX design. Passionate about crafting high-quality, responsive web applications, I excel with modern frontend technologies like React, Next.js, and Tailwind CSS. I also have solid backend skills in Java and Spring Boot, enabling me to build robust full-stack solutions. Combining technical proficiency with a business mindset, I deliver seamless, user-focused digital experiences that drive engagement and performance. My focus is firmly on frontend development, where I leverage my creativity and technical knowledge to bring intuitive interfaces to life.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Cristian Trif",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Linkedin",
      fieldValue: "Cristian Trif",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Romanian",
    },
    {
      fieldName: "Email",
      fieldValue: "cristiantrif29@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Romanian, English, German",
    },
  ],
};

//experience data
const experience = {
  icon: FaBriefcase,
  title: "My experience",
  description:
    "Fullstack Developer with 3 years of experience, eager to work on projects that let me express my creativity and grow as an engineer. I have a genuine passion for building beautiful web interfaces which is why I started my programming journey with an intensive 8-month Frontend Development course in 2022. In 2023, I joined Bertrandt as a Java Software Developer on the Porsche PIWIS project, drawn by the combination of backend implementation and GUI user-flow logic a skillset I consider essential on my path towards a Software Architect career. Outside of work, I build full stack applications using React, Next.js, TypeScript, PostgreSQL, and Prisma, and I'm currently developing a solo product launching this autumn covering everything from React architecture and database design to Figma assets and a marketing campaign with teaser ads created in Runway. This end to-end thinking, from database to interface and from code to product, is what drives me. I'm looking for an environment where I can deepen my frontend expertise, collaborate with people who care about craft, and keep raising my own bar.",
  items: [
    {
      company: "Bertrandt Engineering",
      position: "Software Developer",
      duration: "2023 - Present",
    },
    {
      company: "S4P",
      position: "Graphic Designer",
      duration: "2022 - 2023",
    },
    {
      company: "Continental AG",
      position: "Finance Controlling Intern",
      duration: "2021 - 2022",
    },
    {
      company: "Colt Technology",
      position: "Project Management Intern",
      duration: "2019 - 2020",
    },
  ],
};

//education
const education = {
  icon: FaGraduationCap,
  title: "My education",
  description:
    "I have a Bachelor's degree in Business Administration, with a thesis focused on Marketing. In 2022, I earned accreditation as a web designer after completing a Frontend Development and Design course. I have further strengthened my technical skills through courses and self-study in Java, Spring Boot, REST APIs, React, Next.js, and Tailwind CSS. Moving forward, I plan to expand my expertise by studying React Native and mobile app architecture. ",

  items: [
    {
      institution: "Udemy",
      degree: "React, Next.js and Tailwind Course ",
      duration: "2024-2025",
    },
    {
      institution: "Udemy",
      degree: "Spring Boot 3 Course",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "Java 17 Masterclass",
      duration: "2023",
    },
    {
      institution: "AzimutVision",
      degree: "Front-End Development Certification",
      duration: "2022-2023",
    },
    {
      institution: "University Lucian Blaga of Sibiu",
      degree: "Business administration",
      duration: "2017-2020",
    },
  ],
};

//skills
const skills = {
  icon: FaBolt,
  title: "My skills",
  description:
    "Proficient in front-end technologies including HTML, CSS, JavaScript, React, Next.js, Bootstrap, and Tailwind CSS for building responsive and modern web applications. Experienced in back-end development with Java, Spring Boot, and database management using MySQL. Skilled in UI/UX design tools such as Figma, Adobe Illustrator, and Adobe Photoshop to create visually compelling and user-friendly interfaces.",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.Css",
    },

    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiSpringboot />,
      name: "SpringBoot",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Adobe Illustrator",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/*content */}
          <div className="min-h-[70vh] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*skills*/}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl  flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*about*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w[620px]
                mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
