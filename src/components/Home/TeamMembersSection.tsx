import Image from "next/image";
import { Bounce } from "react-awesome-reveal";
import { TEAM_MEMBER } from "./data";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TeamMembersSection() {
  return (
    <section
      id="about-us-section"
      className="bg-primary-25 px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0 xl:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex flex-col items-center space-y-3 lg:space-x-6">
          <h3 className="text-center text-sm font-bold text-primary-300 md:text-base">
            TEAM MEMBERS
          </h3>
          <h2 className="text-center text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl">
            Meet Out Exclusive Leadership
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3">
          {TEAM_MEMBER.map(({ name, designation }, index) => (
            <Bounce key={index} triggerOnce>
              <div className="group relative flex w-56 cursor-pointer flex-col items-center overflow-hidden rounded border bg-white text-center text-primary-600 shadow-lg duration-300 md:w-64 ">
                <div className="relative h-56 w-full md:h-64">
                  <Image src="/team_member.jpg" alt="dotted background" fill />
                  <div className="absolute bottom-0 w-full transition-all duration-200 ease-in-out group-hover:bottom-0 group-hover:opacity-100 md:-bottom-8 md:opacity-0">
                    <div className="flex justify-center space-x-4 py-3">
                      <Link
                        href=""
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-600"
                      >
                        <FaFacebook />
                      </Link>
                      <Link
                        href=""
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-pink-600"
                      >
                        <FaInstagram />
                      </Link>
                      <Link
                        href=""
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-sky-600"
                      >
                        <FaTwitter />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 px-3 py-6 ">
                  <h4 className="text-2xl font-bold">{name}</h4>
                  <p className="text-sm font-medium ">{designation}</p>
                </div>
              </div>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  );
}
