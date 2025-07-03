import React, { useEffect, useState, useRef } from "react";

const PropertyCarousel = ({ propertyId }) => {
  const [property, setProperty] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    async function fetchProperty() {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/properties/${propertyId}`);
        const data = await res.json();
        setProperty(data);
      } catch (err) {
        console.error("Erro ao buscar imóvel:", err);
      }
    }

    fetchProperty();
  }, [propertyId]);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!property) return <p>Carregando imóvel...</p>;

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={scrollLeft}>&#10094;</button>

      <div className="carousel" ref={carouselRef} style={{ display: "flex", overflowX: "auto", gap: "10px" }}>
        {property.images.map((url, index) =>
          url.endsWith(".mp4") ? (
            <video key={index} controls className="video-wrapper" style={{ height: "150px", flexShrink: 0 }}>
              <source src={url} type="video/mp4" />
            </video>
          ) : (
            <img key={index} src={url} alt={`Imagem ${index + 1}`} style={{ height: "150px", flexShrink: 0 }} />
          )
        )}
      </div>

      <button className="next-btn" onClick={scrollRight}>&#10095;</button>
    </div>
  );
};

export default PropertyCarousel;
