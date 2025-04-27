import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProjects } from "../slices/projectSlice";

export default function Projects() {
  const { projects, isLoading, isSuccess } = useSelector(
    (state) => state.projects
  );
  const dispatch = useDispatch();
  console.log("projects", projects);

  const [activeFilter, setActiveFilter] = useState("Tümü");

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  // Mevcut kategoriler (dynamic)
  const tagsFromProjects = [...new Set(projects.map((p) => p.tag))];

  // "Tümü" kategorisini başa ekle
  const categories = ["Tümü", ...tagsFromProjects];

  const filteredProjects =
    activeFilter === "Tümü"
      ? projects
      : projects.filter((project) => project.tag === activeFilter);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="loader"></div>
      </div>
    );
  }
  if (isSuccess) {
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
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
                className="relative bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition duration-300 group"
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {/* <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>*/}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl p-4">
                  {project.liveview && (
                    <a
                      href={project.liveview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-700 transition"
                    >
                      Live Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 px-4 py-2 rounded-full text-white hover:bg-gray-600 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
