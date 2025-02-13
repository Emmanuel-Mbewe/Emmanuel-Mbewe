const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section: Branding, Navigation & Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Emmanuel Binalison Mbewe</h2>
            <p className="text-gray-400">Creative Software Engineer, Graphic Designer and Educator</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <a href="/" className="hover:text-gray-400">Home</a>
              <a href="/about" className="hover:text-gray-400">About</a>
              <a href="/cv" className="hover:text-gray-400">CV</a>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
            </div>
            <div className="flex space-x-4">
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
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Middle Section: Newsletter Subscription and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Legal Links */}
          <div className="flex space-x-4">
            <a href="/" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/" className="hover:text-gray-400">Terms &amp; Conditions</a>
            <a href="/" className="hover:text-gray-400">Location</a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Emmanuel Binalison Mbewe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;