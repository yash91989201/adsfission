import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-primary-600 p-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-6 border-b border-gray-400 py-3 pb-4 xxs:flex-row xxs:space-y-0">
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
        <div className="flex space-x-6 text-xl">
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
        </div>
      </div>
      <div className="mt-6 text-center text-white sm:mt-3">
        <p className="text-sm font-medium ">
          Ads Fission © 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
