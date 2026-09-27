import React from "react";

function ImageCard({ imageUrl, title, description }) {
  return (
    <article className="image-card">
      <div className="image-wrapper">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ImageCard;