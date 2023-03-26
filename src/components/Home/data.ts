import { BsDatabase, BsLaptop } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { HiFingerPrint } from "react-icons/hi";

const SERVICES = [
  {
    heading: "IT Solutions",
    subText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Icon: FaLaptopCode,
    iconCol: "bg-emerald-100 text-emerald-500 ",
    iconBgWhite: "text-emerald-500 ",
  },
  {
    heading: "Security System",
    subText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Icon: HiFingerPrint,
    iconCol: "bg-blue-100 text-blue-500 ",
    iconBgWhite: "text-blue-500 ",
  },
  {
    heading: "Web Development",
    subText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Icon: BsLaptop,
    iconCol: "bg-amber-100 text-amber-500 ",
    iconBgWhite: "text-amber-500 ",
  },
  {
    heading: "Database Security",
    subText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Icon: BsDatabase,
    iconCol: "bg-red-100 text-red-500 ",
    iconBgWhite: "text-red-500 ",
  },
];

const FEATURES = [
  {
    Icon: FaLaptopCode,
    iconBgWhite: "text-emerald-500 ",
  },
  {
    Icon: HiFingerPrint,
    iconBgWhite: "text-blue-500 ",
  },
  {
    Icon: BsLaptop,
    iconBgWhite: "text-amber-500 ",
  },
  {
    Icon: BsDatabase,
    iconBgWhite: "text-red-500 ",
  },
  {
    Icon: FaLaptopCode,
    iconBgWhite: "text-emerald-500 ",
  },
  {
    Icon: HiFingerPrint,
    iconBgWhite: "text-blue-500 ",
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
