import {
  BsDatabase,
  BsFillTelephoneFill,
  BsLaptop,
  BsPhone,
} from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiFingerPrint } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";
import { TbWriting } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

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
      "Our team of experienced content creators will customize the content to fit your brand's voice and style.",
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
    imageHref: "/suraj_profile.jpg",
    socialsList: [
      {
        Icon: FaLinkedin,
        iconCol: "text-blue-600",
        socialLink: "https://www.linkedin.com/in/thesurajsingh/",
      },
    ],
  },
  {
    name: "Yashraj Jaiswal",
    designation: "Software Developer",
    imageHref: "/yashraj_profile.jpeg",
    socialsList: [
      {
        Icon: FaLinkedin,
        iconCol: "text-blue-600",
        socialLink: "https://www.linkedin.com/in/yashraj-jaiswal-91989201s/",
      },
      {
        Icon: FaTwitter,
        iconCol: "text-blue-600",
        socialLink: "https://twitter.com/lone_wolv9",
      },
    ],
  },
  // {
  //   name: "Dhiraj Dutta",
  //   designation: "Canva Designer",
  //   imageHref: "/suraj_profile.jpg",
  //   socialsList: [
  //     {
  //       Icon: FaLinkedin,
  //       iconCol: "text-blue-600",
  //       socialLink: "",
  //     },
  //     {
  //       Icon: FaInstagram,
  //       iconCol: "text-pink-600",
  //       socialLink: "",
  //     },
  //   ],
  // },
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

const CONTACT_US = [
  {
    Icon: BsFillTelephoneFill,
    way: "Phone",
    detail: "+91 6370106392",
    iconColor: "text-blue-500",
    href: "tel:+91 6370106392",
  },
  {
    Icon: AiFillInstagram,
    way: "Instagram",
    detail: "instagram.com/adsfission",
    iconColor: "text-pink-500",
    href: "https://www.instagram.com/adsfission",
  },
  {
    Icon: MdEmail,
    way: "Email Us",
    detail: "adsfission@gmail.com",
    iconColor: "text-red-500",
    href: "mailto:adsfission@gmail.com?Subject=Lets%20Discuss%20Business",
  },
];

export { SERVICES, FEATURES, STATS, TEAM_MEMBER, TESTIMONIALS, CONTACT_US };
