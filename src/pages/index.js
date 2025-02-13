import Link from 'next/link';

const Home = () => {
  // Image sets for each card
  const graphicDesignerImage = '/images/designs/EdTech 1.jpg';
  const webImage = '/images/software/Emmanuel 1.png';
  const appImage = '/images/software/mobile.jpg';
  const educatorImage = '/images/Emmanuel.jpg';

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Manzy.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            I am Emmanuel Binalison Mbewe, a Software Engineer & Creative Designer
          </p>
          <Link
            href="/projects"
            className="px-8 py-3 bg-orange-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition duration-300"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Graphic Design Card */}
            <Link
              href="/projects/graphic-design"
              className="group block relative overflow-hidden rounded-lg shadow-lg"
            >
            <img
              src={graphicDesignerImage}
              alt="Graphic Designer"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Graphic Design</h3>
              </div>
            </Link>

            {/* Web Projects Card */}
            <Link
              href="/projects/web"
              className="group block relative overflow-hidden rounded-lg shadow-lg"
            >
            <img
              src={webImage}
              alt="Web Projects"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Web Projects</h3>
              </div>
            </Link>

            {/* Mobile App Card */}
            <Link
              href="/projects/mobile-app"
              className="group block relative overflow-hidden rounded-lg shadow-lg"
            >
            <img
              src={appImage}
              alt="Mobile App Projects"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Mobile App</h3>
              </div>
            </Link>

            {/* Teaching & Education Card */}
            <Link
              href="/projects/teaching-education"
              className="group block relative overflow-hidden rounded-lg shadow-lg"
            >
            <img
              src={educatorImage}
              alt="Education"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">
                  Education
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
