const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-semibold">Elevate</h3>
            <p className="text-gray-300 font-inter text-sm leading-relaxed">
              Elevating your living space with contemporary furniture designed 
              for comfort, style, and durability.
            </p>
          </div>
          
          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-playfair font-medium text-lg">Products</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Sofas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Armchairs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Loveseats</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Collections</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-playfair font-medium text-lg">Support</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Size Guide</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-playfair font-medium text-lg">Company</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Sustainability</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm font-inter">
            © 2024 Elevate Furniture. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;