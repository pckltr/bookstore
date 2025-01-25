import React from "react";
import { useCart } from "../context/CartContext";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  stock: number;
}

interface Props {
  book: Book;
  updateStock: (id: number, quantity: number) => void;
}

const BookCard: React.FC<Props> = ({ book, updateStock }) => {
  const { cart, addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = cart.find((item) => item.id === book.id);
    const cartQuantity = cartItem ? cartItem.quantity : 0;
    const availableStock = book.stock + cartQuantity;

    if (availableStock <= 0) {
      alert("Item is out of stock!");
    } else {
      addToCart({
        id: book.id,
        title: book.title,
        price: book.price,
        quantity: 1,
      });
      updateStock(book.id, 1);
    }
  };

  return (
    <div className="border p-4 rounded shadow-md flex flex-col">
      <h3 className="text-lg font-bold flex-1">{book.title}</h3>
      <p className="text-sm text-gray-700">Author: {book.author}</p>
      <p className="text-sm">Price: ${book.price.toFixed(2)}</p>
      <p
        className={`text-sm ${
          book.stock === 0 ? "text-red-500" : "text-gray-700"
        }`}
      >
        Stock: {book.stock}
      </p>
      <button
        onClick={handleAddToCart}
        className={`mt-2 px-4 py-2 rounded ${
          book.stock > 0
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-400 text-gray-800 cursor-not-allowed"
        }`}
        disabled={book.stock === 0}
      >
        {book.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
};

export default BookCard;
