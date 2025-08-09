import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartTotal, 
    itemCount 
  } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-playfair font-medium text-brand-primary mb-8">
            Your Shopping Cart
          </h1>
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button
              onClick={() => navigate('/')}
              className="bg-brand-primary hover:bg-brand-primary/90"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-playfair font-medium text-brand-primary mb-8">
          Your Shopping Cart
        </h1>
        
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                <div className="flex-shrink-0 w-full sm:w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <p className="mt-1 text-lg font-medium text-brand-primary">
                    ${item.price.toLocaleString()}
                  </p>
                  
                  <div className="mt-4 flex items-center">
                    <label htmlFor={`quantity-${item.id}`} className="sr-only">
                      Quantity
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="ml-auto text-right">
                      <p className="text-lg font-medium">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="border-t border-gray-200 px-6 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${cartTotal.toLocaleString()}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Button
                onClick={() => navigate('/checkout')}
                className="w-full bg-brand-primary hover:bg-brand-primary/90 py-6 text-base"
              >
                Proceed to Checkout
              </Button>
            </div>
            <div className="mt-4 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{' '}
                <button
                  type="button"
                  className="font-medium text-brand-primary hover:text-brand-primary/80"
                  onClick={() => navigate('/')}
                >
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Cart;
