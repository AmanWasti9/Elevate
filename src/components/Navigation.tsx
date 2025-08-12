import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount } = useCart();

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-playfair font-bold text-brand-primary hover:text-brand-secondary transition-colors duration-300"
            >
              Elevate
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-brand-primary hover:text-brand-secondary transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-brand-primary hover:text-brand-secondary transition-all duration-300 font-medium relative group"
              >
                Sofas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('armchairs')}
                className="text-brand-primary hover:text-brand-secondary transition-all duration-300 font-medium relative group"
              >
                Armchairs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="text-brand-primary hover:text-brand-secondary transition-all duration-300 font-medium relative group"
              >
                Collections
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-brand-primary hover:text-brand-secondary hover:bg-gray-100 rounded-full transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-brand-primary hover:text-brand-secondary hover:bg-gray-100 rounded-full transition-all duration-300">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={handleCartClick}
              className="relative p-2 text-brand-primary hover:text-brand-secondary hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-brand-primary hover:text-brand-secondary hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-brand-primary hover:text-brand-secondary hover:bg-gray-100 rounded-md transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-3 py-2 text-brand-primary hover:text-brand-secondary hover:bg-gray-100 rounded-md transition-colors duration-300 font-medium"
              >
                Sofas
              </button>
              <button 
                onClick={() => scrollToSection('armchairs')}
                className="block w-full text-left px-3 py-2 text-brand-primary hover:text-brand-secondary hover:bg-gray-100 rounded-md transition-colors duration-300 font-medium"
              >
                Armchairs
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="block w-full text-left px-3 py-2 text-brand-primary hover:text-brand-secondary hover:bg-gray-100 rounded-md transition-colors duration-300 font-medium"
              >
                Collections
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;