import galleryimage1 from "../../assets/webdev.png";

const images = [
  { src: galleryimage1}
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 bg-gradient-to-r from-white to-gray-500">
      <h1 className="text-6xl font-monteserrat font-bold text-center mb-12">WEB DEVELOPMENT HACKATHON</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <figure
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
            />

            {/* Caption */}
            
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
