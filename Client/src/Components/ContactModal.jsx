import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed right-5 bottom-10 w-80 z-50 flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-lg p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Bizimle İletişime Geçin
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
          >
            ×
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
