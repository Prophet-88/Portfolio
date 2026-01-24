import {
  mobile,
  creator,
  web,
  typescript,
  reactjs,
  tailwind,
  git,
  figma,
  flutter,
  menu_company,
  threejs,
  firebase,
  menuLogo,
  reazon,
  comingSoon
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'work',
    title: 'Work',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Flutter Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'flutter',
    icon: flutter,
  },
  {
    name: 'firebase',
    icon: firebase,
  },
];

const experiences = [
  {
    title: 'Lead Frontend Engineer (Mobile)',
    company_name: 'Reazon Holdings Inc.',
    icon: reazon,
    iconBg: '#383E56',
    date: 'February 2025 - Present',
    points: [
      'Leading mobile development for a sports betting application currently in active development.',
      'Researching and evaluating emerging technologies to select optimal tech stack and implement solutions that enhance application performance and user experience.',
      'Collaborating closely with design teams to deliver intuitive UI/UX that meets user needs and business objectives.',
      'Architecting scalable mobile solutions and establishing best practices for the development team.',
      'Utilizing AI-driven development tools to optimize coding efficiency and reduce development time.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: 'menu inc.',
    icon: menu_company,
    iconBg: '#383E56',
    date: 'April 2023 - February 2025',
    points: [
      'Involved in the development and improvement of mobile applications by utilizing advanced technologies such as Flutter and React Native.',
      'Amplifying product quality through a collaborative approach with cross-functional teams, encompassing designers, product managers, and peer developers.',
      'Implementing adaptive design principles to ensure seamless cross-platform compatibility.',
      'Active participation in code review sessions, while offering insightful and constructive feedback to enhance developer proficiency and code efficiency.',
    ],
  }
];

const projects = [
  {
    name: 'menu 加盟店ピッカー用',
    description:
      'Mobile application that allows retailers to acknowledge incoming orders, prepare and mark them as ready, then pack them properly and wait for the pick-up',
    tags: [
      {
        name: 'Flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'riverpod',
        color: 'green-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: menuLogo,
    source_code_link:
      'https://apps.apple.com/jp/app/menu-%E5%8A%A0%E7%9B%9F%E5%BA%97%E3%83%94%E3%83%83%E3%82%AB%E3%83%BC%E7%94%A8/id6473827379',
  },
  {
    name: 'Updating...',
    description:
      'Coming Soon...',
    tags: [
      {
        name: 'Coming Soon',
        color: 'gray-text-gradient',
      },
    ],
    image: comingSoon,
  },
];

export { services, technologies, experiences, projects };
