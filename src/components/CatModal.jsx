import React, { useEffect, useState } from "react";

const CatModal = ({ cat, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  if (!cat || !cat.url) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl max-w-2xl w-full mx-4 transform transition-transform duration-300 ${
          visible ? "scale-100" : "scale-90"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 p-1 rounded-full w-6 h-6 text-sm"
        >
          ✕
        </button>
        <img
          src={cat.url}
          alt="Cat"
          className="w-full h-auto rounded-md object-contain"
        />
      </div>
    </div>
  );
};

export default CatModal;
