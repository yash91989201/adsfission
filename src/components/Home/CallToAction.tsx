import Image from "next/image";
import Link from "next/link";
import { TbBrandWechat } from "react-icons/tb";

export default function CallToAction() {
  return (
    <section className="bg-primary-300 px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-12 md:flex-row  md:justify-between  md:space-y-0">
        <div className="flex flex-col items-center  space-y-6 text-center text-sm font-bold text-white xs:text-left md:items-start">
          <h4>CALL TO ACTION</h4>
          <h1 className="text-center text-3xl font-bold sm:max-w-sm md:text-left  md:text-4xl lg:max-w-lg lg:text-6xl">
            Let&apos; Dicuss With Us Your Estimate
          </h1>
          <Link
            href="#_"
            className="group relative inline-flex items-center justify-center space-x-4 self-center overflow-hidden rounded-sm bg-white px-6 py-3 font-medium text-primary-600 md:self-start"
          >
            <span className="absolute top-0 left-0 mb-0 flex h-full w-0 translate-y-0 transform bg-primary-600 opacity-90 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            <span className="relative text-primary-600 group-hover:text-white">
              Contact Us
            </span>
            <TbBrandWechat className="relative text-2xl group-hover:text-white" />
          </Link>
        </div>
        <div className="relative h-48 w-full  xs:h-60 xs:w-[480px]  md:h-64 ">
          <Image
            src="/discuss-cta.jpg"
            alt="let's discuss with us your estimate"
            fill
          />
        </div>
      </div>
    </section>
  );
}
