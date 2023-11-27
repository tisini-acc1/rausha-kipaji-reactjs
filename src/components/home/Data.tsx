import { RiTeamLine } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
import { SiTalenthouse } from "react-icons/si";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
  // {
  //   name: "winners",
  //   href: "/winners",
  // },
];

export const hero = {
  title: "Rausha Kipaji Cup",
  subtitle: "Africa's premier youth football tournament",
  buttonText: "Starts in April",
};

export const whyus = [
  {
    id: 1,
    icon: <RiTeamLine />,
    title: "Teamwork and Cooperation",
    subtitle:
      "Promotes teamwork and collaboration as players strive for a shared objective",
  },
  {
    id: 2,
    icon: <IoIosPerson />,
    title: "Leadership Skills",
    subtitle:
      "Enhances decision-making and stress management skills within a team context",
  },
  {
    id: 3,
    icon: <SiTalenthouse />,
    title: "Talent Identification",
    subtitle:
      "Serves as a talent pool for discovering young players with potential for higher-level football",
  },
  {
    id: 4,
    icon: <TiSocialDribbbleCircular />,
    title: "Cultural Exchange",
    subtitle:
      "Facilitates cultural exchange as diverse teams converge, fostering understanding",
  },
];

export const cta = {
  title: "Register your team(s) today",
  subtitle: "regestration starts in January",
  buttonText: "Download form",
};

export const partners = {
  title: "Trusted by industry leaders",
  pages: [
    {
      brands: [
        { id: 1, logo: "/partners/rausha-kipaji-logo.png" },
        { id: 2, logo: "/partners/tisini-logo.png" },
        { id: 3, logo: "/partners/rausha-kipaji-logo.png" },
        { id: 4, logo: "/partners/tisini-logo.png" },
      ],
    },
    {
      brands: [
        { id: 2, logo: "/partners/tisini-logo.png" },
        { id: 3, logo: "/partners/rausha-kipaji-logo.png" },
        { id: 4, logo: "/partners/tisini-logo.png" },
        { id: 5, logo: "/partners/rausha-kipaji-logo.png" },
      ],
    },
  ],
  mobileBrands: [
    { id: 1, logo: "/partners/rausha-kipaji-logo.png" },
    { id: 2, logo: "/partners/tisini-logo.png" },
    { id: 3, logo: "/partners/rausha-kipaji-logo.png" },
    { id: 4, logo: "/partners/tisini-logo.png" },
  ],
};

export const testimonial = {
  title: "What people are saying about us",
  subtitle:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, ipsam",
  persons: [
    {
      avatar: "/avatars/avatar.jpg",
      name: "Josh Smith",
      title: "Manager of Kenya United",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: "/avatars/avatar1.jpg",
      name: "Brandi Johns",
      title: "Manager of Kenya United",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: "/avatars/avatar.jpg",
      name: "Paula Pfeffer",
      title: "Manager of Kenya United",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const footer = {
  socials: [
    { name: "facebook", icon: <FaFacebook /> },
    { name: "twitter", icon: <FaXTwitter /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "linkedin", icon: <FaLinkedinIn /> },
  ],
  links: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Scores", link: "/scores" },
    { name: "Winners", link: "/champions" },
  ],
  contacts: [
    { icon: <FaPhoneAlt />, contact: "0712345678" },
    { icon: <FaWhatsapp />, contact: "0712345678" },
    {
      icon: <MdEmail />,
      contact: "info@raushakipaji.com",
    },
  ],
};
