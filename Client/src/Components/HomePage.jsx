import React, { useState } from "react";
import Navbar from "../Components/ui/Navbar";
import Pagination from "../Components/ui/Pagination";
import TabNavigation from "./ui/ProjectNavbar";
import Card, { CardContent } from "../Components/ui/Card";
import BlogCard from "./ui/ProjectCard";
import Button from "../Components/ui/Button";
import { motion } from "framer-motion";
import {
  Globe,
  Briefcase,
  Code,
  Users,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const allProjects = [
  {
    title: "E-Ticaret Platformu",
    description: "Kapsamlı ürün yönetimi ve ödeme sistemi.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykn6coDg6-StuORQ-2aDA1aJxceWpcg57pQ&s",
  },
  {
    title: "Kurumsal Web Sitesi",
    description: "Mobil uyumlu, SEO dostu tanıtım sitesi.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88klB2YGC18IcVZ0Z_ylvMBSYWZJJdDlO4A&s",
  },
  {
    title: "Özel CRM Uygulaması",
    description: "Müşteri ilişkileri yönetimi için web tabanlı yazılım.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6qrLfUupUyR3x2FiFtXeVpGwyFQPxJ8WUA&s",
  },
  {
    title: "Yapay Zeka Projesi",
    description: "AI tabanlı veri analizi yazılımı.",
    image: "https://source.unsplash.com/featured/?ai",
  },
  {
    title: "Blog Platformu",
    description: "Hızlı ve kullanıcı dostu blog platformu.",
    image: "https://source.unsplash.com/featured/?blog",
  },
  {
    title: "Eğitim Platformu",
    description: "Online kurs ve eğitim materyalleri platformu.",
    image: "https://source.unsplash.com/featured/?education",
  },
  {
    title: "Sosyal Ağ Uygulaması",
    description: "Kişisel sosyal medya platformu.",
    image: "https://source.unsplash.com/featured/?social",
  },
  {
    title: "Spor Takımı Yönetimi",
    description: "Spor takımları için yönetim ve takip sistemi.",
    image: "https://source.unsplash.com/featured/?sports",
  },
  {
    title: "Eğlence Uygulaması",
    description: "Kullanıcı dostu eğlence ve video izleme platformu.",
    image: "https://source.unsplash.com/featured/?entertainment",
  },
];

const projectsPerPage = 3;

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const currentProjects = allProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="min-h-screen py-12 px-4 md:px-24 space-y-24">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl"
        >
          <h1 className="text-5xl font-bold mb-6">Dijital Çözümlerle Geleceğe Adım Atın</h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            WebYazım, yenilikçi web çözümleri sunarak işletmelerinizin dijital dönüşümünü hızlandırır.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">Hizmetlerimizi Keşfedin</Button>
        </motion.section>
        <div className="flex justify-center items-center">
  <TabNavigation />
</div>

        {/* Projeler */}
        <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Projelerimiz</h2>
        <div className="grid gap-6 md:grid-cols-3 justify-items-center">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="hover:scale-105 transition-transform"
            >
              <BlogCard />
            </motion.div>
          ))}
        </div>
      </div>
      

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* Ekibimiz */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Ekibimiz</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {["Mehmet Yılmaz", "Ayşe Demir", "Can Kurt"].map((name, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md w-64 hover:shadow-2xl transition-shadow"
              >
                <Users className="text-primary mb-2 mx-auto" size={32} />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600">
                  {index === 0
                    ? "Frontend Geliştirici"
                    : index === 1
                    ? "Proje Yöneticisi"
                    : "Backend Geliştirici"}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Müşteri Yorumları */}
        <section className="bg-gray-100 p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold text-center mb-6">Müşteri Yorumları</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-600">
            <p>"WebYazım ile çalışmak gerçekten harikaydı!" - Ali K.</p>
            <p>"Profesyonel yaklaşımı ve kaliteli hizmetiyle WebYazım her zaman bizimle olacak." - Zeynep T.</p>
          </div>
        </section>

        {/* İletişim */}
        <section className="bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold text-center mb-6">İletişim</h2>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Adınız" className="w-full p-3 border rounded-xl" />
            <input type="email" placeholder="E-posta" className="w-full p-3 border rounded-xl" />
            <textarea rows={4} placeholder="Mesajınız" className="w-full p-3 border rounded-xl" />
            <Button className="w-full">Gönder</Button>
          </form>
        </section>

        {/* Sosyal Medya Linkleri */}
        <section className="text-center mt-12">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Instagram size={32} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Facebook size={32} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Linkedin size={32} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}