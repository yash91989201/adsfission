import Image from "next/image";
// CONSTANT DATA
import { SERVICES } from "./data";
import { Zoom } from "react-awesome-reveal";

export default function ServicesSection() {
  return (
    <section
      id="services-section"
      className="px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex flex-col items-center space-y-3 lg:space-x-6">
          <h3 className="text-sm font-semibold text-primary-300 md:text-base">
            SERVICES
          </h3>
          <h2 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl">
            Here&apos;s what we do
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-fit-services gap-6">
          {SERVICES.map(({ heading, subText, iconCol, imagePath }, index) => (
            <Zoom key={index} triggerOnce>
              <div className="group flex h-full flex-col items-center space-y-3 rounded-md border bg-white p-3 py-12 text-center text-primary-600 shadow-lg transition-all duration-300">
                <div className="md:w-54 relative aspect-service-ratio w-40 origin-center transition-all duration-300 group-hover:scale-110 sm:w-48 lg:w-64 xl:w-72">
                  <Image src={imagePath} alt="service illustration" fill />
                </div>
                <div className="space-y-3 px-3">
                  <h4 className="font-bold md:text-xl">{heading}</h4>
                  <p className="font-light ">{subText}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
}
