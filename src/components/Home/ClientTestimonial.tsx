import Image from "next/image";
import { TESTIMONIALS } from "./data";

export default function ClientTestimonial() {
  return (
    <section className="bg-primary-25 px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center space-x-6">
        <div className="flex flex-col items-center space-y-3 lg:space-x-6">
          <h3 className="text-center text-sm font-bold text-primary-300 xs:text-left md:text-base">
            CLIENT TESTIMONIALS
          </h3>
          <h2 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl">
            What out clients say
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 ">
          {TESTIMONIALS.map(
            ({ clientName, company, review, topBorderCol }, index) => (
              <div
                key={index}
                className="flex max-w-xs flex-col border shadow-lg"
              >
                <div className={`border-t-4  bg-white p-6 ${topBorderCol}`}>
                  <p className="font-medium text-primary-600">{review}</p>
                </div>
                <div className="flex items-center space-x-3 px-6 py-3">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
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
                    <p className="text-gray-400 ">{company}</p>
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
