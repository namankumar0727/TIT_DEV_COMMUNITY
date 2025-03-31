
import galleryimage1 from "../../assets/Image17.png";
import galleryimage2 from "../../assets/Image18.png";
import galleryimage3 from "../../assets/Image19.png";
import galleryimage4 from "../../assets/Image20.png";


const images = [
  { src: galleryimage1},
  { src: galleryimage2},
  { src: galleryimage3},
  { src: galleryimage4}
  
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 bg-gradient-to-r from-white to-gray-500">
      <h1 className="text-6xl font-monteserrat font-bold  text-center mb-12">ANDROID DEVELOPMENT WORKSHOPS</h1>
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
