import { useState, useEffect } from "react";
import { fetchCats } from "./services/CatService";
import CatGallery from "./components/CatGallery";
import CatModal from "./components/CatModal";

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(null);
  const [error, setError] = useState("");
  const [dark, setDark] = useState(false);

  const loadCats = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchCats();
      setCats(data.slice(0, 6));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setError("Nie udało się załadować kotków 🐾 Spróbuj ponownie później.");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCats();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-center dark:text-white">
      <h1 className="text-3xl font-bold mb-4">🐱 Cat Gallery</h1>

      <button
        onClick={() => setDark(!dark)}
        className="absolute top-4 right-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {dark ? "☀️ Jasny" : "🌙 Ciemny"}
      </button>

      <button
        onClick={loadCats}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-6 transition"
      >
        Refresh cats
      </button>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <CatGallery cats={cats} onImageClick={setSelectedCat} />
      )}

      {selectedCat && (
        <CatModal cat={selectedCat} onClose={() => setSelectedCat(null)} />
      )}
    </div>
  );
}

export default App;
