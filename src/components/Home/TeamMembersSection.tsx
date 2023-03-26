import Image from "next/image";
import { TEAM_MEMBER } from "./data";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TeamMembersSection() {
  return (
    <section className="px-3 py-8  sm:px-6 md:py-24 md:px-12 lg:py-40 lg:px-16">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <h3 className="text-sm font-bold text-primary-300">SERVICES</h3>
        <h2 className="text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl lg:text-6xl">
          Meet Out Exclusive Leadership
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-6 xs:grid-cols-2 md:grid-cols-3">
          {TEAM_MEMBER.map(({ name, designation }, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-56 overflow-hidden text-center duration-300 bg-white border rounded shadow-lg cursor-default group text-primary-600 md:w-64 "
            >
              <div className="relative w-full h-56 md:h-72">
                <Image src="/team_member.jpg" alt="dotted background" fill />
                <div className="absolute bottom-0 w-full transition-all duration-200 ease-in-out group-hover:bottom-0 group-hover:opacity-100 md:-bottom-8 md:opacity-0">
                  <div className="flex justify-center py-3 space-x-4">
                    <Link
                      href=""
                      className="flex items-center justify-center w-8 h-8 text-lg text-blue-600 bg-white rounded-full"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      href=""
                      className="flex items-center justify-center w-8 h-8 text-lg text-pink-600 bg-white rounded-full"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href=""
                      className="flex items-center justify-center w-8 h-8 text-lg bg-white rounded-full text-sky-600"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-3 py-6 space-y-3 ">
                <h4 className="text-2xl font-bold">{name}</h4>
                <p className="text-sm font-medium ">{designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
