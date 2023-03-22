import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// react icons
import { BsArrowRight, BsLaptop, BsDatabase } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
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
      <section></section>
      {/* blog section */}
      <section></section>
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
