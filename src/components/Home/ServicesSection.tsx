import Image from "next/image";
// CONSTANT DATA
import { SERVICES } from "./data";

export default function ServicesSection() {
  return (
    <section className="py-40">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <h3 className="text-sm font-bold text-primary-300">SERVICES</h3>
        <h2 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
          What We Do
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-12 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map(({ heading, subText, Icon, iconCol }, index) => (
            <div
              key={index}
              className="group relative  flex max-w-[240px] cursor-default flex-col items-center space-y-6  rounded-md border bg-white py-12 text-center text-primary-600 shadow-lg transition-all duration-300 hover:bg-primary-300 hover:text-white"
            >
              <div className="absolute w-4/5 h-48">
                <Image src="/service_dot.png" alt="dotted background" fill />
              </div>
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full p-3 ${iconCol} group-hover:bg-white`}
              >
                <Icon className="text-5xl " />
              </div>
              <div className="px-3 space-y-3">
                <h4 className="text-xl font-bold">{heading}</h4>
                <p className="text-sm font-light ">{subText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
