import profile from "../assets/images/profile.jpg";
import jmif from "../assets/images/jmif-project.png";
import gpih from "../assets/images/gpih-project.png";
import onlinJob from "../assets/images/online-job.png";

export const recentProject = [
  {
    title: "POS Inventory System",
    client: "GPIH",
    role: "Full-Stack Developer",
    description:
      "    Developed a real-time Point of Sale (POS) Inventory System for GPIH Hospital, tailored to meet the unique needs and culture of the business. Key features include secure authentication, inventory management, POS integration, data visualization, real-time notifications, and user account settings. The system enhances operational efficiency and provides seamless real-time updates for both inventory and sales processes.",
    tools: ["React", "Tailwind CSS", "RESTful APIs", " Socket.IO", "Mysql"],
    image: gpih,
    github: "",
    externalLink: "",
  },
  {
    title: "School Website",
    client: "JMIF",
    role: "Full-Stack Developer",
    description:
      "This project involves building a school website for JMIF, designed to showcase the institution's programs, events, and updates in a user-friendly and visually appealing manner. The website is currently in development and aims to provide a seamless experience for students, parents, and faculty. Although it is a static website, it incorporates interactive features like email integration for inquiries using EmailJS.",
    tools: ["React", "Tailwind", "EmailJs", "Figma"],
    image: jmif,
    github: "",
    externalLink: "https://jmif-73f1a.web.app/",
  },
  {
    title: "Online Job System",
    client: "Student",
    role: "Full-Stack Developer",
    description:
      "This is a collaborative project developed with a Psychology student to create a platform connecting independent workers (e.g., technicians, builders, plumbers) with individuals or communities in need of their services. The system offers a seamless experience for both service providers and customers. Key features include user authentication, phone and email verification, real-time chat functionality, push notifications, and a robust talent search feature to easily find skilled workers based on specific needs.",
    tools: [
      "Laravel",
      "Tailwind CSS",
      "Javascript",
      "Livewire",
      "Push notifications",
      "Mysql",
    ],
    image: onlinJob,
    github: "",
    externalLink: "",
  },

  // {
  //   title: "POS Inventory System",
  //   client: "GPIH",
  //   role: "FullStack Developer",
  //   description:
  //     "Developed a real-time collaboration platform enabling seamless communication and data sharing. The project included features like live chat using Socket.IO, a responsive UI built with React and Tailwind, and integration with third-party APIs to enhance functionality.",
  //   tools: ["react", "tailwind", "API", "socket.io"],
  //   image: profile,
  //   github: "Http",
  //   externalLink: "",
  // },
];

export const academicProject = [
  {
    title: "Water Monitoring System",
    role: "FullStack Developer",
    description:
      "This thesis project utilizes Arduino technology and a web application to monitor water consumption in real time.",
    tools: [
      "React",
      "Tailwind",
      "RESTful APIs",
      "Firebase",
      "Chart.Js",
      "arduino",
      "IoT",
    ],
    image: profile,
    github: "https://github.com/vronalyn/react-bootstrap",
    externalLink: "",
  },
  {
    title: "Predictive Analysis",
    role: "FullStack Developer",
    description:
      "Developed a predictive web app for breast symptoms and diabetes by building a machine learning model from collected data. The process included data preprocessing, training, and evaluation of the model to ensure accuracy. ",
    tools: [
      "Django",
      "Python",
      "CSS",
      "JS",
      "Chart.js",
      "firebase",
      "No-Sql",
      "Machine Learning",
    ],
    image: profile,
    github: "https://github.com/Hattah10/Predictive-Analysis/tree/master",
    externalLink: "",
  },
  {
    title: "Dengue Data Insights",
    role: "FullStack Developer",
    description:
      "Developed a web application featuring interactive charts to visualize and simplify the understanding of collective dengue data.",
    tools: ["Django", "Python", "CSS", "JS", "Chart.js", "Mysql"],
    image: profile,
    github: "https://github.com/Hattah10/DataVisualization_FinalProject",
    externalLink: "",
  },
];
