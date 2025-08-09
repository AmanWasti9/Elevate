import { useNavigate } from 'react-router-dom';
import creamSofa from "@/assets/cream-sofa.jpg";
import brownArmchair from "@/assets/brown-armchair.jpg";

const ProductShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Product Row - Linden Sofa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-playfair font-medium text-brand-primary mb-4">
                Indulge in the
              </h2>
              <p className="text-brand-secondary font-inter leading-relaxed">
                Linden Collection offers unparalleled comfort with its thoughtfully 
                designed silhouette and premium materials. Each piece is crafted 
                to complement your lifestyle.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="btn-primary w-full sm:w-auto"
                onClick={() => navigate('/products/linden-sofa')}
              >
                Shop Linden Collection
              </button>
              <button 
                onClick={() => navigate('/products/linden-sofa')}
                className="btn-secondary w-full sm:w-auto"
              >
                View Specifications
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src={creamSofa} 
              alt="Cream colored modern sofa" 
              className="w-full h-auto rounded-sm shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => navigate('/products/linden-sofa')}
            />
          </div>
        </div>
        
        {/* Second Product Row - Premium Armchair */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6 order-2 lg:order-1">
            <img 
              src={brownArmchair} 
              alt="Brown leather armchair" 
              className="w-full h-auto rounded-sm shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => navigate('/products/premium-armchair')}
            />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl font-playfair font-medium text-brand-primary mb-4">
                Embrace the Sale
              </h2>
              <p className="text-brand-secondary font-inter leading-relaxed mb-6">
                Limited time offer on our premium armchair collection. 
                Experience luxury seating with contemporary design and 
                exceptional craftsmanship.
              </p>
              <p className="text-brand-secondary font-inter leading-relaxed">
                Premium Armchair Collection
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="btn-primary"
                onClick={() => navigate('/products/premium-armchair')}
              >
                View Specifications
              </button>
              <button 
                className="btn-secondary"
                onClick={() => navigate('/products/premium-armchair')}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;