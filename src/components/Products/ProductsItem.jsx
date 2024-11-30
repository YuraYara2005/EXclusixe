import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHeart, FaEye } from 'react-icons/fa';
import { CartState } from '../context/Context'; // Import Context
import './Product.css';

const ProductsItem = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const { state: { cart, wishlist }, dispatch } = CartState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);

  const showMoreProducts = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleAddToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  const handleAddToWishlist = (product) => {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: product,
    });
  };

  return (
    <div className="container my-4">
      <div className="row">
        {products.slice(0, visibleCount).map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100 p-2" style={{ fontSize: '0.9rem' }}>
              <div className="product-image-wrapper position-relative">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                  style={{ backgroundColor: '#f0f0f0', maxHeight: '180px' }}
                />
                <div className="position-absolute top-0 end-0 p-2">
                  <FaHeart
                    className="icont  p-2"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleAddToWishlist(product)}
                    title="Add to Wishlist"
                  />
                  <FaEye className="icont ms-2 p-2" style={{ cursor: 'pointer' }} title="View Product" />
                </div>
                <button
                  className="btn btn-primary add-btn w-100 mt-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
              <div className="card-body">
                <h6 className="card-title text-start">{product.title}</h6>
                <p className="card-text text-start">
                  Price: {product.price} EGP
                </p>
                <p className="card-text text-start">
                  ⭐ Rating: {product.rating}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-outline-dark btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="text-center">
          <button onClick={showMoreProducts} className="btn btn-dark">
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsItem;
