import Image from "next/image";
import { Bounce } from "react-awesome-reveal";
import { TEAM_MEMBER } from "./data";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TeamMembersSection() {
  return (
    <section
      id="about-us-section"
      className="bg-white px-8 py-14 md:px-12 md:py-16 lg:px-16 lg:py-24 xl:px-0"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex flex-col items-center space-y-3 lg:space-x-6">
          <h3 className="text-center text-sm font-semibold text-primary-300 md:text-base">
            TEAM MEMBERS
          </h3>
          <h2 className="text-center text-3xl font-bold sm:max-w-sm md:max-w-xl md:text-5xl">
            Meet Out Exclusive Leadership
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 xs:grid-cols-2">
          {TEAM_MEMBER.map(
            ({ name, designation, imageHref, socialsList }, index) => (
              <Bounce key={index} triggerOnce>
                <div className="group relative flex w-56 cursor-pointer flex-col items-center overflow-hidden rounded border bg-white text-center text-primary-600 shadow-lg duration-300 hover:shadow-xl md:w-64 ">
                  <div className="relative h-56 w-full md:h-64">
                    <Image src={imageHref} alt={`${name} team member`} fill />
                    <div className="absolute bottom-0 w-full transition-all duration-200 ease-in-out group-hover:bottom-0 group-hover:opacity-100 md:-bottom-8 md:opacity-0">
                      <div className="flex justify-center space-x-4 py-3">
                        {socialsList.map(
                          ({ Icon, iconCol, socialLink }, index) => (
                            <Link
                              key={index}
                              href={socialLink}
                              className={`flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg ${iconCol}`}
                            >
                              <Icon />
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 px-3 py-6 ">
                    <h4 className="text-2xl font-bold md:text-3xl">{name}</h4>
                    <p className="text-base font-medium ">{designation}</p>
                  </div>
                </div>
              </Bounce>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
