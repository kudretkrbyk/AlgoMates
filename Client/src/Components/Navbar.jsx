import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight, CiLogout } from "react-icons/ci";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../slices/themeSlice";
import { useSelector } from "react-redux";
import { logout } from "../slices/auth/authSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = Boolean(user);

  const menuItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Projeler", path: "/projeler" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              AlgoMates
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow-lg"
            >
              Ücretsiz Danışmanlık
            </motion.button>
            {isLoggedIn && (
              <button
                onClick={() => dispatch(logout())}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-600"
              >
                <CiLogout className="" />
              </button>
            )}

            {/* Dark mode switch */}
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-600"
              aria-label="Tema değiştir"
            >
              {darkMode ? <CiLight /> : <MdOutlineDarkMode />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="mr-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-600"
              aria-label="Tema değiştir"
            >
              {darkMode ? <CiLight /> : <MdOutlineDarkMode />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-gray-900/90 rounded-b-lg shadow-md border-t border-gray-200 dark:border-gray-700">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="block text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
              className="pt-2"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded-md text-base font-medium transition duration-300 shadow-lg">
                Ücretsiz Danışmanlık
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
