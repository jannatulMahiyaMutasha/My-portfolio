import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://images.seeklogo.com/logo-png/42/2/daffodil-international-university-logo-png_seeklogo-427709.png",
    school: "Daffodil International University",
    date: "Jan 2017 - Sep 2023",
    grade: "3.40 CGPA",
    desc: "Completed a comprehensive program in Computer Science and Engineering with a strong foundation in software development, algorithms, and system design.",
    degree: "Bachelor of Computer Science & Engineering - BSC",
  },
];

export const projects = [
  {
    id: 0,
    title: "DevTech",
    description:
      "DevTech is a modern freelancing platform designed to seamlessly connect individuals looking for help with small tasks and skilled freelancers seeking work opportunities. Whether you're a startup founder needing a quick design fix or a developer looking to monetize your skills, DevTech provides a streamlined, user-friendly environment to post, bid, and collaborate with confidence.",
    image: "https://i.postimg.cc/K82CdSZx/Capture.png",
    tags: ["React", "Node", "Express", "MongoDB", "Firebase"],
    github: "https://github.com/jannatulMahiyaMutasha/DevTech-client-site",
    github2: "https://github.com/jannatulMahiyaMutasha/DevTech-server-site",
    webapp: "https://freelancetaskdevtech.web.app/",
  },
  {
    id: 1,
    title: "Adventis",
    description:
      "Adventis is a powerful web-based platform for organizing and managing sports events. Whether you're an organizer looking to create an event or a participant eager to explore and book upcoming tournaments, Adventis makes the experience seamless, interactive, and efficient.",
    image: "https://i.postimg.cc/RVMc8Xj2/Capture.png",
    tags: ["React", "Node", "Express", "MongoDB", "Firebase"],
    github: "https://github.com/jannatulMahiyaMutasha/Adventis",
    github2: "https://github.com/jannatulMahiyaMutasha/Adventis-server-site",
    webapp: "https://adventis-12dea.web.app/",
  },
  {
    id: 2,
    title: "TheCreate",
    description:
      "This project demonstrates a full-featured subscription service website with user authentication, blog content, testimonials, FAQs, and admin-like profile editing. Ideal for showcasing skills in React, Firebase, and modern web development practices.",
    image: "https://i.postimg.cc/yNV4Sq5v/Capture.png",
    tags: ["React JS", "Tailwind", "Firebase"],
    github: "https://github.com/jannatulMahiyaMutasha/Crate-subscription",
    webapp: "https://my-auth-subscription-box.web.app/",
  },
];
