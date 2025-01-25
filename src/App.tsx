import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BooksPage from "./pages/BooksPage";
import ProfilePage from "./pages/ProfilePage";
import ShoppingCart from "./components/ShoppingCart";
import { mockData } from "./mockData";

const App: React.FC = () => {
  const [books, setBooks] = useState(mockData);

  const updateStock = (id: number, quantity: number) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, stock: book.stock - quantity } : book
      )
    );
  };

  return (
    <Router>
      <div className="h-full flex flex-col">
        <Navbar />
        <div className="flex flex-1 items-stretch">
          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={<BooksPage books={books} updateStock={updateStock} />}
              />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
          <ShoppingCart books={books} updateStock={updateStock} />
        </div>
      </div>
    </Router>
  );
};

export default App;
