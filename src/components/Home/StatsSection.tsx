import { BsChatDots } from "react-icons/bs";
import { STATS } from "./data";

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary-600">
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 ">
        {STATS.map(({ bgCol, fig, desc }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-10 space-y-3 text-center text-white border-4 rounded-sm w-80 border-white/10 xl:odd:mb-12 xl:even:mt-12"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full ${bgCol}`}
            >
              <BsChatDots className="text-3xl " />
            </div>
            <h3 className="font-bold text-7xl">{fig}</h3>
            <p className="font-semibold ">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
