import { BsChatDots } from "react-icons/bs";
import { STATS } from "./data";

export default function StatsSection() {
  return (
    <section className=" bg-primary-600 px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28">
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 ">
        {STATS.map(({ bgCol, fig, desc }, index) => (
          <div
            key={index}
            className="flex w-80 flex-col items-center justify-center space-y-3 rounded-sm border-4 border-white/10 py-10 text-center text-white xl:odd:mb-12 xl:even:mt-12"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full ${bgCol}`}
            >
              <BsChatDots className="text-3xl " />
            </div>
            <h3 className="text-7xl font-bold">{fig}</h3>
            <p className="font-semibold ">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
