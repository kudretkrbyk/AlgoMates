import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  addProject,
  deleteProject,
  updateProject,
  resetProjectState,
} from "../slices/projectSlice";

export default function Admin() {
  const dispatch = useDispatch();
  const { projects, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.projects
  );

  const [formData, setFormData] = useState({
    title: "",
    tag: "",
    description: "",
    image: "",
    liveview: "",
    github: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        title: "",
        tag: "",
        description: "",
        image: "",
        liveview: "",
        github: "",
      });
      setEditMode(false);
      setEditId(null);
      dispatch(resetProjectState());
    }
  }, [isSuccess, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateProject({ id: editId, ...formData }));
    } else {
      dispatch(addProject(formData));
    }
  };

  const handleEdit = (project) => {
    setEditMode(true);
    setEditId(project.id);
    setFormData({
      title: project.title,
      tag: project.tag,
      description: project.description,
      image: project.image,
      liveview: project.liveview,
      github: project.github,
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Bu projeyi silmek istediğinize emin misiniz?")) {
      dispatch(deleteProject(id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Admin Panel: Projeler
      </h2>

      {/* Form */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg mb-10">
        <h3 className="text-2xl font-bold mb-6">
          {editMode ? "Projeyi Güncelle" : "Yeni Proje Ekle"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Proje Başlığı"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="text"
            name="tag"
            placeholder="Kategori (tag)"
            value={formData.tag}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          />
          <textarea
            name="description"
            placeholder="Proje Açıklaması"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded bg-gray-700 text-white"
            required
          ></textarea>
          <input
            type="text"
            name="image"
            placeholder="Görsel URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            name="liveview"
            placeholder="Live Site Linki (varsa)"
            value={formData.liveview}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            name="github"
            placeholder="GitHub Linki (varsa)"
            value={formData.github}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded text-white font-bold transition"
          >
            {isLoading ? "İşleniyor..." : editMode ? "Güncelle" : "Ekle"}
          </button>
        </form>

        {/* Başarı veya Hata */}
        {isSuccess && (
          <p className="text-green-400 text-center mt-4">İşlem başarılı!</p>
        )}
        {isError && <p className="text-red-400 text-center mt-4">{message}</p>}
      </div>

      {/* Proje Listesi */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg relative hover:bg-gray-700 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold">{project.title}</h4>
            <p className="text-gray-400">{project.tag}</p>
            <p className="text-gray-300 mt-2">{project.description}</p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleEdit(project)}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-black font-bold"
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-bold"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
