import React from "react";

interface TooltipProps {
  id: string;
  content: string;
}

interface InteractiveImageProps {
  imageUrl: string;
  areas: {
    shape: string;
    coords: string;
    tooltipId: string;
    tooltipContent: string;
  }[];
}

const Tooltip: React.FC<TooltipProps> = ({ id, content }) => (
  <div
    style={{
      position: "absolute",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      padding: "10px",
      display: "none",
      zIndex: 1,
    }}
    id={id}
  >
    {content}
  </div>
);

const InteractiveImage = ({ imageUrl, areas }) => {
  const showTooltip = (tooltipId: string) => {
    const tooltip = document.getElementById(tooltipId);
    if (tooltip) {
      tooltip.style.display = "block";
    }
  };

  const hideTooltip = (tooltipId: string) => {
    const tooltip = document.getElementById(tooltipId);
    if (tooltip) {
      tooltip.style.display = "none";
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <img src={imageUrl} alt="doctor's office" useMap="#imageMap" />

      {areas.map((area) => (
        <area
          key={area.tooltipId}
          shape={area.shape}
          coords={area.coords}
          alt={area.tooltipId}
          onMouseOver={() => showTooltip(area.tooltipId)}
          onMouseOut={() => hideTooltip(area.tooltipId)}
        />
      ))}

      {areas.map((area) => (
        <Tooltip
          key={area.tooltipId}
          id={area.tooltipId}
          content={area.tooltipContent}
        />
      ))}
    </div>
  );
};

export default InteractiveImage;
