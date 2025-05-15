import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Globalgomates Web Çözümleri </title>
        <meta
          name="description"
          content="Yapay zeka destekli web çözümleri sunuyoruz"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400 p-4">
              Yapay Zeka ile Geleceği Şekillendiriyoruz
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              Modern web çözümleri için yapay zeka teknolojilerini kullanıyoruz
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/hizmetler"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
              >
                Hizmetlerimiz
              </Link>
              <Link
                to="/iletisim"
                className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
              >
                İletişime Geç
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Akıllı Web Tasarımı",
                description:
                  "Yapay zeka destekli modern ve responsive web tasarımları",
                icon: "💡",
              },
              {
                title: "Otomatik Optimizasyon",
                description:
                  "Performans ve SEO optimizasyonu için AI destekli çözümler",
                icon: "⚡",
              },
              {
                title: "Kişiselleştirilmiş Deneyim",
                description:
                  "Kullanıcı davranışlarına göre uyarlanan dinamik içerik",
                icon: "🎯",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg dark:hover:bg-gray-700 transition duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* İstatistikler */}
        <section className="bg-gray-100 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "100+", label: "Tamamlanan Proje" },
                { number: "50+", label: "Mutlu Müşteri" },
                { number: "5+", label: "Yıllık Deneyim" },
                { number: "24/7", label: "Teknik Destek" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Biz */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Yapay zeka teknolojilerini kullanarak işinizi bir adım öne
              taşıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Teknoloji ve İnovasyon",
                items: [
                  "En son yapay zeka teknolojileri",
                  "Sürekli güncellenen çözümler",
                  "Yenilikçi yaklaşımlar",
                  "Geleceğe yönelik stratejiler",
                ],
              },
              {
                title: "Müşteri Odaklılık",
                items: [
                  "Kişiselleştirilmiş çözümler",
                  "7/24 teknik destek",
                  "Düzenli raporlama",
                  "Müşteri memnuniyeti garantisi",
                ],
              },
            ].map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{block.title}</h3>
                <ul className="space-y-4">
                  {block.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <span className="mr-2 text-blue-500 dark:text-blue-400">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Projenizi Hayata Geçirelim
              </h2>
              <p className="text-xl mb-8">
                Yapay zeka destekli web çözümlerimizle işinizi bir adım öne
                taşıyın
              </p>
              <Link
                to="/iletisim"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block"
              >
                Ücretsiz Danışmanlık Al
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
