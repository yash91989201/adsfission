import { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
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
    <header
      className={` w-full py-4 transition-all duration-500 ${
        scroll ? "fixed top-0 left-0 z-50 " : "relative"
      } bg-primary-700`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        <div className="flex-1"></div>
        <div className="flex items-center justify-between space-x-8">
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
            className="flex items-center justify-center px-6 py-3 space-x-3 text-lg text-white transition-all duration-500 border border-transparent rounded-sm outline-none bg-primary-300 hover:border-primary-200 hover:bg-white hover:text-primary-200"
          >
            <span>Free Consulting</span>
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </header>
  );
}
