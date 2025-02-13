import { useRouter } from 'next/router';
import Link from 'next/link';
import projectsData from '../../data/projects.json';

const ProjectCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  // Wait for the router to be ready
  if (!router.isReady) return <div>Loading...</div>;

  const categoryDisplayNames = {
    'graphic-design': 'Graphic Design',
    web: 'Web Projects',
    'mobile-app': 'Mobile App Projects',
    'teaching-education': 'Teaching & Education',
  };

  const displayName = categoryDisplayNames[category] || category || 'Projects';

  // Get projects from JSON file for the selected category
  const allProjects = projectsData[category] || [];

  // Pagination Logic
  const projectsPerPage = 6;
  const currentPage = parseInt(router.query.page, 10) || 1;
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = allProjects.slice(startIndex, startIndex + projectsPerPage);
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{displayName}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          {currentPage > 1 && (
            <Link
              href={`/projects/${category}?page=${currentPage - 1}`}
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Previous
            </Link>
          )}
          {currentPage < totalPages && (
            <Link
              href={`/projects/${category}?page=${currentPage + 1}`}
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCategory;
