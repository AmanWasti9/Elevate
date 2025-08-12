import coverBg from "@/assets/coverbg.webp";
import { motion } from "framer-motion";
import { ScrollAnimation } from "./ui/scroll-animation";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-left justify-left overflow-hidden">
      {/* Background Image with subtle zoom effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${coverBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-left text-white px-8 md:px-36 py-8 w-full max-w-4xl">
        <ScrollAnimation delay={0.2} direction="left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Discover the Defon Sofa:
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={0.4} direction="right">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8">
            Elevate Your Space
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.6} direction="up">
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Experience the perfect blend of comfort and contemporary design with our premium furniture collection.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.8} direction="up">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </motion.button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
