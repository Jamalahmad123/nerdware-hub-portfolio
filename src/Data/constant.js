// Icons
import {
  FaSearchengin,
  FaWallet,
  FaCode,
  FaChartBar,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export const navLinks = [
  {
    id: 1,
    link: "/",
    name: "Home",
  },
  {
    id: 2,
    link: "/about",
    name: "About",
  },
  {
    id: 3,
    link: "/services",
    name: "Services",
  },
  {
    id: 4,
    link: "/projects",
    name: "Projects",
  },
  {
    id: 5,
    link: "/contact",
    name: "Contact",
  },
];

export const features = [
  {
    id: 1,
    title: "Business Idea Planing",
    content: "We present you a proposal and discuss niffty-gritty like",
    Icon: FaSearchengin,
  },
  {
    id: 2,
    title: "Financial Planning System",
    content: "Protocols apart from aengage models, pricing billing",
    Icon: FaWallet,
  },
  {
    id: 3,
    title: "Development Website and App",
    content: "Communication protocols apart from engagement models",
    Icon: FaCode,
  },
  {
    id: 4,
    title: "Business Idea Planing",
    content: "We present you a proposal and discuss niffty-gritty like",
    Icon: FaChartBar,
  },
];

`
SEO
Graphic Designing
UI UX

Animation`;

export const homeServices = [
  {
    id: 1,
    title: "Web Application Dev",
    titleComp: "Website Application Development",
  },
  {
    id: 2,
    title: "E-commerce Dev",
    titleComp: "E-commerce Development",
  },
  {
    id: 3,
    title: "Mobile Application Dev",
    titleComp: "Mobile Application Development",
  },
  {
    id: 4,
    title: "Desktop Application Dev",
    titleComp: "Desktop Application Development",
  },
  {
    id: 5,
    title: "WordPress Website Dev",
    titleComp: "WordPress Website Development",
  },
  {
    id: 6,
    title: "UI / UX design",
  },
  {
    id: 7,
    title: "Search Engine Optimization",
  },
  {
    id: 8,
    title: "Video Editing",
  },
];

import {
  sample,
  career,
  socialApp,
  screen1,
  taif,
  awais,
  asim1,
  jamal,
  hamza,
  adeel,
  founderImg,
} from "../assets/index";

export const projects = [
  {
    id: 1,
    title: "Fashion App",
    desc: "Nerdware Hub created a Fashion App that will be hosted worldwide, where all the fashion designers can upload their portfolio, actors and models can create their profiles and apply to jobs from directors and a lot more...",
    tech: "Flutter App Development",
    link: "#",
    image: socialApp,
  },
  {
    id: 2,
    title: "Career Dev Web",
    desc: "Career Development Buddy is a user-friendly application built both for Mobile and Web, users can find and apply onto jobs of they fit best with, via this platform.",
    tech: "react web development",
    link: "#",
    style: "col-span-2 row-span-2",
    image: career,
  },
  {
    id: 3,
    title: "Career Dev Mob",
    desc: "Career Development Buddy is a user-friendly application built both for Mobile and Web, users can find and apply onto jobs of they fit best with, via this platform.",
    tech: "react web development",
    link: "#",
    image: sample,
  },

  // {
  //   id: 4,
  //   title: "Hoo Bank",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam natus nisi accusamus nostrum reprehenderit quisquam.",
  //   link: "#",
  //   image: screen1,
  // },
];

export const team = [
  {
    id: 1,
    name: "Adeel Khan",
    title: "Founder",
    socialLinks: [
      {
        id: 1,
        Icon: FaFacebook,
        link: "www.facebook.com",
      },
      {
        id: 2,
        Icon: FaTwitter,
        link: "#",
      },
      {
        id: 3,
        Icon: FaLinkedin,
        link: "#",
      },
    ],
    image: founderImg,
  },
  {
    id: 2,
    name: "Mohammad Asim",
    title: "Flutter Dev",
    socialLinks: [
      {
        id: 1,
        Icon: FaFacebook,
        link: "#",
      },
      {
        id: 2,
        Icon: FaTwitter,
        link: "#",
      },
      {
        id: 3,
        Icon: FaLinkedin,
        link: "#",
      },
    ],
    image: asim1,
  },
  {
    id: 3,
    name: "Jamal",
    title: "Frontend Developer",
    socialLinks: [
      {
        id: 1,
        Icon: FaFacebook,
        link: "#",
      },
      {
        id: 2,
        Icon: FaTwitter,
        link: "#",
      },
      {
        id: 3,
        Icon: FaLinkedin,
        link: "#",
      },
    ],
    image: jamal,
  },
  {
    id: 5,
    name: "M Taif",
    title: "UI/UX Designer",
    socialLinks: [
      {
        id: 1,
        Icon: FaFacebook,
        link: "#",
      },
      {
        id: 2,
        Icon: FaTwitter,
        link: "#",
      },
      {
        id: 3,
        Icon: FaLinkedin,
        link: "#",
      },
    ],
    image: taif,
  },
  {
    id: 6,
    name: "Muhammad Owais",
    title: "Backend Dev",
    socialLinks: [
      {
        id: 1,
        Icon: FaFacebook,
        link: "#",
      },
      {
        id: 2,
        Icon: FaTwitter,
        link: "#",
      },
      {
        id: 3,
        Icon: FaLinkedin,
        link: "#",
      },
    ],
    image: awais,
  },
  {
    id: 7,
    name: "Hamza",
    title: "Backend Dev",
    socialLinks: [
      {
        id: 1,
        Icon: FaFacebook,
        link: "#",
      },
      {
        id: 2,
        Icon: FaTwitter,
        link: "#",
      },
      {
        id: 3,
        Icon: FaLinkedin,
        link: "#",
      },
    ],
    image: hamza,
  },
];

import {
  android,
  react,
  flutter,
  figma,
  nodeJs,
  aws,
  python,
  kotlin,
  googleCloud,
  firebase,
} from "../assets/index";

export const accodianData = [
  {
    id: 1,
    title: "Why do I need a mobile-friendly website?",
    desc: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.",
  },
  {
    id: 2,
    title: "What is the difference between custom and ready-to-use software?",
    desc: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.",
  },
  {
    id: 3,
    title: "Which Technology or Tools used for Website Designing?",
    desc: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.",
  },
];

export const technologies = [
  android,
  react,
  flutter,
  figma,
  nodeJs,
  python,
  kotlin,
  aws,
  googleCloud,
  firebase,
];
