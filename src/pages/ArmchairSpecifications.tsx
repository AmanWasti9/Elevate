import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import brownArmchair from '@/assets/brown-armchair.jpg';

interface Annotation {
  id: number;
  top: string;
  left: string;
  text: string;
  isActive: boolean;
}

const ArmchairSpecifications = () => {
  const navigate = useNavigate();
  const [activeAnnotation, setActiveAnnotation] = useState<number | null>(null);

  const annotations: Annotation[] = [
    {
      id: 1,
      top: '30%',
      left: '20%',
      text: 'Premium leather upholstery for ultimate comfort and durability',
      isActive: false,
    },
    {
      id: 2,
      top: '40%',
      left: '80%',
      text: 'Ergonomic back support with adjustable recline',
      isActive: false,
    },
    {
      id: 3,
      top: '70%',
      left: '25%',
      text: 'Sturdy wooden legs with polished metal accents',
      isActive: false,
    },
    {
      id: 4,
      top: '20%',
      left: '50%',
      text: 'High-density foam cushions for maximum comfort',
      isActive: false,
    },
  ];

  const toggleAnnotation = (id: number) => {
    setActiveAnnotation(activeAnnotation === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 bg-gradient-to-r from-brand-primary to-brand-primary/90 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-playfair font-bold mb-3">
                Premium Armchair
              </h1>
              <p className="text-brand-light/90 text-lg font-light">
                Explore the exquisite craftsmanship and premium materials that make our armchair exceptional
              </p>
              <div className="mt-4 flex justify-center space-x-3">
                <span className="inline-block w-12 h-1 bg-brand-accent rounded-full"></span>
                <span className="inline-block w-4 h-1 bg-white/50 rounded-full"></span>
                <span className="inline-block w-4 h-1 bg-white/30 rounded-full"></span>
              </div>
            </div>
            </div>
            
            <div className="relative p-6 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFucm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxwYXRoIGQ9Ik0gMCwwIEggNDAgViA0MCBaIiBmaWxsPSJyZ2JhKDAwMCwgMCwgMCwgMC4wMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-5"></div>
              {/* Armchair Image with Annotations */}
              <div className="relative max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-inner border border-gray-100">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 rounded-xl -z-10"></div>
                <img 
                  src={brownArmchair} 
                  alt="Premium Brown Armchair" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                
                {/* SVG Canvas for Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {annotations.map((annotation) => (
                    <line
                      key={`line-${annotation.id}`}
                      x1={`${parseInt(annotation.left)}%`}
                      y1={annotation.top}
                      x2={`${parseInt(annotation.left) > 50 ? parseInt(annotation.left) - 10 : parseInt(annotation.left) + 10}%`}
                      y2={annotation.top}
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="5,3"
                      className={`transition-opacity duration-300 ${
                        activeAnnotation === annotation.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </svg>
                
                {/* Annotation Dots with Connecting Lines */}
                {annotations.map((annotation) => (
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
                    <span className="relative z-10">{annotation.id}</span>
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
                      <div className="absolute w-3 h-3 bg-white border-t border-l border-gray-200 transform rotate-45 -translate-y-1/2"
                        style={{
                          top: '50%',
                          [parseInt(annotation.left) > 50 ? 'left' : 'right']: '-6px',
                          borderColor: 'transparent transparent #e5e7eb #e5e7eb',
                        }}
                      />
                      <h3 className="font-semibold text-brand-primary mb-2">Feature {annotation.id}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{annotation.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Specifications List */}
              <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-playfair font-medium text-brand-primary mb-3">
                    Technical Specifications
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <span>Width: <span className="font-medium">32" (81 cm)</span></span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Depth: <span className="font-medium">35" (89 cm)</span></span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Height: <span className="font-medium">32" (81 cm)</span></span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Seat Height: <span className="font-medium">18" (46 cm)</span></span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-xl text-gray-800">Materials</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600 pl-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Upholstery: <span className="font-medium">Top-grain leather</span></span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Frame: <span className="font-medium">Solid hardwood</span></span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Cushions: <span className="font-medium">High-resilience foam</span></span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-brand-primary mr-2"></span>
                        <span>Base: <span className="font-medium">Polished steel</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50">
              <button 
                onClick={() => navigate(-1)}
                className="group flex items-center text-brand-primary hover:text-brand-accent transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Products
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Share:</span>
                <button className="text-gray-400 hover:text-brand-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-brand-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-brand-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
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

export default ArmchairSpecifications;
