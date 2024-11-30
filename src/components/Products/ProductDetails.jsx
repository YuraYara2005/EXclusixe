import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Ribbon from '../headRibbon';
import Navbar from '../navBar';
import Footer from '.././Footer';
import { CartState } from '../context/Context'; // Import CartState

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Access the dispatch function from CartState context
  const { dispatch } = CartState();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();

    const fetchRelatedProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products?limit=4');
      setRelatedProducts(response.data.products);
    };
    fetchRelatedProducts();
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  return (
    <>
      <Ribbon />
      <Navbar />
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h4>Price: {product.price} EGP</h4>
            <h5>Discounted Price: 400 EGP</h5>
            <button className="btn btn-dark mt-3" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>

        <h3 className="my-4">Related Products</h3>
        <div className="row">
          {relatedProducts.map((related) => (
            <div className="col-md-3" key={related.id}>
              <div className="card">
                <img
                  src={related.thumbnail}
                  className="card-img-top"
                  alt={related.title}
                  style={{ backgroundColor: '#f0f0f0' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{related.title}</h5>
                  <p>₹ {related.price}</p>
                  <Link to={`/product/${related.id}`} className="btn btn-outline-dark btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
