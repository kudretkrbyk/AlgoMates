import React from "react";
import { motion } from "framer-motion";
import { TbMessageChatbot } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Footer({ handleShowModal }) {
  return (
    <footer className=" min-h-[200px] bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400"
            >
              AlgoMates
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Yapay zeka teknolojilerini kullanarak modern ve yenilikçi web
              çözümleri sunuyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {[
                { name: "Ana Sayfa", path: "/" },
                { name: "Hizmetler", path: "/hizmetler" },
                { name: "Projeler", path: "/projeler" },
                { name: "Hakkımızda", path: "/hakkimizda" },
                { name: "İletişim", path: "/iletisim" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span className="text-gray-600 dark:text-gray-300">
                  İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📧</span>
                <span className="text-gray-600 dark:text-gray-300">
                  info@algomates.com
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <span className="text-gray-600 dark:text-gray-300">
                  +90 (212) 123 45 67
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Footer */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 AlgoMates. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["📱", "📘", "📸", "💼"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/*ÜCretsiz danışmanlık butonu!!!! */}
      <div>
        {" "}
        <motion.button
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="fixed bottom-5 right-7 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition duration-300 shadow-lg"
          onClick={handleShowModal}
        >
          <TbMessageChatbot size={24} />
        </motion.button>
      </div>
    </footer>
  );
}
