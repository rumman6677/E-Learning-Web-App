import { useState } from 'react';
import { Link } from 'react-router-dom';
import Penough from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDesktopServicesDropdownOpen, setIsDesktopServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleDesktopServicesDropdown = () => {
    setIsDesktopServicesDropdownOpen(!isDesktopServicesDropdownOpen);
  };


  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={Penough}
              className="h-12"
              alt="Penough Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li>
            <Link
              to="/"
              className="block duration-300 py-4 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
              aria-current="page"
            >
              Home
            </Link>
          </li>

          {/* Services with Clickable Dropdown on Desktop */}
          <li className="relative">
            <button
              onClick={toggleDesktopServicesDropdown}
              className="flex duration-300 items-center justify-between w-full py-4 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
            >
              Courses
            </button>
            {isDesktopServicesDropdownOpen && (
              <ul className="absolute left-0 bg-gray-700 p-2 mt-2 space-y-2 rounded shadow-lg md:z-50 w-48">
                <li>
                  <Link
                    to="/dcs101"
                    className="block duration-300 px-4 py-2 hover:bg-[#04d9ff] dark:hover:bg-[#04d9ff] rounded hover:text-black dark:hover:text-white"
                  >
                    Defensive Cyber Security 101
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dcs201"
                    className="block duration-300 px-4 py-2 hover:bg-[#04d9ff] dark:hover:bg-[#04d9ff] hover:text-black rounded dark:hover:text-white"
                  >
                    Defensive Cyber Security 201
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cdcs"
                    className="block duration-300 px-4 py-2 hover:bg-[#04d9ff] dark:hover:bg-[#04d9ff] rounded hover:text-black dark:hover:text-white"
                  >
                    Complete Defensive Cyber Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="/was101"
                    className="block duration-300 px-4 py-2 hover:bg-[#be0404] dark:hover:bg-[#be0404] rounded hover:text-black dark:hover:text-white"
                  >
                    Web Application Security 101
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="https://m.me/penoughcyber" target='_blank'
              className="block duration-300 py-4 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
              aria-current="page"
            >
              Admission
            </a>
          </li>
          <li>
            <Link
              to="/instructor"
              className="block duration-300 py-4 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
              aria-current="page"
            >
              Instructor
            </Link>
          </li>
          <li className='border-2 border-[#04d9ff] rounded'>
            <Link
              to="/verify"
              className="block duration-300 py-4 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
              aria-current="page"
            >
              Certificate Verification
            </Link>
          </li>

          <li className='border-2 border-[#04d9ff] rounded'>
            <Link
              to="/verify"
              className="block duration-300 py-4 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
              aria-current="page"
            >
              Register
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden text-white text-2xl" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden mt-4 space-y-1 text-start text-white">
          <li>
            <Link
              to="/"
              className="block py-3  duration-300  px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
              aria-current="page"
            >
              Home
            </Link>
          </li>

          {/* Services with Dropdown on Mobile */}
          <li>
            <button
              onClick={toggleMobileServicesDropdown}
              className="flex items-center  duration-300 justify-between w-full py-3 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
            >
              Courses
            </button>
            {isServicesDropdownOpen && (
              <ul className="mt-2 space-y-2 bg-gray-700 p-2 rounded shadow-lg">
                <li>
                  <Link
                    to="/dcs101"
                    className="block duration-300  px-4 py-2 hover:bg-[#04d9ff] dark:hover:bg-[#04d9ff] rounded hover:text-black dark:hover:text-white"
                  >
                    Defensive Cyber Security 101
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dcs201"
                    className="block duration-300  px-4 py-2 hover:bg-[#04d9ff] dark:hover:bg-[#04d9ff] hover:text-black rounded dark:hover:text-white"
                  >
                    Defensive Cyber Security 201
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cdcs"
                    className="block duration-300  px-4 py-2 hover:bg-[#04d9ff] dark:hover:bg-[#04d9ff] rounded hover:text-black dark:hover:text-white"
                  >
                    Complete Defensive Cyber Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="/was101"
                    className="block duration-300  duration-300 px-4 py-2 hover:bg-[#be0404] dark:hover:bg-[#be0404] rounded hover:text-black dark:hover:text-white"
                  >
                    Web Application Security 101
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="https://m.me/penoughcyber" target='_blank'
              className="block  duration-300 py-3 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
              aria-current="page"
            >
              Admission
            </a>
          </li>
          <li>
            <Link
              to="/instructor"
              className="block  duration-300 py-3 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
              aria-current="page"
            >
              Instructor
            </Link>
          </li>
          <li className='border-2 border-[#04d9ff] rounded'>
            <Link
              to="/verify"
              className="block duration-300  py-3 px-6 text-white bg-[#141d2b] rounded md:bg-transparent md:p-4 md:dark:bg-transparent hover:bg-[#04d9ff] hover:text-black"
              aria-current="page"
            >
              Certificate Verification
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
