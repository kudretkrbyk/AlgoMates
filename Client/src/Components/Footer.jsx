import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              AlgoMates
            </Link>
            <p className="mt-4 text-gray-300">
              Yapay zeka teknolojilerini kullanarak modern ve yenilikçi web çözümleri sunuyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-300 hover:text-white transition duration-300">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link to="/projeler" className="text-gray-300 hover:text-white transition duration-300">
                  Projeler
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-gray-300 hover:text-white transition duration-300">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-300 hover:text-white transition duration-300">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span className="text-gray-300">İstanbul, Türkiye</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📧</span>
                <span className="text-gray-300">info@algomates.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <span className="text-gray-300">+90 (212) 123 45 67</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2024 AlgoMates. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <span className="text-xl">📱</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <span className="text-xl">📘</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <span className="text-xl">📸</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <span className="text-xl">💼</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 