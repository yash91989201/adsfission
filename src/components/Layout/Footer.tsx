import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-600 p-3 py-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-6 xs:flex-row xs:space-y-0">
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
        <p className="text-sm font-medium text-white ">
          Ads Fission © 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
