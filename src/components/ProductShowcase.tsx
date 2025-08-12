import { useNavigate } from 'react-router-dom';
import creamSofa from "@/assets/cream-sofa.jpg";
import brownArmchair from "@/assets/brown-armchair.jpg";
import { motion } from 'framer-motion';
import { ScrollAnimation } from './ui/scroll-animation';

const ProductShowcase = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Product Row - Linden Sofa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <ScrollAnimation direction="right" className="space-y-6">
            <div>
              <motion.h2 
                className="text-4xl font-playfair font-medium text-brand-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                Indulge in the
              </motion.h2>
              <motion.p 
                className="text-brand-secondary font-inter leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Linden Collection offers unparalleled comfort with its thoughtfully 
                designed silhouette and premium materials. Each piece is crafted 
                to complement your lifestyle.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button 
                className="btn-primary w-full sm:w-auto"
                onClick={() => navigate('/products/linden-sofa')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Linden Collection
              </motion.button>
              <motion.button 
                className="btn-outline w-full sm:w-auto"
                onClick={() => navigate('/collections/sofas')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Sofas
              </motion.button>
            </motion.div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="left" className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <img 
              src={creamSofa} 
              alt="Linden Sofa in cream color" 
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-all duration-500"></div>
          </ScrollAnimation>
        </div>

        {/* Second Product Row - Armchair */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimation direction="right" className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden order-last lg:order-first">
            <img 
              src={brownArmchair} 
              alt="Premium brown armchair" 
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-all duration-500"></div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="left" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-playfair font-medium text-brand-primary mb-4">
                Experience Comfort
              </h2>
              <p className="text-brand-secondary font-inter leading-relaxed">
                Our premium armchairs combine ergonomic design with luxurious materials 
                to provide the ultimate seating experience. Perfect for relaxing after 
                a long day or adding a touch of elegance to your space.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.button 
                className="btn-primary w-full sm:w-auto"
                onClick={() => navigate('/collections/armchairs')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Armchairs
              </motion.button>
              <motion.button 
                className="btn-outline w-full sm:w-auto"
                onClick={() => navigate('/new-arrivals')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                New Arrivals
              </motion.button>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
