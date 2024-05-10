const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200">
        <div className="container mx-auto py-8 px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">123 Main St, City, Country</p>
              <p className="mb-2">info@example.com</p>
              <p>+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                <li><a href="#" className="hover:text-gray-400">Courses</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Featured Courses</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/100" alt="Course" className="w-16 h-16 object-cover rounded-lg" />
                  <div>
                    <h4 className="font-semibold">Course Title</h4>
                    <p>$99.99</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/100" alt="Course" className="w-16 h-16 object-cover rounded-lg" />
                  <div>
                    <h4 className="font-semibold">Course Title</h4>
                    <p>$99.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Your Study Material Company. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  