import { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 160) {
        setScroll(true);
      } else setScroll(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <header
        className={`w-full py-4 px-6 transition-all
      duration-500 md:px-0
      ${scroll ? "fixed top-0 left-0 z-50 " : "relative"} bg-primary-700`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto ">
          <div className="flex-1"></div>
          <div className="items-center justify-between hidden space-x-8 md:flex">
            <nav>
              <ul className="flex space-x-3 font-semibold text-primary-50">
                <li className="px-3 py-2 transition-colors duration-300 rounded-sm cursor-pointer hover:bg-primary-50 hover:text-primary-700">
                  Home
                </li>
                <li className="px-3 py-2 transition-colors duration-300 rounded-sm cursor-pointer hover:bg-primary-50 hover:text-primary-700">
                  Services
                </li>
                <li className="px-3 py-2 transition-colors duration-300 rounded-sm cursor-pointer hover:bg-primary-50 hover:text-primary-700">
                  Contact
                </li>
                <li className="px-3 py-2 transition-colors duration-300 rounded-sm cursor-pointer hover:bg-primary-50 hover:text-primary-700">
                  About Us
                </li>
              </ul>
            </nav>
            <Link
              href="#"
              className="flex items-center justify-center px-6 py-3 space-x-3 text-white transition-all duration-500 border border-transparent rounded-sm outline-none bg-primary-300 hover:border-primary-200 hover:bg-white hover:text-primary-200"
            >
              <span>Free Consulting</span>
              <BsArrowRight />
            </Link>
          </div>
          <button
            className="text-2xl text-white md:hidden"
            onClick={() => setMenu(true)}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </header>
      <aside
        className={`absolute top-0 z-50 h-screen w-64 origin-right bg-primary-600 py-3 px-6 transition-all delay-100 duration-300 ease-in-out md:hidden ${
          menu ? "right-0" : "-right-96"
        }`}
      >
        <div className="flex flex-row-reverse items-center mb-6">
          <button
            className="p-2 text-xl text-white border"
            onClick={() => setMenu(false)}
          >
            <RxCross2 />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col space-y-3 font-semibold text-primary-50">
            <li className="px-3 py-2 transition-colors duration-300 border-b cursor-pointer hover:bg-primary-50 hover:text-primary-700">
              Home
            </li>
            <li className="px-3 py-2 transition-colors duration-300 border-b cursor-pointer hover:bg-primary-50 hover:text-primary-700">
              Services
            </li>
            <li className="px-3 py-2 transition-colors duration-300 border-b cursor-pointer hover:bg-primary-50 hover:text-primary-700">
              Contact
            </li>
            <li className="px-3 py-2 transition-colors duration-300 border-b cursor-pointer hover:bg-primary-50 hover:text-primary-700">
              About Us
            </li>
          </ul>
        </nav>
        <Link
          href="#"
          className="flex items-center justify-center px-6 py-3 mt-6 space-x-3 bg-white rounded-sm text-primary-300"
        >
          <span>Free Consulting</span>
          <BsArrowRight />
        </Link>
      </aside>
    </>
  );
}
