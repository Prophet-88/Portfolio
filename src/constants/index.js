import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  flutter,
  cpp,
  menu_company,
  threejs,
  menuLogo,
  comingSoon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "menu inc.",
    icon: menu_company,
    iconBg: "#383E56",
    date: "April 2023 - ",
    points: [
      "Involved in the development and improvement of mobile applications by utilizing advanced technologies such as Flutter and React Native.",
      "Amplifying product quality through a collaborative approach with cross-functional teams, encompassing designers, product managers, and peer developers.",
      "Implementing adaptive design principles to ensure seamless cross-platform compatibility.",
      "Active participation in code review sessions, while offering insightful and constructive feedback to enhance developer proficiency and code efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "menu 加盟店ピッカー用",
    description:
      "Mobile application that allows retailers to acknowledge incoming orders, prepare and mark them as ready, then pack them properly and wait for the pick-up",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "riverpod",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: menuLogo,
    source_code_link:
      "https://apps.apple.com/jp/app/menu-%E5%8A%A0%E7%9B%9F%E5%BA%97%E3%83%94%E3%83%83%E3%82%AB%E3%83%BC%E7%94%A8/id6473827379",
  },
];

export { services, technologies, experiences, testimonials, projects };
