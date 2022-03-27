import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(typeof cart);
  const [random, setRandom] = useState([]);
  const handleRandomProduct = () => {
    const randomProduct = cart[Math.floor(Math.random() * cart.length)];
    console.log(typeof randomProduct);
    setRandom(randomProduct);
  };

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const handleClear = () => {
    setCart([]);
    setRandom([]);
  };
  useEffect(() => {
    fetch("products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart">
        <h4>Select Watch</h4>
        {cart.map((product) => (
          <li className="cart-list" key={product.id}>
            {product.name}
          </li>
        ))}
        <button onClick={handleRandomProduct}>
          <p>Chosse one Randomly</p>
        </button>
        {Object.keys(random).length > 0 && <li>{random.name}</li>}

        <br />
        <button onClick={handleClear}>
          <p>Choose again</p>{" "}
        </button>
      </div>
    </div>
  );
};

export default Products;
