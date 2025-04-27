import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const projects = [
    {
      title: 'E-Ticaret AI Asistanı',
      description: 'Yapay zeka destekli kişiselleştirilmiş alışveriş deneyimi',
      category: 'E-Ticaret',
      image: '🛒',
      technologies: ['React', 'TensorFlow', 'Node.js']
    },
    {
      title: 'Akıllı Finans Analiz',
      description: 'Gerçek zamanlı finansal veri analizi ve tahminleme',
      category: 'Finans',
      image: '📈',
      technologies: ['Python', 'Django', 'Machine Learning']
    },
    {
      title: 'Sağlık Yönetim Sistemi',
      description: 'Hasta verilerinin AI ile analizi ve yönetimi',
      category: 'Sağlık',
      image: '🏥',
      technologies: ['React', 'MongoDB', 'AI/ML']
    },
    {
      title: 'Eğitim Platformu',
      description: 'Kişiselleştirilmiş öğrenme deneyimi sunan AI destekli platform',
      category: 'Eğitim',
      image: '🎓',
      technologies: ['Vue.js', 'Python', 'NLP']
    }
  ];

  const categories = ['Tümü', 'E-Ticaret', 'Finans', 'Sağlık', 'Eğitim'];

  const filteredProjects = activeFilter === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Projelerimiz
          </h2>
          <p className="text-xl text-gray-300">
            Yapay zeka teknolojileri ile hayata geçirdiğimiz başarılı projeler
          </p>
        </motion.div>

        {/* Filtreler */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projeler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition duration-300 group"
            >
              <div className="p-6">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                  {project.image}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 