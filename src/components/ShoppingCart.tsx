import React from "react";
import { useCart } from "../context/CartContext";

interface ShoppingCartProps {
  updateStock: (id: number, quantity: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ updateStock }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (id: number, quantity: number) => {
    updateStock(id, -quantity);
    removeFromCart(id);
  };

  const handleClearCart = () => {
    cart.forEach((item) => {
      updateStock(item.id, -item.quantity);
    });
    clearCart();
  };

  return (
    <div className="bg-gray-100 border-l p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-4">
          <h4 className="font-semibold">{item.title}</h4>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>
            Quantity:
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value, 10))
              }
              className="border w-16 p-1"
            />
          </p>
          <button
            onClick={() => handleRemoveFromCart(item.id, item.quantity)}
            className="text-red-500 hover:underline mt-2"
          >
            Remove
          </button>
        </div>
      ))}
      <hr className="my-4" />
      <p className="text-lg font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
      <button
        onClick={handleClearCart}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Clear Cart
      </button>
      <button
        onClick={() => alert("Order submitted!")}
        className="mt-2 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        disabled={cart.length === 0}
      >
        Submit Order
      </button>
    </div>
  );
};

export default ShoppingCart;
