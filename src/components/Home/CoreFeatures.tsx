import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function CoreFeatures() {
  return (
    <section className="bg-primary-25 p-6 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16  lg:py-24 xl:px-0 xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col space-y-3 md:flex-row md:space-y-0">
        <div className=" flex  w-full flex-col space-y-3  md:justify-center xl:w-[50%] xl:justify-start  ">
          <div className="relative mx-auto h-48 w-full rounded-md border-8 border-white xxs:h-72 xxs:w-96 md:mx-0">
            <Image src="/core_features1.jpg" alt="core features" fill />
          </div>
          <div className="relative hidden h-72 w-96 self-end rounded-md border-8 border-white xl:block">
            <Image src="/core_features2.jpg" alt="core features" fill />
          </div>
        </div>
        <div className="mx-auto flex max-w-lg flex-col items-start justify-center space-y-6">
          <h3 className="text-sm font-bold text-primary-300">CORE FEATURES</h3>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
              Get More Good Experience.
            </h2>
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-primary-75">
                Our knowledge of computers will help us.
              </h4>
            </div>
          </div>
          <h6 className="text-sm font-semibold text-primary-600">
            Does any industry face a more complex audience journey and marketing
            sales process than B2B technology? Consider the number of people who
            influence a sale, the length of the decision-making cycle, the
            competing interests of the people who purchase, implement, manage,
            and use the technology. It’s a lot meaningful content here.
          </h6>
          <div className="flex space-x-3">
            <Link
              href="#_"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded bg-primary-300 px-6 py-3 font-medium text-white"
            >
              <span className="absolute top-0 left-0 mb-0 flex h-full w-0 translate-y-0 transform bg-primary-600 opacity-90 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              <span className="relative group-hover:text-white">
                Our Services
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center space-x-3 rounded border border-transparent border-primary-300 bg-white px-6 py-3 text-primary-300 outline-none transition-all duration-500"
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
