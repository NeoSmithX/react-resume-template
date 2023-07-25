import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
// import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import profilepic from '../images/profilepic.jpg';
import aiweb3_log from '../images/aiweb3_log.jpg';
// import gavinwood from '../images/gavinwood.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'AIWEB3',
  Contact: '联系我们',
  Portfolio: '合作项目',
  Resume: '简介',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: '波卡学院',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `我们是波卡学院`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        大家好，我们来自AIWEB3，是一个专注于波卡生态的社区。xxx
        {/* I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder. */}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       
        {/* In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>. */}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: '白皮书',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: '欢迎您的加入',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: aiweb3_log,
  description: `AIWEB3是一个xxxx`,
  aboutItems: [
    {label: '位置', text: '地球', Icon: MapIcon},
    {label: '年龄', text: '1+', Icon: CalendarIcon},
    {label: 'xx', text: 'xx', Icon: FlagIcon},
    {label: 'xx', text: 'xx', Icon: SparklesIcon},
    {label: '目标', text: '波卡学院', Icon: AcademicCapIcon},
    {label: 'xx', text: 'xx', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: '市场能力',
    skills: [
      {
        name: 'xxx',
        level: 10,
      },
      {
        name: 'xxx',
        level: 4,
      },
      {
        name: 'xx',
        level: 3,
      },
    ],
  },
  {
    name: '技术背景',
    skills: [
      {
        name: 'AI(python)',
        level: 8,
      },
      {
        name: '后端(Typescript/Rust)',
        level: 8,
      },
      {
        name: '前端(急需你的加入=-=)',
        level: 1,
      },
    ],
  },
  {
    name: '合作团队',
    skills: [
      {
        name: 'xx',
        level: 8,
      },
      {
        name: 'xx',
        level: 5,
      },
      {
        name: 'xx',
        level: 4,
      },
    ],
  },
  {
    name: 'xxx',
    skills: [
      {
        name: 'xxx',
        level: 9,
      },
      {
        name: 'xxx',
        level: 4,
      },
      {
        name: 'xxx',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022~2023',
    location: '已完成目标？',
    title: '已完成目标？',
    content: <p>xxxx.</p>,
  },
  {
    date: '2023~',
    location: '未来目标？',
    title: '未来目标？',
    content: <p>xxx.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'xxxx',
    location: 'xxx',
    title: '什么是Create To Earn',
    content: (
      <p>
        xxx
      </p>
    ),
  },
  {
    date: 'xxxx',
    location: 'xxxx',
    title: 'Jxxxx',
    content: (
      <p>
        xxxxx
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Gavin Wood',
      text: 'Web3 is the service without service provider.',
      image: '../images/gavinwood.jpg',
    },
    {
      name: 'xxx',
      text: 'polakdot achexxxxxxx.',
      image: 'xxx',
    },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    // {
    //   type: ContactType.Email,
    //   text: 'reachout@timbaker.me',
    //   href: 'mailto:reachout@timbaker.me',
    // },
    // {
    //   type: ContactType.Location,
    //   text: 'Victoria BC, Canada',
    //   href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/NeoSmithX/react-resume-template',
    },
    {
      type: ContactType.Discord,
      text: 'Discord (图片待修改)',
      href: 'https://discord.gg/4Jm2cuDDDV',
    },
    
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/NeoSmithX/react-resume-template'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Discord (图片待修改)', Icon: InstagramIcon, href: 'https://discord.gg/4Jm2cuDDDV'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/aiweb3dao'},
];
