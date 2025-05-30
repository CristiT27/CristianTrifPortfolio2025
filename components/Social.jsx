import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaMeetup } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/CristiT27?tab=repositories",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/cristian-trif-07b05b1b6/",
  },
  {
    icon: <FaMeetup />,
    path: "https://www.meetup.com/members/469587988/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/cristian_trif?igsh=cG54Mmhtd2x1dHdj&utm_source=qr",
  },
];
function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
