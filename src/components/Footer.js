const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4 mb-4 md:mb-0 md:ml-8">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/about" className="hover:text-gray-400">About</a>
            <a href="/cv" className="hover:text-gray-400">CV</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </div>

          <div className="flex space-x-4 justify-center md:ml-8">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Emmanuel Binalison Mbewe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;