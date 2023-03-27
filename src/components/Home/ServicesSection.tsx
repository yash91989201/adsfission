import Image from "next/image";
// CONSTANT DATA
import { SERVICES } from "./data";

export default function ServicesSection() {
  return (
    <section className="p-6 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-24  xl:px-0 xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center ">
        <h3 className="text-sm font-bold text-primary-300">SERVICES</h3>
        <h2 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
          What We Do
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map(({ heading, subText, Icon, iconCol }, index) => (
            <div
              key={index}
              className="group relative flex max-w-[240px] cursor-default flex-col items-center space-y-3  rounded-md border bg-white py-8 text-center text-primary-600 shadow-lg transition-all duration-300 hover:bg-primary-300 hover:text-white"
            >
              <div className="absolute h-48 w-4/5">
                <Image src="/service_dot.png" alt="dotted background" fill />
              </div>
              <div
                className={`flex h-16 w-16  items-center justify-center rounded-full p-3 md:h-20 md:w-20 ${iconCol} group-hover:bg-white`}
              >
                <Icon className="text-4xl " />
              </div>
              <div className="space-y-3 px-3">
                <h4 className="text-sm font-bold md:text-xl">{heading}</h4>
                <p className="text-sm font-light ">{subText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
