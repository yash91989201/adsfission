import Image from "next/image";
import Link from "next/link";
import { TbBrandWechat } from "react-icons/tb";

export default function CallToAction() {
  return (
    <section className="bg-primary-25 px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-12 md:flex-row md:justify-between md:space-y-0">
        <div className="flex flex-col items-center space-y-6 text-center text-sm font-bold text-primary-600 xs:text-left md:items-start">
          <h4 className="text-primary-300">LET&apos;S MEET</h4>
          <h1 className="text-center text-3xl font-bold sm:max-w-sm md:text-left md:text-5xl lg:max-w-lg">
            Let&apos; Dicuss With Us Your Estimate
          </h1>
          <Link
            href="#"
            className="flex items-center justify-center space-x-4 self-center overflow-hidden rounded-sm border border-primary-300 bg-primary-300 px-6 py-3 text-lg font-medium text-white transition-all duration-500 hover:bg-white hover:text-primary-300 md:self-start"
          >
            <span>Contact Us</span>
            <TbBrandWechat className="relative text-2xl" />
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
