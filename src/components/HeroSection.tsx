import coverBg from "@/assets/coverbg.webp";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-left justify-left">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${coverBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-left text-white px-20 py-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Discover the Defon Sofa:
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold">Elevate</h2>
      </div>
    </section>
  );
};

export default HeroSection;
