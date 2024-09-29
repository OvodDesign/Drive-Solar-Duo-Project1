import { LogoIcon } from "./icons/icons";

export default function Footer() {
  return (
    <footer className="bg-white p-4 m-20 rounded-3xl">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <LogoIcon />
            <h1 className="text-xl font-bold">Drive Solar</h1>
          </div>
          <p className="text-gray-500 text-sm">
            Ready to elevate to fully use sun? <br />
            Contact us today to discuss your project and <br />
            discover how we can bring our contribution together.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            <span>❤️</span> Made with love to society
          </p>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Home
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            How it Works
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Benefits
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            here
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            here
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            here
          </a>
        </div>
      </div>
    </footer>
  );
}
