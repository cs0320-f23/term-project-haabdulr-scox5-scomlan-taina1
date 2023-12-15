// ImageOverlay.tsx
import React, { FC } from "react";
import "./ImageOverlay.scss";

interface ImageOverlayProps {
  baseImageUrl: string;
  text: string;
  imageOverlayUrl: string;
}

const ImageOverlay: FC<ImageOverlayProps> = ({
  baseImageUrl,
  text,
  imageOverlayUrl,
}) => {
  return (
    <div className="image-overlay-container">
      <img src={baseImageUrl} alt="Base Image" className="base-image" />
      <div className="overlay-content">
        <p className="overlay-text">{text}</p>
        <img
          src={imageOverlayUrl}
          alt="Image Overlay"
          className="image-overlay"
        />
      </div>
    </div>
  );
};

export default ImageOverlay;
