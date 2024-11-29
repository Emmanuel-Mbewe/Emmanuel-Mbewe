import React, { useState } from 'react';

const GraphicDesignerPortfolio = () => {
  const portfolioImages = [
    {
      src: '/images/designs/Young.jpg',
      title: 'Creative Young Design',
      description: 'A vibrant design representing youthful creativity and energy.',
    },
    {
      src: '/images/designs/Physics.png',
      title: 'Physics Poster',
      description: 'An educational poster designed for high school physics lessons.',
    },
    {
      src: '/images/designs/Certificate.png',
      title: 'Certificate Design',
      description: 'A professional certificate template for awards and recognitions.',
    },
    {
      src: '/images/designs/Daily Motivation 2.png',
      title: 'Daily Motivation',
      description: 'A motivational poster designed to inspire positivity.',
    },
    {
      src: '/images/designs/Zanyengo.jpg',
      title: 'Cultural Zanyengo Design',
      description: 'A design inspired by traditional cultural themes.',
    },
    {
      src: '/images/designs/Tutorial Poster.png',
      title: 'Tutorial Poster',
      description: 'An informative poster for an online tutorial series.',
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-12 mt-11">
        <h1 className="text-4xl font-bold text-gray-800">My Portfolio</h1>
      </header>
      <main className="flex flex-col items-center">
        <section className="mb-8 max-w-4xl">
          <p className="text-lg text-gray-700">
            As a passionate graphic designer, I specialize in creating visually compelling designs that communicate ideas effectively. 
            My portfolio showcases a variety of projects ranging from logo design to print media, all crafted with attention to detail and creativity.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover"
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </section>
      </main>

      {/* Modal for Image Details */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl">
            <button
              className="absolute top-4 right-4 text-gray-800 text-xl font-bold focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto mb-4 object-cover" />
            <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
            <p className="text-gray-700">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicDesignerPortfolio;
