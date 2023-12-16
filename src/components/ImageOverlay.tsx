import React, { useState } from "react";
import "../styles/imageOverlay.scss";

interface ImageOverlayProps {
  imageUrl: string;
  textAreas: { text: string; position: { x: number; y: number } }[];
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageUrl, textAreas }) => {
  const [clickedAreas, setClickedAreas] = useState<number[]>([]);

  const handleAreaClick = (index: number) => {
    setClickedAreas((prevClickedAreas) =>
      prevClickedAreas.includes(index)
        ? prevClickedAreas.filter((areaIndex) => areaIndex !== index)
        : [...prevClickedAreas, index]
    );
  };

  return (
    <div className="image-wrapper">
      <img
        src={imageUrl}
        alt="Doctor's office"
        style={{ width: "100%", height: "100%" }}
      />
      {textAreas.map((area, index) => (
        <div
          key={index}
          onClick={() => handleAreaClick(index)}
          className="highlighted-areas"
          style={{
            top: `${area.position.y}%`,
            left: `${area.position.x}%`,
          }}
        >
          {clickedAreas.includes(index) && (
            <span className="highlighted-text">{area.text}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageOverlay;
