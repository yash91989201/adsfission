import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-6 text-white bg-primary-600">
      <div className="flex flex-col items-center justify-between max-w-6xl p-3 pb-4 mx-auto space-y-6 border-b border-gray-400 space-between md:flex-row md:space-y-0">
        <Link href="/">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="company logo" fill />
            </div>
            <h1 className="font-semibold text-white md:text-xl">Ads Fission</h1>
          </div>
        </Link>
        <nav>
          <ul className="flex flex-col space-y-3 font-semibold text-center text-white sm:flex-row sm:space-x-2 sm:space-y-0 sm:text-left">
            <Link
              href="#services-section"
              className="px-3 py-2 transition-colors duration-300 rounded-sm cursor-pointer "
            >
              Services
            </Link>
            <li className="px-3 py-2 transition-colors duration-300 rounded-sm cursor-pointer ">
              Contact
            </li>
            <Link
              href="#about-us-section"
              className="px-3 py-2 transition-colors duration-300 rounded-sm cursor-pointer "
            >
              About Us
            </Link>
          </ul>
        </nav>
      </div>
      <div className="mt-3 text-center">
        <p className="text-sm font-semibold text-primary-50">
          Ads Fission © 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
