import brownArmchair from "@/assets/brown-armchair.jpg";
import collectionData from "@/data/armchairCollection.json";

interface Chair {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
}

interface CollectionData {
  title: string;
  description: string;
  chairs: Chair[];
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
  };
  ctaButton: string;
}

const ArmchairCollection = () => {
  const { title, description, chairs, newsletter, ctaButton } = collectionData as CollectionData;

  return (
    <section id="armchairs" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-medium text-brand-primary mb-6">
            {title}
          </h2>
          <p className="text-brand-secondary font-inter max-w-3xl mx-auto mb-8">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {chairs.map((chair) => (
            <div key={chair.id} className="group cursor-pointer">
              <div className="bg-surface-primary rounded-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                <div className="relative">
                  <img
                    src={chair.image} // In a real app, you might want to dynamically import images based on chair.image
                    alt={chair.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-sm text-xs font-medium">
                    SALE
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-lg font-medium text-brand-primary mb-2">
                    {chair.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-brand-primary font-inter font-semibold">
                      {chair.price}
                    </span>
                    <span className="text-brand-secondary font-inter text-sm line-through">
                      {chair.originalPrice}
                    </span>
                  </div>
                  <p className="text-brand-secondary font-inter text-sm mt-2">
                    Free delivery in 2-3 days
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary">{ctaButton}</button>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="mt-20 bg-surface-warm rounded-sm p-12 text-center">
        <h3 className="text-3xl font-playfair font-medium text-brand-primary mb-4">
          {newsletter.title}
        </h3>
        <p className="text-brand-secondary font-inter mb-8 max-w-2xl mx-auto">
          {newsletter.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder={newsletter.placeholder}
            className="flex-1 px-4 py-3 border border-surface-secondary rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default ArmchairCollection;