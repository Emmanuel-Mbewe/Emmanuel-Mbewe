import Link from 'next/link';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          There are no posts yet. Keep checking back as posts will be published very soon!
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Blog;
