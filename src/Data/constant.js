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

export const servicesData = [
  {
    id: 1,
    title: "App Development",
    desc: "We offer both iOS and Android app development services. Our app developers have deep understanding of mobile app development best practices and can help you create a user-friendly and feature-rich app that will help your business reach new heights.",
    Icon: android,
  },
  {
    id: 2,
    title: "Web Development",
    desc: "From custom website design and development to e-commerce platforms and CMS integration, our team of experts has the skills and experience to build a website that not only looks great but also delivers results. Whether you need a simple brochure website or a complex web application, we have the expertise to create a solution that meets your specific needs.",
    Icon: webIcon,
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "We provide a wide range of digital marketing services that include SEO, PPC, Social Media, Email marketing, and more. Our experts will help you to reach your target audience and increase conversions, by creating and implementing effective digital marketing strategies.",
    Icon: seoIcon,
  },
  {
    id: 4,
    title: "Content Writing",
    desc: "Our team of experienced writers can create high-quality content that engages your audience, drives traffic to your website and improves your search engine rankings. From blog posts and articles to product descriptions and website copy, we can help you create compelling and informative content that will help your business stand out.",
    Icon: copywritingIcon,
  },
  {
    id: 5,
    title: "eCommerce Development",
    desc: "We offer a range of ecommerce services that include platform selection, customization, payment gateway integration, and more. Whether you're just getting started or looking to take your existing ecommerce business to the next level, our experts can help you create a seamless and effective online store that will increase sales and drive revenue.",
    Icon: shopIcon,
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
  founderImg,
  experience,
  onTime,
  investment,
  qualityIcon,
  webIcon,
  seoIcon,
  copywritingIcon,
  shopIcon,
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

export const hireUs = [
  {
    id: 1,
    title: "Experienced & Skilled Resources",
    desc: "Our team of developers has a deep understanding of the latest technologies and trends in the industry, and they are skilled in building high-quality, feature-rich apps and websites that deliver results.",
    icon: experience,
  },
  {
    id: 2,
    title: "Cost-effective & On-time Delivery",
    desc: "We understand that cost is always a concern, so we work with you to create a solution that fits your budget while delivering maximum value on time.",
    icon: onTime,
  },
  {
    id: 3,
    title: "Scalability and Flexibility",
    desc: "We build our solutions keeping in mind the scalability and flexibility, so that it can be easily adaptable to the changing business needs.",
    icon: investment,
  },
  {
    id: 4,
    title: "Quality assurance",
    desc: "We have strict quality control process in place, to ensure that all our deliverables are of the highest quality.",
    icon: qualityIcon,
  },
];

export const accodianData = [
  {
    id: 1,
    title: "Why do I need a mobile-friendly website?",
    desc: "In today's digital age, having a mobile-friendly website is crucial for the success of any business. With more and more people using their mobile devices to access the internet, it's important for your website to be optimized for mobile viewing. This means that your website should be designed to be easily navigated and read on smaller screens and with touch-based interactions.",
  },
  {
    id: 2,
    title: "What is the difference between custom and ready-to-use software?",
    desc: "Custom software and ready-to-use software are two different types of software that are used to solve different problems. Custom software is developed specifically for a particular organization or business, taking into account the unique needs, requirements and constraints of that organization. Custom software is designed and built from scratch, by a team of developers, to meet the specific needs of the organization that is commissioning it. Ready-to-use software, on the other hand, is a pre-built software solution that is available for purchase or subscription, and it is intended to be used by a wide range of organizations or individuals. These software are built to meet the general needs of multiple organizations or individuals and not tailored to specific needs. They are easy to use and can be quickly implemented.",
  },
  {
    id: 3,
    title: "Which Technology or Tools used for Website Designing?",
    desc: "There are many different technologies and tools that can be used for website designing and development. Some of the most commonly used include: HTML, CSS, and JavaScript: These are the fundamental building blocks of the web. HTML provides the structure and content of the website, CSS is used for styling and layout, and JavaScript is used for dynamic functionality and interactivity. Adobe Photoshop, Sketch, Adobe XD, and Figma are some of the most popular tools used to design and create website layouts. MySQL, SQL Server, MongoDB are some of the popular databases that are used to store and manage website data.",
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
