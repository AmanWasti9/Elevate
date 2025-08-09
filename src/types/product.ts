export interface Product {
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
