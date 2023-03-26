import Image from "next/image";
import { TESTIMONIALS } from "./data";

export default function ClientTestimonial() {
  return (
    <section className="bg-primary-25 py-36">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-primary-300">
          CLIENT TESTIMONIALS
        </h3>
        <h2 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
          What out clients say
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-12 xs:grid-cols-2 md:grid-cols-3 ">
          {TESTIMONIALS.map(
            ({ clientName, company, review, topBorderCol }, index) => (
              <div
                key={index}
                className="flex flex-col max-w-xs border shadow-lg"
              >
                <div className={`border-t-4  bg-white p-6 ${topBorderCol}`}>
                  <p className="font-medium text-primary-600">{review}</p>
                </div>
                <div className="flex items-center px-6 py-3 space-x-3">
                  <div className="relative w-16 h-16 overflow-hidden rounded-full">
                    <Image
                      src="/client_image.png"
                      alt="client image for testimonial"
                      fill
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="text-lg font-semibold text-primary-600">
                      {clientName}
                    </h4>
                    <p className="text-sm text-gray-400">{company}</p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
