import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import productsData from "@/data/products.json";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specifications: {
    materials: string[];
    dimensions: {
      width: string;
      depth: string;
      height: string;
      seatHeight: string;
    };
    careInstructions?: string[];
    weightCapacity?: string;
    warranty?: string;
  };
  features?: Array<{
    title: string;
    description: string;
  }>;
  annotations?: Array<{
    id: number;
    top: string;
    left: string;
    title: string;
    description: string;
  }>;
}

const ProductSpecifications = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeAnnotation, setActiveAnnotation] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await fetch('/data/products.json');
  //       const data = await response.json();
  //       const foundProduct = data.products.find((p: Product) => p.id === productId);
        
  //       if (foundProduct) {
  //         setProduct(foundProduct);
  //       } else {
  //         setError('Product not found');
  //       }
  //     } catch (err) {
  //       setError('Failed to load product data');
  //       console.error('Error fetching product:', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProduct();
  // }, [productId]);

    useEffect(() => {
      const foundProduct = productsData.products.find(
        (p: Product) => p.id === productId
      );

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError("Product not found");
      }

      setIsLoading(false);
    }, [productId]);

  const toggleAnnotation = (id: number) => {
    setActiveAnnotation(activeAnnotation === id ? null : id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{error || 'Product not found'}</h2>
            <button
              onClick={() => navigate('/')}
              className="mt-4 px-6 py-2 bg-brand-primary text-white rounded hover:bg-brand-primary/90 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Product Header */}
            <div className="p-8 bg-gradient-to-r from-brand-primary to-brand-primary/90 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-playfair font-bold mb-3">
                  {product.name}
                </h1>
                <p className="text-brand-light/90 text-lg font-light">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-center space-x-3">
                  <span className="inline-block w-12 h-1 bg-brand-accent rounded-full"></span>
                  <span className="inline-block w-4 h-1 bg-white/50 rounded-full"></span>
                  <span className="inline-block w-4 h-1 bg-white/30 rounded-full"></span>
                </div>
              </div>
            </div>
            
            {/* Product Content */}
            <div className="relative p-6 md:p-10 lg:p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFucm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMCwwIEggNDAgViA0MCBaIiBmaWxsPSJyZ2JhKDAwMCwgMCwgMCwgMC4wMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-5"></div>
              
              {/* Product Image with Annotations */}
              <div className="relative max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-inner border border-gray-100 mb-12">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 rounded-xl -z-10"></div>
                
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                
                {/* Annotations */}
                {product.annotations && (
                  <>
                    {/* SVG Canvas for Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {product.annotations.map((annotation) => (
                        <line
                          key={`line-${annotation.id}`}
                          x1={`${parseInt(annotation.left)}%`}
                          y1={annotation.top}
                          x2={`${parseInt(annotation.left) > 50 ? parseInt(annotation.left) - 15 : parseInt(annotation.left) + 15}%`}
                          y2={annotation.top}
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          strokeDasharray="5,3"
                          className={`transition-opacity duration-300 ${
                            activeAnnotation === annotation.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                    </svg>
                    
                    {/* Annotation Dots */}
                    {product.annotations.map((annotation) => (
                      <div 
                        key={annotation.id}
                        className={`group absolute w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                          activeAnnotation === annotation.id ? 'ring-4 ring-brand-primary/30 scale-110' : 'ring-2 ring-white/80 shadow-md'
                        }`}
                        style={{
                          top: annotation.top,
                          left: annotation.left,
                          zIndex: 10,
                        }}
                        onClick={() => toggleAnnotation(annotation.id)}
                      >
                        <span className="relative z-10 font-medium">{annotation.id}</span>
                        
                        {/* Annotation Tooltip */}
                        <div 
                          className={`absolute w-72 bg-white p-5 rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform ${
                            activeAnnotation === annotation.id ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
                          } ${
                            parseInt(annotation.left) > 50 ? 'right-0' : 'left-0'
                          }`}
                          style={{
                            top: '50%',
                            transform: parseInt(annotation.left) > 50 
                              ? 'translate(calc(100% + 1rem), -50%)' 
                              : 'translate(calc(-100% - 1rem), -50%)',
                          }}
                        >
                          <div 
                            className="absolute w-3 h-3 bg-white border-t border-l border-gray-200 transform rotate-45 -translate-y-1/2"
                            style={{
                              top: '50%',
                              [parseInt(annotation.left) > 50 ? 'left' : 'right']: '-6px',
                              borderColor: 'transparent transparent #e5e7eb #e5e7eb',
                            }}
                          />
                          <h3 className="font-semibold text-brand-primary mb-2">{annotation.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{annotation.description}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              
              {/* Specifications */}
              <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-playfair font-medium text-brand-primary mb-3">
                    Technical Specifications
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Dimensions */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-xl text-gray-800">Dimensions</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600 pl-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Width: <span className="font-medium">{product.specifications.dimensions.width}</span></span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Depth: <span className="font-medium">{product.specifications.dimensions.depth}</span></span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Height: <span className="font-medium">{product.specifications.dimensions.height}</span></span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Seat Height: <span className="font-medium">{product.specifications.dimensions.seatHeight}</span></span>
                      </li>
                      {product.specifications.weightCapacity && (
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                          <span>Weight Capacity: <span className="font-medium">{product.specifications.weightCapacity}</span></span>
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Materials */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-xl text-gray-800">Materials & Details</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600 pl-2">
                      {product.specifications.materials.map((material, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                          <span>{material}</span>
                        </li>
                      ))}
                      {product.specifications.warranty && (
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                          <span>Warranty: <span className="font-medium">{product.specifications.warranty}</span></span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                
                {/* Care Instructions */}
                {product.specifications.careInstructions && (
                  <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-lg text-blue-800 mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Care Instructions
                    </h3>
                    <ul className="space-y-2 text-blue-700 pl-7">
                      {product.specifications.careInstructions.map((instruction, index) => (
                        <li key={index} className="relative before:content-['•'] before:absolute before:-left-4">
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-playfair font-medium text-brand-primary mb-6 text-center">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center bg-gray-50">
              <button 
                onClick={() => navigate(-1)}
                className="group flex items-center text-brand-primary hover:text-brand-accent transition-colors mb-4 sm:mb-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Products
              </button>
              
              <div className="flex items-center space-x-4">
                <button className="px-6 py-2 bg-brand-primary text-white rounded hover:bg-brand-primary/90 transition-colors">
                  Add to Cart - ${product.price}
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductSpecifications;
