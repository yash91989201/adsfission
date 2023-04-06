import { Zoom } from "react-awesome-reveal";
import { FEATURES } from "./data";

export default function LatestServices() {
  return (
    <section className="px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-sm font-bold text-primary-300 md:text-base">
            CORE FEATURES
          </h3>
          <h2 className="text-center text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl lg:max-w-3xl lg:text-6xl">
            We Offer Better Solutions For Your IT Business.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 ">
          {FEATURES.map(({ Icon, iconBgWhite }, index) => (
            <Zoom key={index} triggerOnce>
              <div className="flex max-w-xs cursor-default flex-col items-start space-y-3 rounded-md bg-primary-25 p-8 text-primary-600 ">
                <div
                  className={`flex justify-center rounded-full p-3 ${iconBgWhite} bg-none `}
                >
                  <Icon className="text-3xl md:text-5xl " />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-primary-600">
                    Desktop Computing
                  </h2>
                  <p className="text-xs font-light text-primary-600 md:text-base">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantiutotam
                  </p>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
}
