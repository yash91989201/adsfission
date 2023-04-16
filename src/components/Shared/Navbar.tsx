import { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";

const useToggle = (initialState: boolean) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(!state);
  const on = () => setState(true);
  const off = () => setState(false);
  return [state, on, off] as const;
};

export default function Navbar() {
  const [menu, menuOn, menuOff] = useToggle(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-[99] w-full bg-primary-600 px-6 py-4 shadow-lg xl:px-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="relative h-8 w-8">
                <Image src="/logo.png" alt="company logo" fill />
              </div>
              <h1 className="font-semibold text-white md:text-2xl">
                Ads Fission
              </h1>
            </div>
          </Link>
          <div className="hidden items-center justify-between space-x-3 md:flex">
            <nav>
              <ul className="flex space-x-3 font-semibold text-primary-25">
                <Link
                  href="#services-section"
                  className="cursor-pointer rounded-sm px-3 py-2 transition-colors duration-300 hover:bg-primary-25 hover:text-primary-600 "
                >
                  Services
                </Link>
                <Link
                  href="#about-us-section"
                  className="cursor-pointer rounded-sm px-3 py-2 transition-colors duration-300 hover:bg-primary-25 hover:text-primary-600 "
                >
                  About Us
                </Link>
                <Link
                  href="#contact-section"
                  className="cursor-pointer rounded-sm px-3 py-2 transition-colors duration-300 hover:bg-primary-25 hover:text-primary-600 "
                >
                  Contact Us
                </Link>
              </ul>
            </nav>
            <Link
              href="https://calendly.com/adsfissionmarketing/7-day-trial-for-adsfission"
              target="_blank"
              className="rounded-sm border border-primary-300 bg-primary-300 px-4 py-2 text-white transition-all duration-500 hover:bg-white hover:text-primary-300"
            >
              <span>Get 7-day Trial</span>
            </Link>
          </div>
          <button
            className="text-2xl text-white md:hidden"
            onClick={() => menuOn()}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </header>
      <aside
        className={`fixed top-0 z-[999] h-screen w-full origin-right  bg-primary-600 px-6 py-4 transition-all delay-100 duration-300 ease-in-out md:hidden ${
          menu ? "right-0" : "-right-[125vw]"
        }`}
      >
        <div className="mx-auto flex items-center justify-between ">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="relative h-8 w-8">
                <Image src="/logo.png" alt="company logo" fill />
              </div>
              <h1 className="font-semibold text-white md:text-2xl">
                Ads Fission
              </h1>
            </div>
          </Link>
          <div className="flex flex-row-reverse items-center">
            <button
              className="border p-2 text-xl text-white "
              onClick={() => menuOff()}
            >
              <RxCross2 />
            </button>
          </div>
        </div>

        <nav className="mt-12">
          <ul className="flex flex-col space-y-3 font-semibold text-primary-50">
            <Link
              href="#services-section"
              className="cursor-pointer border-b px-3 py-2 transition-colors duration-300 hover:bg-primary-50 hover:text-primary-700"
              onClick={() => menuOff()}
            >
              Services
            </Link>
            <Link
              href="#about-us-section"
              className="cursor-pointer border-b px-3 py-2 transition-colors duration-300 hover:bg-primary-50 hover:text-primary-700"
              onClick={() => menuOff()}
            >
              About Us
            </Link>
            <Link
              href="#contact-section"
              className="cursor-pointer border-b px-3 py-2 transition-colors duration-300 hover:bg-primary-50 hover:text-primary-700"
              onClick={() => menuOff()}
            >
              Contact Us
            </Link>
          </ul>
        </nav>
        <Link
          href="https://calendly.com/adsfissionmarketing/7-day-trial-for-adsfission"
          target="_blank"
          className="mt-6 flex items-center justify-center space-x-3 rounded-sm bg-white px-6 py-3 text-primary-300"
          onClick={() => menuOff()}
        >
          <span>Get 7-day Trial</span>
          <BsArrowRight />
        </Link>
      </aside>
    </>
  );
}
