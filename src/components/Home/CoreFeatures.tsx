import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";

export default function CoreFeatures() {
  return (
    <section className="bg-primary-25 px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col space-y-8 md:flex-row md:space-y-0">
        <div className=" flex  w-full flex-col space-y-3  md:justify-center xl:w-[50%] xl:justify-start  ">
          <div className="relative mx-auto h-48 w-full rounded-md border-8 border-white xxs:h-72 xxs:w-96 md:mx-0">
            <Image src="/core_features1.jpg" alt="core features" fill />
          </div>
          <div className="relative hidden h-72 w-96 self-end rounded-md border-8 border-white xl:block">
            <Image src="/core_features2.jpg" alt="core features" fill />
          </div>
        </div>
        <div className="mx-auto flex max-w-lg flex-col items-start justify-center space-y-3 ">
          <h3 className="w-full text-center text-sm font-bold text-primary-300 xs:text-left md:text-right md:text-base">
            CORE FEATURES
          </h3>
          <div className="space-y-3">
            <h2 className="text-center text-3xl  font-bold  sm:max-w-sm sm:text-5xl md:max-w-xl md:text-right lg:text-6xl">
              Get More Good Experience.
            </h2>
            <div className="">
              <h4 className="text-center text-base font-semibold text-primary-75 xs:text-left sm:text-lg md:text-right md:text-xl lg:text-right lg:text-2xl">
                Our knowledge of computers will help us.
              </h4>
            </div>
          </div>
          <h6 className="text-center text-sm font-semibold leading-6  text-primary-600 xs:text-left md:text-right ">
            Does any industry face a more complex audience journey and marketing
            sales process than B2B technology? Consider the number of people who
            influence a sale, the length of the decision-making cycle, the
            competing interests of the people who purchase, implement, manage,
            and use the technology. It’s a lot meaningful content here.
          </h6>
          <div className="mt-3 flex w-full flex-col items-center space-y-3 xxs:flex-row xxs:space-x-3 xxs:space-y-0 md:justify-end">
            <Link
              href="#_"
              className="group relative flex w-full items-center justify-center overflow-hidden rounded bg-primary-300 px-6 py-3 font-medium text-white xxs:w-auto"
            >
              <span className="absolute top-0 left-0 mb-0 flex h-full w-0 translate-y-0 transform bg-primary-600 opacity-90 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="relative group-hover:text-white">
                Our Services
              </span>
            </Link>
            <Link
              href="#"
              className="flex w-full items-center justify-center space-x-3 rounded border border-transparent  bg-white px-6 py-3 text-primary-300 outline-none transition-all duration-300 hover:border-primary-300 xxs:w-auto"
            >
              <span>Learn More</span>
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
