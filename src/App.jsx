import React from "react";
import ImageCard from "./components/ImageCard";

const images = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    title: "Mountain Adventure",
    description: "A peaceful mountain landscape surrounded by clouds and nature."
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    title: "Tropical Beach",
    description: "Crystal-clear water and soft sand make this a perfect getaway."
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    title: "Snowy Peaks",
    description: "Beautiful snow-covered peaks under a clear evening sky."
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    title: "Green Forest",
    description: "A fresh and relaxing walk through a dense green forest."
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    title: "Lakeside View",
    description: "A calm lake reflecting the mountains and surrounding landscape."
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    title: "Nature Escape",
    description: "A scenic natural landscape perfect for a quiet escape."
  }
];

function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">REACT PROJECT</p>
        <h1>Dynamic Image Gallery</h1>
        <p className="subtitle">
          A reusable React gallery built with components, props, arrays and
          the <strong>map()</strong> method.
        </p>
      </header>

      <section className="gallery-section">
        <div className="section-heading">
          <div>
            <h2>Explore the Gallery</h2>
            <p>{images.length} beautiful images</p>
          </div>
        </div>

        <div className="gallery-grid">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              imageUrl={image.imageUrl}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;