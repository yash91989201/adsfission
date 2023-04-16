import Image from "next/image";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import { Slide, Fade } from "react-awesome-reveal";

export default function HeroSection() {
  return (
    <section className="mt-16 bg-hero-pattern bg-center bg-no-repeat px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-8 text-primary-600 sm:flex-row md:space-y-0">
        <div className="flex w-full flex-col items-center space-y-3 xs:items-start">
          <Slide triggerOnce>
            <h2 className="text-center text-3xl font-bold xs:text-left sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
              Best Social Media Management Agency
            </h2>
            <p className="my-3 text-center text-xs font-medium leading-5 xs:text-left sm:max-w-xs sm:text-sm sm:leading-6 md:max-w-xl md:text-base">
              We handle your social media presence so that you can solely focus
              on growing your business. Our team of experts creates and curates
              engaging content, interacts with your followers, and analyses the
              performance of your social media accounts to ensure maximum ROI.
            </p>
            <Link
              href="#services-section"
              className="flex w-fit items-center justify-center space-x-3 rounded-sm border border-primary-300 bg-primary-300 px-6 py-3 font-medium text-white transition-colors duration-500 hover:bg-white hover:text-primary-300"
            >
              <span className="relative group-hover:text-white">
                Our Services
              </span>
              <BsArrowDown className="relative group-hover:text-white" />
            </Link>
          </Slide>
        </div>
        <Fade triggerOnce direction="right">
          <div className="relative aspect-square w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96">
            <Image src="/hero_banner_img.png" alt="hero banner bg" fill />
          </div>
        </Fade>
      </div>
    </section>
  );
}

// responsiveness check
// border-purple-500  sm:border-red-500  md:border-green-500 lg:border-blue-500 xl:border-yellow-500
