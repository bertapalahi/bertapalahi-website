import Masonry from 'react-masonry-css';
import './App.css';

const images = [
  "ber_photos/esport/kayak.webp",
  "ber_photos/esport/paddlesurf.webp",
  "ber_photos/esport/wakeboard.webp",
  "ber_photos/esport/skate5.webp",
  "ber_photos/esport/skate6.webp",
  "ber_photos/esport/skate.webp",
  "ber_photos/esport/skate3.webp",
  "ber_photos/esport/skate7.webp",
  "ber_photos/esport/surf.webp",
  "ber_photos/esport/surf1.webp",
  "ber_photos/esport/surf3.webp",
  "ber_photos/esport/snow2.webp",
  "ber_photos/esport/snow.webp",
  "ber_photos/esport/ski.webp",
  "ber_photos/esport/basquet.webp",
  "ber_photos/esport/BV00000.webp",
  "ber_photos/esport/BV00001.webp",
  "ber_photos/esport/BV00002.webp",
  "ber_photos/esport/BV00003.webp",
  "ber_photos/esport/BV00004.webp",
  "ber_photos/esport/BV00005.webp",
  "ber_photos/esport/BV00006.webp",
  "ber_photos/esport/BV00007.webp",
  "ber_photos/esport/BV00008.webp",
  "ber_photos/esport/BV00009.webp",
  "ber_photos/esport/BV00010.webp"
];

function Esports() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="Esports">
      <h2>Fotografia d'esports</h2>
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

export default Esports;
