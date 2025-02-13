import Link from 'next/link';

const ProjectsIndex = () => {
  const categories = [
    {
      slug: 'graphic-design',
      name: 'Graphic Design',
      image: '/images/designs/EdTech 1.jpg',
    },
    {
      slug: 'web',
      name: 'Web Projects',
      image: '/images/software/Emmanuel 1.png',
    },
    {
      slug: 'mobile-app',
      name: 'Mobile Projects',
      image: '/images/software/mobile.jpg',
    },
    {
      slug: 'teaching-education',
      name: 'Education',
      image: '/images/Emmanuel.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/projects/${category.slug}`}
              className="group block relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsIndex;
