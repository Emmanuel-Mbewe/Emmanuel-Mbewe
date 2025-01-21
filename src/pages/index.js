import { useState, useEffect } from 'react';
import Link from 'next/link';

const Home = () => {
  // Image sets for each card
  const graphicDesignerImages = ['/images/designs/Young.jpg', '/images/designs/Physics.png', '/images/designs/Certificate.png'];
  const educatorImages = ['/images/Emmanuel.jpg', '/images/Emmanuel.jpg', '/images/Emmanuel.jpg'];
  const scientistImages = ['/images/Emmanuel.jpg', '/images/Emmanuel.jpg', '/images/Emmanuel.jpg'];

  // A custom hook for cycling images
  const useImageSlider = (images, delay = 3000) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, delay);
      return () => clearInterval(interval);
    }, [images, delay]);

    return images[index];
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      
      <header className="text-center mb-12 mt-11">
        <h1 className="text-4xl font-bold text-gray-800">My Professions & Skills</h1>
      </header>

      <main className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          
          {/* Educator Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src={useImageSlider(educatorImages)}
              alt="Educator"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold mt-4">Educator</h2>
            <p className="mt-2 text-gray-600">Passionate about teaching and inspiring the next generation.</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-blue-600 focus:outline-none">
              <Link href="/edu-content">
                  Read More
              </Link>
            </button>
          </div>


          {/* Graphic Designer Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src={useImageSlider(graphicDesignerImages)}
              alt="Graphic Designer"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold mt-4">Graphic Designer</h2>
            <p className="mt-2 text-gray-600">Creating stunning visuals that communicate ideas effectively.</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-blue-600 focus:outline-none">
              <Link href="/graphic-designer">
                  Read More
              </Link>
            </button>
          </div>


          {/* Computer Scientist Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src={useImageSlider(scientistImages)}
              alt="Computer Scientist"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold mt-4">Computer Scientist</h2>
            <p className="mt-2 text-gray-600">Exploring the depths of technology and innovation.</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-blue-600 focus:outline-none">
              <Link href="/graphic-designer">
                  Read More
              </Link>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;