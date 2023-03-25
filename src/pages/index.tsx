import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// react icons
import { BsArrowRight, BsLaptop, BsDatabase, BsChatDots } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLaptopCode,
  FaTwitter,
} from "react-icons/fa";
import { TbBrandWechat } from "react-icons/tb";
import { HiFingerPrint } from "react-icons/hi";

const services = [
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

const features = [
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

const stats = [
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

const teamMember = [
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

const testimonials = [
  {
    clientName: "Philip Mendez",
    company: "Consectetur",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti necessitatibus aspernatur, accusantium voluptatum in.",
  },
  {
    clientName: "Eugene Freeman",
    company: "Tincidunt",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti necessitatibus aspernatur, accusantium voluptatum in.",
  },
  {
    clientName: "Eugene Freeman",
    company: "Tincidunt",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti necessitatibus aspernatur, accusantium voluptatum in.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ads Fission - Digital Marketing Agency</title>
        <meta
          name="description"
          content="We meet all of your marketing needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* hero section */}
      <section
        className="py-44"
        style={{
          background: `url("/hero_banner_bg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto text-primary-600">
          <div className="max-w-[50%]">
            <h3 className="text-sm font-semibold">YOU MAKE, WE MARKET.</h3>
            <h2 className="font-bold text-7xl ">
              Best IT Solutions Provider Agency
            </h2>
            <p className="my-6 text-lg font-semibold ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatum dicta minima reiciendis totam
              exercitationem ad impedit tempore, eligendi autem iure expedita
              perferendis eum libero?
            </p>
            <Link
              href="#_"
              className="relative inline-flex items-center justify-center px-6 py-3 space-x-4 overflow-hidden font-medium text-white rounded group bg-primary-300"
            >
              <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-500 ease-in-out transform translate-y-0 bg-primary-600 opacity-90 group-hover:w-full"></span>
              <span className="relative group-hover:text-white">
                Our Services
              </span>
              <BsArrowRight className="relative group-hover:text-white" />
            </Link>
          </div>
          <div className="relative h-[80vh] w-2/5">
            <Image src="/hero_banner_img.png" alt="hero banner bg" fill />
          </div>
        </div>
      </section>
      {/* services section */}
      <section className="py-40">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-primary-300">SERVICES</h3>
          <h2 className="text-6xl font-bold text-primary-600">What We Do</h2>
          <div className="flex justify-between mt-16 space-x-6 ">
            {services.map(({ heading, subText, Icon, iconCol }, index) => (
              <div
                key={index}
                className="group relative  flex max-w-[240px] cursor-default flex-col items-center space-y-6  rounded-md border bg-white py-12 text-center text-primary-600 shadow-lg transition-all duration-300 hover:bg-primary-300 hover:text-white"
              >
                <Image src="/service_dot.png" alt="dotted background" fill />
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full p-3 ${iconCol} group-hover:bg-white`}
                >
                  <Icon className="text-5xl " />
                </div>
                <div className="px-3 space-y-3">
                  <h4 className="text-xl font-bold">{heading}</h4>
                  <p className="text-sm font-light ">{subText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* team member feature */}
      <section className="py-40 bg-primary-25">
        <div className="flex max-w-6xl mx-auto ">
          <div className="flex w-[50%] flex-col space-y-3  ">
            <div className="relative border-8 border-white rounded-md h-72 w-96">
              <Image src="/core_features1.jpg" alt="core features" fill />
            </div>
            <div className="relative self-end border-8 border-white rounded-md h-72 w-96">
              <Image src="/core_features2.jpg" alt="core features" fill />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center max-w-lg mx-auto space-y-4">
            <h3 className="text-xl font-semibold text-primary-300">
              CORE FEATURES
            </h3>
            <h2 className="text-6xl font-bold text-primary-600">
              Get More Good Experience.
            </h2>
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-primary-75">
                Our knowledge of computers will help us
              </h4>
              <h6 className="text-sm font-semibold text-primary-600">
                Does any industry face a more complex audience journey and
                marketing sales process than B2B technology? Consider the number
                of people who influence a sale, the length of the
                decision-making cycle, the competing interests of the people who
                purchase, implement, manage, and use the technology. It’s a lot
                meaningful content here.
              </h6>
            </div>
            <div className="flex space-x-3">
              <Link
                href="#_"
                className="relative inline-flex items-center justify-center px-6 py-4 overflow-hidden font-medium text-white rounded group bg-primary-300"
              >
                <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-500 ease-in-out transform translate-y-0 bg-primary-600 opacity-90 group-hover:w-full"></span>
                <span className="relative group-hover:text-white">
                  Our Services
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center px-6 py-4 space-x-3 text-lg transition-all duration-500 border border-transparent rounded outline-none bg-primary-50 text-primary-700 hover:border-primary-200 hover:bg-white hover:text-primary-200"
              >
                <span>Learn More</span>
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* latest services */}
      <section className="py-40">
        <div className="flex flex-col items-center max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-xl font-semibold text-primary-300">
              CORE FEATURES
            </h3>
            <h2 className="max-w-3xl text-6xl font-bold text-center text-primary-600">
              We Offer Better Solutions For Your IT Business.
            </h2>
          </div>
          <div className="grid justify-between grid-cols-3 grid-rows-2 gap-10 mt-16 ">
            {features.map(({ Icon, iconBgWhite }, index) => (
              <div
                key={index}
                className="flex flex-col items-start max-w-xs p-8 space-y-3 rounded-md cursor-default bg-primary-25 text-primary-600 "
              >
                <div
                  className={`flex justify-center rounded-full p-3 ${iconBgWhite} bg-none `}
                >
                  <Icon className="text-5xl " />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-primary-600">
                    Desktop Computing
                  </h2>
                  <p className="text-primary-600">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantiutotam
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* call to action */}
      <section className="py-16 bg-primary-300">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex flex-col space-y-6 text-white ">
            <h4>CALL TO ACTION</h4>
            <h1 className="max-w-2xl text-6xl font-bold">
              Let&apos; Dicuss With Us Your Estimate
            </h1>
            <Link
              href="#_"
              className="relative inline-flex items-center self-start justify-center px-6 py-3 space-x-4 overflow-hidden font-medium bg-white rounded group text-primary-600"
            >
              <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-500 ease-in-out transform translate-y-0 bg-primary-600 opacity-90 group-hover:w-full"></span>
              <span className="relative text-primary-600 group-hover:text-white">
                Contact Us
              </span>
              <TbBrandWechat className="relative text-2xl group-hover:text-white" />
            </Link>
          </div>
          <div className="relative h-72 w-[480px]">
            <Image
              src="/discuss-cta.jpg"
              alt="let's discuss with us your estimate"
              fill
            />
          </div>
        </div>
      </section>
      {/* client testimonial */}
      <section className="bg-primary-25 py-36">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-primary-300">
            CLIENT TESTIMONIALS
          </h3>
          <h2 className="max-w-xl text-6xl font-bold text-center text-primary-600">
            What out clients say
          </h2>
          <div className="flex justify-center w-full mt-16 space-x-6 ">
            {testimonials.map(({ clientName, company, review }, index) => (
              <div
                key={index}
                className="flex flex-col max-w-xs border shadow-lg"
              >
                <div className="p-6 bg-white border-t-2 border-red-500">
                  <p className="font-medium text-primary-600">{review}</p>
                </div>
                <div className="flex items-center px-6 py-3 space-x-3">
                  <div className="relative w-16 h-16 overflow-hidden rounded-full">
                    <Image
                      src="/client_image.png"
                      alt="client image for testimonial"
                      fill
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="text-lg font-semibold text-primary-600">
                      {clientName}
                    </h4>
                    <p className="text-sm text-gray-400">{company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* stats section */}
      <section className="py-20 bg-primary-600">
        <div className="flex flex-row items-center justify-center max-w-6xl mx-auto space-x-4">
          {stats.map(({ bgCol, fig, desc }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-10 space-y-3 text-center text-white border-4 rounded-sm w-80 border-white/10 xl:odd:mb-12 xl:even:mt-12"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${bgCol}`}
              >
                <BsChatDots className="text-3xl " />
              </div>
              <h3 className="font-bold text-7xl">{fig}</h3>
              <p className="font-semibold ">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* our team members*/}
      <section className=" py-36">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-primary-300">SERVICES</h3>
          <h2 className="max-w-xl text-6xl font-bold text-center text-primary-600">
            Meet Out Exclusive Leadership
          </h2>
          <div className="flex justify-center w-full mt-16 space-x-6 ">
            {teamMember.map(({ name, designation }, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-64 overflow-hidden text-center duration-300 bg-white border rounded shadow-lg cursor-default group text-primary-600 "
              >
                <div className="relative w-full h-72">
                  <Image src="/team_member.jpg" alt="dotted background" fill />
                  <div className="absolute w-full transition-all duration-200 ease-in-out opacity-0 -bottom-8 group-hover:bottom-0 group-hover:opacity-100">
                    <div className="flex justify-center py-3 space-x-4">
                      <Link
                        href=""
                        className="flex items-center justify-center w-8 h-8 text-lg text-blue-600 bg-white rounded-full"
                      >
                        <FaFacebook />
                      </Link>
                      <Link
                        href=""
                        className="flex items-center justify-center w-8 h-8 text-lg text-pink-600 bg-white rounded-full"
                      >
                        <FaInstagram />
                      </Link>
                      <Link
                        href=""
                        className="flex items-center justify-center w-8 h-8 text-lg bg-white rounded-full text-sky-600"
                      >
                        <FaTwitter />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-3 py-6 space-y-3 ">
                  <h4 className="text-2xl font-bold">{name}</h4>
                  <p className="text-sm font-medium ">{designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="p-6 text-white bg-primary-700">
        <div className="flex items-center justify-between max-w-6xl p-3 pb-4 mx-auto border-b border-gray-400 space-between">
          <div className="text-4xl font-bold">Logo</div>
          <nav>
            <ul className="flex space-x-3 text-lg font-semibold text-primary-600">
              <li className="cursor-pointer text-primary-50">Home</li>
              <li className="cursor-pointer text-primary-50">Services</li>
              <li className="cursor-pointer text-primary-50">Contact</li>
              <li className="cursor-pointer text-primary-50">About Us</li>
            </ul>
          </nav>
        </div>
        <div className="mt-3 text-center">
          <p className="text-sm font-semibold text-primary-50">
            Ads Fission © 2023 All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
