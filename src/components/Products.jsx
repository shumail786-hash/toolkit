import React, { useState, useEffect } from "react";
import axios from "axios";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const Products = () => {
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((data) => setproducts(data.data));
    };
    fetchProducts();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h4>${product.price}/-</h4>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
