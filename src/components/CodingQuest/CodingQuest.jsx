import galleryimage1 from "../../assets/img6.jpg";
import galleryimage2 from "../../assets/img5.jpg";
import galleryimage3 from "../../assets/img4.jpg";
import galleryimage4 from "../../assets/img3.jpg";
import galleryimage5 from "../../assets/img2.jpg";
import galleryimage6 from "../../assets/img1.jpg";
import galleryimage7 from "../../assets/Image21.jpg";
import galleryimage8 from "../../assets/Image7.jpg";
import galleryimage9 from "../../assets/Image8.jpg";
import galleryimage10 from "../../assets/Image9.jpg";
import galleryimage11 from "../../assets/Image10.jpg";
import galleryimage12 from "../../assets/Image11.jpg";

const images = [
  { src: galleryimage1},
  { src: galleryimage2},
  { src: galleryimage3},
  { src: galleryimage4},
  { src: galleryimage5},
  { src: galleryimage6 },
  { src: galleryimage7 },
  { src: galleryimage8 },
  { src: galleryimage9 },
  { src: galleryimage10 },
  { src: galleryimage11 },
  { src: galleryimage12 },
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 bg-gradient-to-r from-white to-gray-500">
      <h1 className="text-6xl font-monteserrat font-bold text-center mb-12">CODING QUEST</h1>
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
