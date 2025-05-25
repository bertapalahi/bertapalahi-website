import Masonry from 'react-masonry-css';
import './App.css';

const images = [
  "/ber_photos/interiors/interiors42.webp",
  "/ber_photos/interiors/interiors43.webp",
  "/ber_photos/interiors/interiors44.webp",
  "/ber_photos/interiors/interiors45.webp",
  "/ber_photos/interiors/interiors46.webp",
  "/ber_photos/interiors/interiors47.webp",
  "/ber_photos/interiors/interiors48.webp",
  "/ber_photos/interiors/interiors35.webp",
  "/ber_photos/interiors/interiors38.webp",
  "/ber_photos/interiors/interiors40.webp",
  "/ber_photos/interiors/interiors39.webp",
  "/ber_photos/interiors/interiors37.webp",
  "/ber_photos/interiors/interiors36.webp",
  "/ber_photos/interiors/interiors41.webp",
  "/ber_photos/interiors/interiors4.webp",
  "/ber_photos/interiors/interiors8.webp",
  "/ber_photos/interiors/interiors.webp",
  "/ber_photos/interiors/interiors1.webp",
  "/ber_photos/interiors/interiors2.webp",
  "/ber_photos/interiors/interiors14.webp",
  "/ber_photos/interiors/interior.webp",
  "/ber_photos/interiors/interiors5.webp",
  "/ber_photos/interiors/interiors6.webp",
  "/ber_photos/interiors/interiors7.webp",
  "/ber_photos/interiors/interiors16.webp",
  "/ber_photos/interiors/interiors28.webp",
  "/ber_photos/interiors/interiors29.webp",
  "/ber_photos/interiors/interiors9.webp",
  "/ber_photos/interiors/interiors31.webp",
  "/ber_photos/interiors/interiors17.webp",
  "/ber_photos/interiors/interiors12.webp",
  "/ber_photos/interiors/interiors30.webp",
  "/ber_photos/interiors/interiors32.webp",
  "/ber_photos/interiors/interiors23.webp",
  "/ber_photos/interiors/interiors33.webp"
];

function Interiors() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="Interiors">
      <h2>Fotografia d'espais</h2>
      <p>Fotografia de reformes de diferents interioristes o arquitectes.</p>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <div key={index} className="grid-item">
            <img src={src} alt={`Foto ${index}`} loading="lazy" />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Interiors;
