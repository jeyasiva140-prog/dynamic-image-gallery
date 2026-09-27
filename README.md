# Dynamic Image Gallery Using React

A responsive React image gallery created according to the project requirements.

## Features

- Reusable `ImageCard` component
- Image data stored in an array of objects
- Dynamic rendering with JavaScript `map()`
- Props used to pass image data from parent to child
- Component separation for readability and reusability
- Responsive CSS Grid layout
- Hover effects on image cards
- Responsive design for desktop, tablet and mobile
- React Fragment used in `main.jsx` to avoid an unnecessary wrapper element

## Project Structure

```text
dynamic-image-gallery/
├── package.json
├── index.html
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    └── components/
        └── ImageCard.jsx
```

## How the Requirements Are Implemented

### 1. Reusable Image Card

`ImageCard.jsx` is a reusable component that receives:

```jsx
<ImageCard
  imageUrl={image.imageUrl}
  title={image.title}
  description={image.description}
/>
```

### 2. Array of Objects

All gallery information is stored in the `images` array inside `App.jsx`.

```jsx
const images = [
  {
    id: 1,
    imageUrl: "...",
    title: "Mountain Adventure",
    description: "..."
  }
];
```

### 3. map() Method

The gallery is generated dynamically:

```jsx
{images.map((image) => (
  <ImageCard
    key={image.id}
    imageUrl={image.imageUrl}
    title={image.title}
    description={image.description}
  />
))}
```

Adding another object to the `images` array automatically creates another card.

### 4. Props

The parent component passes image data to `ImageCard` through props.

### 5. Component Separation

The gallery page and reusable card are separated into different React components.

### 6. Responsive CSS

CSS Grid automatically changes the number of columns:

- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

## Installation

Make sure Node.js is installed.

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Expected Result

The page displays all images from the array as reusable cards. To add a new image, only add a new object to the `images` array. No JSX structure needs to be changed.
