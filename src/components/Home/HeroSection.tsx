import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section
      className="px-3 py-8 sm:px-6 md:py-24 md:px-12 lg:py-40 lg:px-16"
      style={{
        background: `url("/hero_banner_bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto space-y-12 text-primary-600 sm:flex-row ">
        <div className="w-full ">
          <h3 className="text-sm font-bold text-primary-300">
            YOU MAKE, WE MARKET.
          </h3>
          <h2 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
            Best IT Solutions Provider Agency
          </h2>
          <p className="my-6 text-sm font-semibold sm:max-w-sm md:max-w-xl md:text-base lg:text-lg ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur voluptatum dicta minima reiciendis totam exercitationem
            ad impedit tempore, eligendi autem iure expedita perferendis eum
            libero?
          </p>
          <Link
            href="#_"
            className="relative inline-flex items-center justify-center px-6 py-3 space-x-4 overflow-hidden font-medium text-white rounded-sm group bg-primary-300"
          >
            <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-500 ease-in-out transform translate-y-0 bg-primary-600 opacity-90 group-hover:w-full"></span>
            <span className="relative group-hover:text-white">
              Our Services
            </span>
            <BsArrowRight className="relative group-hover:text-white" />
          </Link>
        </div>
        <div className="relative h-60 w-72 sm:w-80 md:h-80 md:w-96 ">
          <Image src="/hero_banner_img.png" alt="hero banner bg" fill />
        </div>
      </div>
    </section>
  );
}
