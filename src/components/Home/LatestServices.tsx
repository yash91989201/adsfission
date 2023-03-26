import { FEATURES } from "./data";

export default function LatestServices() {
  return (
    <section className="py-40">
      <div className="flex flex-col items-center max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-xl font-semibold text-primary-300">
            CORE FEATURES
          </h3>
          <h2 className="text-3xl font-bold text-center sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
            We Offer Better Solutions For Your IT Business.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 xs:grid-cols-2 md:grid-cols-3 ">
          {FEATURES.map(({ Icon, iconBgWhite }, index) => (
            <div
              key={index}
              className="flex flex-col items-start max-w-xs p-8 space-y-3 rounded-md cursor-default bg-primary-25 text-primary-600 "
            >
              <div
                className={`flex justify-center rounded-full p-3 ${iconBgWhite} bg-none `}
              >
                <Icon className="text-5xl " />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-primary-600">
                  Desktop Computing
                </h2>
                <p className="text-primary-600">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantiutotam
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
