import Image from "next/image";
import Link from "next/link";
import { TbBrandWechat } from "react-icons/tb";

export default function CallToAction() {
  return (
    <section className="px-4 py-8 bg-primary-300 sm:px-6 md:py-24 md:px-12 lg:py-40 lg:px-16">
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto space-y-6 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-6 text-white ">
          <h4>CALL TO ACTION</h4>
          <h1 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
            Let&apos; Dicuss With Us Your Estimate
          </h1>
          <Link
            href="#_"
            className="relative inline-flex items-center self-start justify-center px-6 py-3 space-x-4 overflow-hidden font-medium bg-white rounded-sm group text-primary-600"
          >
            <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-500 ease-in-out transform translate-y-0 bg-primary-600 opacity-90 group-hover:w-full"></span>
            <span className="relative text-primary-600 group-hover:text-white">
              Contact Us
            </span>
            <TbBrandWechat className="relative text-2xl group-hover:text-white" />
          </Link>
        </div>
        <div className="relative h-56  w-full xs:w-[480px]  md:h-72">
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
