import { Search, ShoppingBag, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="w-full bg-white border-b border-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-semibold text-brand-primary">
              Elevate
            </h1>
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors duration-300 font-medium">
                Sofas
              </a>
              <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors duration-300 font-medium">
                Armchairs
              </a>
              <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors duration-300 font-medium">
                Collections
              </a>
              <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors duration-300 font-medium">
                About
              </a>
            </div>
          </div>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 text-brand-primary hover:text-brand-secondary cursor-pointer transition-colors duration-300" />
            <User className="w-5 h-5 text-brand-primary hover:text-brand-secondary cursor-pointer transition-colors duration-300" />
            <ShoppingBag className="w-5 h-5 text-brand-primary hover:text-brand-secondary cursor-pointer transition-colors duration-300" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;