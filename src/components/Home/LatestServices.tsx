import { Zoom } from "react-awesome-reveal";
import { FEATURES } from "./data";

export default function LatestServices() {
  return (
    <section className="px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex flex-col items-center space-y-3 lg:space-x-6">
          <h3 className="text-sm font-bold text-primary-300 md:text-base">
            CORE FEATURES
          </h3>
          <h2 className="text-center text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl lg:max-w-3xl">
            We Offer Better Solutions For Your IT Business.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-fit-features gap-6 ">
          {FEATURES.map(({ Icon, iconBgWhite }, index) => (
            <Zoom key={index} triggerOnce>
              <div className="flex cursor-default flex-col items-start space-y-3 rounded-md bg-primary-25 p-6 text-primary-600 ">
                <div
                  className={`flex justify-center rounded-full py-2 ${iconBgWhite} `}
                >
                  <Icon className="text-3xl md:text-5xl " />
                </div>
                <div className="space-y-3 ">
                  <h2 className="text-lg font-bold ">Desktop Computing</h2>
                  <p className="">
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
