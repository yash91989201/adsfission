import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Slide, Fade } from "react-awesome-reveal";

export default function HeroSection() {
  return (
    <section
      className="px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28"
      style={{
        background: `url("/hero_banner_bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-8  text-primary-600 sm:flex-row  md:space-y-0">
        <div className="flex w-full flex-col items-center space-y-3 xs:items-start">
          <Slide triggerOnce>
            <h3 className="text-center text-sm font-bold text-primary-300 xs:text-left ">
              YOU MAKE, WE MARKET.
            </h3>
            <h2 className="text-center text-3xl font-bold xs:text-left sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
              Best IT Solutions Provider Agency
            </h2>
            <p className="my-3 text-center text-xs font-medium  leading-5 xs:text-left sm:max-w-xs sm:text-sm sm:leading-6 md:max-w-xl md:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatum dicta minima reiciendis totam
              exercitationem ad impedit tempore, eligendi autem iure expedita
              perferendis eum libero?
            </p>
            <Link
              href="#_"
              className="group relative flex w-fit items-center justify-center   space-x-4   overflow-hidden rounded-sm bg-primary-300 px-6 py-3  font-medium text-white"
            >
              <span className="absolute top-0 left-0 mb-0 flex h-full w-0 translate-y-0 transform bg-primary-600 opacity-90 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              <span className="relative group-hover:text-white">
                Our Services
              </span>
              <BsArrowRight className="relative group-hover:text-white" />
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
