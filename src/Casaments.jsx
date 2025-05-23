import Masonry from 'react-masonry-css';
import './App.css';

const images = [
  "ber_photos/casament/EL00001.webp",
  "ber_photos/casament/EL00003.webp",
  "ber_photos/casament/EL00006.webp",
  "ber_photos/casament/EL00007.webp",
  "ber_photos/casament/EL00008.webp",
  "ber_photos/casament/EL00010.webp",
  "ber_photos/casament/EL00011.webp",
  "ber_photos/casament/EL00012.webp",
  "ber_photos/casament/EL00013.webp",
  "ber_photos/casament/EL00014.webp",
  "ber_photos/casament/EL00015.webp",
  "ber_photos/casament/EL00017.webp",
  "ber_photos/casament/EL00018.webp",
  "ber_photos/casament/EL00020.webp",
  "ber_photos/casament/EL00021.webp",
  "ber_photos/casament/MJ00004.webp",
  "ber_photos/casament/MJ00005.webp",
  "ber_photos/casament/MJ00013.webp",
  "ber_photos/casament/MJ00017.webp",
  "ber_photos/casament/MJ00018.webp",
  "ber_photos/casament/MJ00020.webp",
  "ber_photos/casament/MJ00022.webp",
  "ber_photos/casament/MJ00024.webp",
  "ber_photos/casament/MJ00025.webp",
  "ber_photos/casament/MJ00026.webp",
  "ber_photos/casament/MJ00027.webp",
  "ber_photos/casament/MJ00028.webp",
  "ber_photos/casament/MJ00029.webp",
  "ber_photos/casament/MJ00030.webp",
  "ber_photos/casament/MI00010.webp",
  "ber_photos/casament/MI00014.webp",
  "ber_photos/casament/MI00017.webp",
  "ber_photos/casament/MI00030.webp",
  "ber_photos/casament/MI00038.webp",
  "ber_photos/casament/MI00043.webp",
  "ber_photos/casament/MI00044.webp",
  "ber_photos/casament/MI00053.webp"
];

function Casaments() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="Casaments">
      <h2>Fotografia de casaments</h2>
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

export default Casaments;
