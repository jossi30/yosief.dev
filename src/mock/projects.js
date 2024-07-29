import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: '/images/nile.png',
    title: 'Nile Marketing Agency',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      ],
    description:
      'The official portfolio page of Nile Digital Marketing Agency. This project showcases the agency capabilities, projects, and team, built using React',
    repoLink: 'https://github.com/jossi30/Nile1',
    sourceLink: 'https://lawngreen-gnu-431638.hostingersite.com/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: '/images/developer-portfolio.png',
    title: 'Developer Portfolio',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description:
      'Simple and classic modern portfolio for who wants to present himself as a software developer. Portfolio build with highly customizable using Tailwind CSS, Next Js.',
    repoLink: 'https://github.com/',
    sourceLink: 'https:///',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: '/images/kitchen-store.png',
    title: 'Kitchen Store - E-Commerce',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      {
        label: 'Java',
        icon: 'logos:java',
      },
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ],
    description:
      'The e-commerce to buy kitchen related items. College final year project base on Servlets and JSP (Java)',
    repoLink: 'https://github.com/',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: '/images/Hotely.png',
    title: 'Hotely',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description: 'Hotely is a modern, visually stunning web application designed to provide a seamless user experience for potential guests. Built with the latest web technologies, including React.js, Next.js, Tailwind CSS, and ShadCN UI.',
    repoLink: 'https://github.com/jossi30/hotely',
    sourceLink: 'https://github.com/jossi30/hotely',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
