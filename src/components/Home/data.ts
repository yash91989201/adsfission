import { BsDatabase, BsLaptop } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { HiFingerPrint } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";
import { TbWriting } from "react-icons/tb";

const SERVICES = [
  {
    heading: "Post Creation",
    subText: "We will create instagram and facebook posts for your business.",
    Icon: FaLaptopCode,
    iconCol: "bg-emerald-100 text-emerald-500 ",
    iconBgWhite: "text-emerald-500 ",
    imagePath: "/post_creation.jpg",
  },
  {
    heading: "Social Media Management",
    subText:
      "We will provide support to enhance brand visibility and strengthen engagement strategies.",
    Icon: BsDatabase,
    iconCol: "bg-red-100 text-red-500 ",
    iconBgWhite: "text-red-500 ",
    imagePath: "/social_media_management.jpg",
  },
  {
    heading: "Web Development",
    subText:
      "We will construct your website with comprehensive SEO assistance to enhance your online visibility.",
    Icon: BsLaptop,
    iconCol: "bg-amber-100 text-amber-500 ",
    iconBgWhite: "text-amber-500 ",
    imagePath: "/web_development.jpeg",
  },
  {
    heading: "Content Writing",
    subText:
      "We will construct your website with comprehensive SEO assistance to enhance your online visibility.",
    Icon: BsLaptop,
    iconCol: "bg-amber-100 text-amber-500 ",
    iconBgWhite: "text-amber-500 ",
    imagePath: "/content_writing.jpeg",
  },
];

const FEATURES = [
  {
    Icon: BsInstagram,
    iconBgWhite: "text-emerald-500 ",
  },
  {
    Icon: CgBrowser,
    iconBgWhite: "text-blue-500 ",
  },
  {
    Icon: TbWriting,
    iconBgWhite: "text-amber-500 ",
  },
  {
    Icon: TbWriting,
    iconBgWhite: "text-amber-500 ",
  },
];

const STATS = [
  {
    bgCol: "bg-yellow-500",
    fig: 250,
    desc: "Our Branches",
  },
  {
    bgCol: "bg-green-500",
    fig: 50,
    desc: "Projects Done",
  },
  {
    bgCol: "bg-red-500",
    fig: 45,
    desc: "Happy Users",
  },
  {
    bgCol: "bg-blue-500",
    fig: 100,
    desc: "Awards",
  },
];

const TEAM_MEMBER = [
  {
    name: "Suraj Singh",
    designation: "Manager",
  },
  {
    name: "Yashraj Jaiswal",
    designation: "Software Developer",
  },
  {
    name: "Dhiraj Dutta",
    designation: "Canva Designer",
  },
];

const TESTIMONIALS = [
  {
    clientName: "Philip Mendez",
    company: "Consectetur",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti necessitatibus aspernatur, accusantium voluptatum in.",
    topBorderCol: "border-yellow-500",
  },
  {
    clientName: "Eugene Freeman",
    company: "Tincidunt",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti necessitatibus aspernatur, accusantium voluptatum in.",
    topBorderCol: "border-green-500",
  },
  {
    clientName: "Eugene Freeman",
    company: "Tincidunt",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti necessitatibus aspernatur, accusantium voluptatum in.",
    topBorderCol: "border-blue-500",
  },
];

export { SERVICES, FEATURES, STATS, TEAM_MEMBER, TESTIMONIALS };
