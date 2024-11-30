import React from "react";
import { CartState } from "./components/context/Context";
import { Button } from "react-bootstrap";
import Ribbon from "./components/headRibbon";
import Navbar from "./components/navBar";
import Footer from "./components/Footer";

const Wishlist = () => {
  const {
    state: { wishlist },
    dispatch,
  } = CartState();

  return (
    <div>
      <Ribbon />
      <Navbar />
      <div className="wishlist-container my-4">
        {wishlist.length === 0 ? (
          <h5>Wishlist is Empty</h5>
        ) : (
          <div className="container">
            <div className="row">
              {wishlist.map((item) => (
                <div key={item.id} className="col-md-3 col-sm-6 mb-4">
                  <div className="card h-100">
                    {/* Image wrapper with the Add to Cart button */}
                    <div className="product-image-wrapper position-relative">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="card-img-top"
                        style={{ backgroundColor: "#f0f0f0" }}
                      />
                      <div className="overlay d-flex justify-content-center align-items-center">
                        <Button
                          variant="dark"
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: item,
                            })
                          }
                          className="btn-sm"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                    <div className="card-body text-left">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.price} EGP</p>
                      <Button
                        variant="outline-danger"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: item,
                          })
                        }
                        className="btn-sm"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
