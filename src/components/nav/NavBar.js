import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import ThemeContext from "../utils/ThemeContext";
import AuthContext from "../utils/AuthContext";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const themeCntx = useContext(ThemeContext);
  const authCntx = useContext(AuthContext);

  const { isDark, toggleTheme } = themeCntx;

  const toggleThemehandler = () => {
    toggleTheme();
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`${
        isDark ? "bg-slate-900 text-white" : "bg-secondary"
      } p-4 border border-b-gray-500 border-t-black border-x-black`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <div className="flex items-center">
            <img
              className="w-24"
              src="https://i.ibb.co/7yTbnb8/logo-kothacharcha-optimized.png"
              alt="441022670-805270111580199-4093614610536777440-n-modified"
              border="0"
            />
            <span className="text-red-95 text-5xl font-bold ml-2 block">
              কথাচর্চা
            </span>
          </div>
          <div className="mt-[-20px] ml-[115px]">
            <span className="text-sm">বাংলা ছোটগল্প চর্চার উঠোন</span>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center justify-center">
          {/* Theme Toggle Button */}
          <div>
            <button
              onClick={toggleThemehandler}
              className="text-2xl mx-2 hover:bg-gray-300 hover:rounded-full p-2"
            >
              {isDark ? (
                <MdDarkMode />
              ) : (
                <MdOutlineLightMode className="text-sky-600" />
              )}
            </button>
          </div>
          <div className="block md:hidden m-4 hover:font-bold rounded-lg bg-orange-200 px-2">
            <button>সাম্প্রতিক ঘোষণা</button>
          </div>
          {/* Nav Links / Menu */}
          <div className="hidden md:block">
            <Link
              to="/"
              className="bg-solid text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-110"
            >
              হোম
            </Link>
            <Link
              to="/story"
              className="bg-solid text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-110"
            >
              গল্প
            </Link>
            <Link
              to="/discussion"
              className="bg-solid text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 mb-2 rounded-full transition-transform duration-300 transform hover:scale-110"
            >
              আলোচনা
            </Link>
            <Link
              to="/interview"
              className="bg-solid text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-110"
            >
              সাক্ষাৎকার
            </Link>
            {authCntx.isLoggedIn && (
              <Link
                to="/admin"
                className="bg-solid text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-110"
              >
                অ্যাডমিন
              </Link>
            )}
            {!authCntx.isLoggedIn && (
              <Link
                to="/auth"
                className="bg-solid text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-110"
              >
                লগইন
              </Link>
            )}
          </div>
          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={handleMobileMenuToggle}>
              <RxHamburgerMenu size={32} />
            </button>
          </div>
        </div>
      </div>
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleMobileMenuToggle}
        ></div>
      )}
      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-100 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-[99999]`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleMobileMenuToggle}>
            <AiOutlineClose size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to="/"
            className="bg-red-900 text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 mb-2 rounded-full transition-transform duration-300 transform hover:scale-110"
            onClick={handleMobileMenuToggle}
          >
            হোম
          </Link>
          <Link
            to="/story"
            className="bg-red-900 text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 mb-2 rounded-full transition-transform duration-300 transform hover:scale-110"
            onClick={handleMobileMenuToggle}
          >
            গল্প
          </Link>
          <Link
            to="/discussion"
            className="bg-red-900 text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 mb-2 rounded-full transition-transform duration-300 transform hover:scale-110"
            onClick={handleMobileMenuToggle}
          >
            আলোচনা
          </Link>
          <Link
            to="/interview"
            className="bg-red-900 text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 mb-2 rounded-full transition-transform duration-300 transform hover:scale-110"
            onClick={handleMobileMenuToggle}
          >
            সাক্ষাৎকার
          </Link>
          <Link
            to="/admin"
            className="bg-red-900 text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 mb-2 rounded-full transition-transform duration-300 transform hover:scale-110"
            onClick={handleMobileMenuToggle}
          >
            অ্যাডমিন
          </Link>
          <Link
            to="/auth"
            className="bg-red-900 text-white hover:bg-orange-800 font-bold mx-2 py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-110"
          >
            লগইন
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
