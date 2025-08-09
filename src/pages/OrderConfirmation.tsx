import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        <h2 className="mt-6 text-3xl font-playfair font-medium text-gray-900">
          Order Confirmed!
        </h2>
        <p className="mt-2 text-gray-600">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        <p className="text-gray-500 text-sm">
          Order #ORD-{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
        </p>
        <div className="mt-8 space-y-4">
          <Button
            onClick={() => navigate('/')}
            className="w-full bg-brand-primary hover:bg-brand-primary/90 py-6 text-base"
          >
            Continue Shopping
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/orders')}
            className="w-full py-6 text-base"
          >
            View Order Status
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
