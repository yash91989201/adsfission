import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function CoreFeatures() {
  return (
    <section className="px-3 py-8 bg-primary-25 sm:px-6 md:py-40 md:px-12 lg:px-16">
      <div className="flex flex-col max-w-6xl mx-auto space-y-3 md:flex-row md:space-y-0">
        <div className=" flex  w-full flex-col space-y-3  md:justify-center xl:w-[50%] xl:justify-start  ">
          <div className="relative w-full h-48 mx-auto border-8 border-white rounded-md xxs:h-72 xxs:w-96 md:mx-0">
            <Image src="/core_features1.jpg" alt="core features" fill />
          </div>
          <div className="relative self-end hidden border-8 border-white rounded-md h-72 w-96 xl:block">
            <Image src="/core_features2.jpg" alt="core features" fill />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center max-w-lg mx-auto space-y-6">
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
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white rounded group bg-primary-300"
            >
              <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-500 ease-in-out transform translate-y-0 bg-primary-600 opacity-90 group-hover:w-full"></span>
              <span className="relative group-hover:text-white">
                Our Services
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center px-6 py-3 space-x-3 transition-all duration-500 bg-white border border-transparent rounded outline-none border-primary-300 text-primary-300"
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
