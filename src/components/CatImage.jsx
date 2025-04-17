import { useState } from "react";

const CatImage = ({ cat, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="cursor-pointer transform hover:scale-105 transition duration-300"
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={cat.url}
        alt="Cat"
        onLoad={() => setLoaded(true)}
        className={`w-full h-60 object-cover rounded-xl shadow-md transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default CatImage;