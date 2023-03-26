export default function Footer() {
  return (
    <footer className="p-6 text-white bg-primary-700">
      <div className="flex flex-col items-center justify-between max-w-6xl p-3 pb-4 mx-auto space-y-6 border-b border-gray-400 space-between md:flex-row md:space-y-0">
        <div className="text-4xl font-bold">Logo</div>
        <nav>
          <ul className="flex flex-col space-y-3 text-lg font-semibold text-center text-primary-600 sm:flex-row sm:space-x-3 sm:space-y-0 sm:text-left">
            <li className="cursor-pointer text-primary-50">Home</li>
            <li className="cursor-pointer text-primary-50">Services</li>
            <li className="cursor-pointer text-primary-50">Contact</li>
            <li className="cursor-pointer text-primary-50">About Us</li>
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
