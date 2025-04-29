import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "Kurucu & CEO",
      image: "👨‍💼",
      description: "10+ yıllık yapay zeka ve yazılım deneyimi",
    },
    {
      name: "Ayşe Demir",
      role: "CTO",
      image: "👩‍💻",
      description: "Machine Learning uzmanı ve yazılım mimarı",
    },
    {
      name: "Mehmet Kaya",
      role: "UI/UX Tasarımcı",
      image: "🎨",
      description: "Kullanıcı deneyimi ve arayüz tasarımı uzmanı",
    },
    {
      name: "Zeynep Şahin",
      role: "Veri Bilimci",
      image: "📊",
      description: "Veri analizi ve yapay zeka modelleme uzmanı",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b  bg-yellow-600 dark:from-gray-900 dark:to-black dark:text-white py-20 text-blue-500">
      <div className="container mx-auto px-4">
        {/* Hakkımızda Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Hakkımızda
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AlgoMates olarak, yapay zeka teknolojilerini kullanarak modern ve
            yenilikçi web çözümleri sunuyoruz. 2020 yılından bu yana,
            müşterilerimize en iyi hizmeti vermek için çalışıyoruz.
          </p>
        </motion.div>

        {/* Değerlerimiz */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Yenilikçilik",
              description:
                "Sürekli gelişen teknolojileri takip ediyor ve uyguluyoruz",
              icon: "🚀",
            },
            {
              title: "Kalite",
              description: "En yüksek standartlarda çözümler sunuyoruz",
              icon: "✨",
            },
            {
              title: "Güven",
              description: "Müşterilerimizle güvene dayalı ilişkiler kuruyoruz",
              icon: "🤝",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Ekibimiz */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">Ekibimiz</h3>
          <p className="text-xl text-gray-300 mb-8">
            Alanında uzman ekibimizle sizlere en iyi hizmeti sunuyoruz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
