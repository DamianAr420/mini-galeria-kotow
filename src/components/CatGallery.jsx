import CatImage from "./CatImage";

const CatGallery = ({ cats, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cats.map((cat) => (
        <CatImage key={cat.id} cat={cat} onClick={() => onImageClick(cat)} />
      ))}
    </div>
  );
};

export default CatGallery;