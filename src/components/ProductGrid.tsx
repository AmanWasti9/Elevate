import { useNavigate } from 'react-router-dom';
import { useCart } from "@/contexts/CartContext";
import { useEffect, useState } from 'react';
import { Product } from "@/types/product";
import productsData from '@/data/products.json';

const ProductGrid = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        // In a real app, you would fetch from an API
        // const response = await fetch('/api/products');
        // const data = await response.json();
        setProducts(productsData.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <section className="bg-surface-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-medium text-brand-primary mb-4">
            Elevate Your Space
          </h2>
          <p className="text-brand-secondary font-inter max-w-2xl mx-auto">
            Discover our curated collection of contemporary furniture designed
            to transform your living space into a haven of comfort and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-brand-primary px-6 py-2 rounded-full font-medium hover:bg-brand-primary hover:text-white transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-brand-primary font-medium mb-4">
                  ${product.price.toLocaleString()}
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="flex-1 bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-primary/90 transition-colors text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(e, product);
                      navigate('/cart');
                    }}
                    className="bg-white border border-brand-primary text-brand-primary py-2 px-4 rounded hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {products.slice(0, 2).map((product, index) => (
            <div 
              key={`featured-${product.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-playfair font-medium text-white mb-2">
                      {index === 0 ? 'Premium ' : 'Luxury '}
                      {product.category}
                    </h3>
                    <p className="text-gray-200 font-inter text-sm">
                      {index === 0 
                        ? 'Experience the perfect blend of comfort and style.'
                        : 'Elevate your living space with our exclusive collection.'
                      }
                    </p>
                    <button 
                      className="mt-4 text-white border border-white hover:bg-white hover:text-brand-primary px-4 py-2 rounded-full text-sm font-medium transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.id);
                      }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;