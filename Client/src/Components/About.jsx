import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Kudret Kırbıyık",
      role: "Kurucu & CEO",
      image: "👨‍💼",
      description: "10+ yıllık yapay zeka ve yazılım deneyimi",
    },
    {
      name: "Gökhan Topdanış",
      role: "CTO",
      image: "👩‍💻",
      description: "Machine Learning uzmanı ve yazılım mimarı",
    },
    {
      name: "Kenan Ünal",
      role: "Veri Bilimci",
      image: "📊",
      description: "Veri analizi ve yapay zeka modelleme uzmanı",
    },
    
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black

 text-gray-900 dark:text-white py-20"
    >
      <div className="container mx-auto px-4">
        {/* Hakkımızda Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
            Hakkımızda
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AlgoMates olarak, yapay zeka teknolojilerini kullanarak modern ve
            yenilikçi web çözümleri sunuyoruz. 2024 yılından bu yana,
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
              className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {value.description}
              </p>
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
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Alanında uzman ekibimizle sizlere en iyi hizmeti sunuyoruz
          </p>
          <div className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(teamMembers.length, 4)}`}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  {member.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
