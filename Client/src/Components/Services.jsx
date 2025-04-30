import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Yapay Zeka Destekli Web Tasarımı",
      description:
        "Modern ve kullanıcı dostu arayüzler için AI destekli tasarım çözümleri",
      icon: "🎨",
      features: [
        "Responsive Tasarım",
        "Kullanıcı Deneyimi Optimizasyonu",
        "Modern UI/UX",
      ],
    },
    {
      title: "Akıllı SEO Optimizasyonu",
      description:
        "Yapay zeka ile güçlendirilmiş SEO stratejileri ve analizler",
      icon: "🔍",
      features: [
        "Anahtar Kelime Analizi",
        "Rakip Analizi",
        "Performans İzleme",
      ],
    },
    {
      title: "Chatbot Entegrasyonu",
      description: "7/24 müşteri desteği sağlayan akıllı chatbot çözümleri",
      icon: "🤖",
      features: [
        "Doğal Dil İşleme",
        "Çoklu Dil Desteği",
        "Özelleştirilebilir Yanıtlar",
      ],
    },
    {
      title: "Veri Analizi ve Raporlama",
      description:
        "Kullanıcı davranışlarını analiz eden AI destekli raporlama sistemleri",
      icon: "📊",
      features: [
        "Gerçek Zamanlı Analiz",
        "Özelleştirilebilir Raporlar",
        "Tahminleme Modelleri",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Yapay zeka teknolojileri ile güçlendirilmiş modern web çözümleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:bg-gray-700 transition duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl transform group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <span className="mr-2 text-green-500 dark:text-green-400">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
