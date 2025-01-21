import React, { useState } from "react";
import BookCard from "../components/BookCard";
import { mockData } from "../mockData";

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState(mockData);
  const [searchTerm, setSearchTerm] = useState("");

  const updateStock = (id: number, quantity: number) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, stock: book.stock - quantity } : book
      )
    );
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Books
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-4 py-2 border rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Books List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} updateStock={updateStock} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
