// components/ui/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Eğer react-router kullanıyorsanız, sayfalara yönlendirme yapmak için Link kullanılabilir.

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">Algomates</Link>
        </div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-300">Anasayfa</Link></li>
          <li><Link to="/projeler" className="text-white hover:text-gray-300">Projeler</Link></li>
          <li><Link to="/hakkimizda" className="text-white hover:text-gray-300">Hakkımızda</Link></li>
          <li><Link to="/iletisim" className="text-white hover:text-gray-300">İletişim</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
