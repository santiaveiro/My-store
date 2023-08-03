import React, { useEffect, useState, } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import ProductGrid from './Components/ProductGrid';
import Paginator from './Components/Paginator';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import Footer from './Components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product, quantity) => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
    };
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="App">
      <Navbar />
      <ProductGrid>
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={handleAddToCart} />
        ))}
      </ProductGrid>
      <Paginator
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
      <Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
      <Payment />
      <Footer />
    </div>
  );
}

export default App;
