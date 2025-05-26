import Masonry from 'react-masonry-css';
import './App.css';

const images = [
  "ber_photos/sessions/bolsos1.webp",
  "ber_photos/sessions/sessio3.webp",
  "ber_photos/sessions/sessio4.webp",
  "ber_photos/sessions/sessio5.webp",
  "ber_photos/sessions/sessio6.webp",
  "ber_photos/sessions/bolsos2.webp",
  "ber_photos/sessions/sessio7.webp",
  "ber_photos/sessions/sessio0.webp",
  "ber_photos/sessions/sessio8.webp",
  "ber_photos/sessions/sessio9.webp",
  "ber_photos/sessions/sessio10.webp",
  "ber_photos/sessions/nadal1.webp",
  "ber_photos/sessions/nadal2.webp",
  "ber_photos/sessions/nadal3.webp",
  "ber_photos/sessions/foto-parella1.webp",
  "ber_photos/sessions/foto-parella2.webp",
  "ber_photos/sessions/foto-parella3.webp",
  "ber_photos/sessions/foto-parella4.webp",
  "ber_photos/sessions/foto-parella5.webp",
  "ber_photos/maternitat/maternitat1.webp",
  "ber_photos/maternitat/maternitat5.webp",
  "ber_photos/maternitat/maternitat4.webp",
  "ber_photos/maternitat/maternitat6.webp",
  "ber_photos/maternitat/maternitat7.webp",
  "ber_photos/maternitat/maternitat8.webp",
  "ber_photos/sessions/model1.webp",
  "ber_photos/sessions/model.webp",
  "ber_photos/sessions/model4.webp",
  "ber_photos/sessions/model6.webp",
  "ber_photos/sessions/sessio.webp",
  "ber_photos/sessions/sessio1.webp",
  "ber_photos/sessions/sessio2.webp",
  "ber_photos/sessions/embaras.webp",
  "ber_photos/sessions/embaras2.webp",
  "ber_photos/sessions/embaras3.webp",
  "ber_photos/sessions/embaras4.webp",
];

function Sessions() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="Sessions">
      <h2>Sessions fotogràfiques</h2>
      <p>Sessions fotogràfiques al gust de cadascú.</p>

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

export default Sessions;
