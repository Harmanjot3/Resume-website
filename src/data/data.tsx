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
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
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
import profilepic from '../images/profilepic.jpg';
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
  title: 'Harmanjot Singh',
  description: "Welcome to my place......",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Harmanjot Singh.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a 4th-year <strong className="text-stone-100">Software Engineering</strong> student at
        <strong className="text-stone-100"> Kalinga Institute of Industrial Technology</strong>, currently working as a Python developer at <strong className="text-stone-100">Instant Domains</strong>. I also have
        experience
        with <strong className="text-stone-100">SQL</strong> and <strong className="text-stone-100">DBMS</strong>, among
        other technologies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me playing <strong className="text-stone-100">Games</strong>, or playing <strong className="text-stone-100">Guitar</strong>, or exploring the beautiful{' '}
        <strong className="text-stone-100">World</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};


/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am passionate about technology and constantly learning new skills. I have experience in various programming languages and frameworks, and enjoy solving complex problems. In my free time, I like to engage in outdoor activities and play musical instruments.`,
  aboutItems: [
    {label: 'Location', text: 'Bhubaneswar, Odisha', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Guitar, Collecting high-res audio files, Exploring', Icon: SparklesIcon},
    {label: 'Study', text: 'Kalinga Institute of Industrial Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains', Icon: BuildingOffice2Icon},
  ],
};


/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'C', level: 8},
      {name: 'C++', level: 7},
      {name: 'Java', level: 8},
      {name: 'Python', level: 9},
      {name: 'SQL', level: 8},
    ],
  },
  {
    name: 'Tools and Frameworks',
    skills: [
      {name: 'GitHub', level: 8},
      {name: 'Git', level: 8},
      {name: 'Tkinter', level: 7},
      {name: 'PyCharm', level: 8},
      {name: 'AWS', level: 7},
      {name: 'Jupyter', level: 8},
      {name: 'Google Colab', level: 7},
      {name: 'MySQL', level: 8},
      {name: 'PopSQL', level: 7},
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {name: 'Flask', level: 7},
      {name: 'Django', level: 8},
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {name: 'Python', level: 9},
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
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2021 – August 2025',
    location: 'Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha',
    title: 'Bachelor of Technology in Computer Science and Engineering',
    content: <p>CGPA: 8.00</p>,
  },
  {
    date: '2019 – 2021',
    location: 'Bansal Classes, Kota',
    title: 'Secondary Education',
    content: <p>Completed my secondary education with a focus on preparing for engineering entrance exams.</p>,
  },
  {
    date: '2006 – 2019',
    location: 'St. Joseph\'s Convent School, Hoshiarpur',
    title: 'Primary Education',
    content: <p>Completed my primary education, building a strong foundation in various subjects.</p>,
  },
];


export const experience: TimelineItem[] = [
  {
    date: 'May 2024 – July 2024',
    location: 'NICE Computers, Hoshiarpur',
    title: 'Instructor',
    content: (
      <p>
        Authored and delivered comprehensive lessons in Machine Learning and programming languages. Coached and guided students through practical projects and coding challenges, leading to a 45% increase in coding proficiency among participants.
      </p>
    ),
  },
  {
    date: 'March 2022 – June 2022',
    location: 'InnovaTech Solutions',
    title: 'Tech Content Writer',
    content: (
      <p>
        Crafted and published daily technology articles addressing trending and niche topics, leading to a 30% growth in returning visitors and a 20% increase in social media shares.
      </p>
    ),
  },
  {
    date: 'August 2023 – Present',
    location: 'KIIT, Bhubaneswar',
    title: 'In-house Researcher',
    content: (
      <p>
        Conducted research under the guidance of Dr. Suresh Chandra Satpathy in the field of evolutionary optimizations, focusing on techniques such as Social Group Optimization (SGO). Contributed to several publications and enhanced research methodologies.
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'harmanjotsingh555@gmail.com',
      href: 'mailto:harmanjotsingh555@gmail.com',
    },

    {
      type: ContactType.Instagram,
      text: '@nerdo001',
      href: 'https://www.instagram.com/nerdo001/',
    },
    {
      type: ContactType.Github,
      text: 'xxharmanxx',
      href: 'https://github.com/xxharmanxx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/xxharmanxx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/26466705/harmanjot-singh'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/harmanjot-singh-799a43234/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/nerdo001/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/HarmanjotS12345'},
];
