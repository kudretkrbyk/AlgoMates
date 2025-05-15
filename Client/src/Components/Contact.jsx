import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { addContact, resetContactState } from "../slices/contactSlice";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.contact
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => dispatch(resetContactState()), 2000);
    }
  }, [isSuccess, dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 text-gray-900 dark:text-white">
      <Helmet>
        <title>Globalgomates İletişim </title>
        <meta
          name="description"
          content="Globalgomates Bizimle İletişime Geçin!"
        />
      </Helmet>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400">
            İletişim
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Sorularınız için bizimle iletişime geçin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sol: İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-4">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-bold">Adres</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h4 className="font-bold">E-posta</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      info@algomates.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h4 className="font-bold">Telefon</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      +90 (212) 123 45 67
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi: 10:00 - 14:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </div>
          </motion.div>

          {/* Sağ: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl space-y-6 shadow"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                {isLoading ? "Gönderiliyor..." : "Gönder"}
              </button>

              {isSuccess && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                  Mesajınız başarıyla gönderildi!
                </p>
              )}
              {isError && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                  Hata: {message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
