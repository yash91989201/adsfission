import { Zoom } from "react-awesome-reveal";
import { CONTACT_US } from "./data";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section
      id="contact-section"
      className="bg-primary-25 bg-contact-pattern bg-right bg-no-repeat px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex flex-col items-center space-y-3 text-center lg:space-x-6">
          <h3 className="text-sm font-semibold text-primary-300 md:text-base">
            CONTACT
          </h3>
          <h2 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl">
            Ways to contact us.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3">
          {CONTACT_US.map(({ Icon, way, detail, iconColor, href }, index) => (
            <Zoom key={index} triggerOnce>
              <div className="group flex flex-col items-center space-y-6 rounded-md border bg-white bg-dot-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-center text-primary-600 shadow-lg transition-all duration-300 hover:bg-primary-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-25 text-2xl transition-all duration-200 group-hover:scale-110">
                  <Icon className={iconColor} />
                </div>
                <div className="space-y-3 px-3 group-hover:text-white">
                  <h4 className="font-bold md:text-xl">{way}</h4>
                  <Link href={href}>
                    <p className="font-light text-blue-600 underline group-hover:text-white">
                      {detail}
                    </p>
                  </Link>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
}
