import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper"; // Correct import
import "swiper/css/bundle"; // Includes all necessary CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import StarIcon from "@mui/icons-material/Star";
import "./SliderShow.css";

const SliderShow = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination]} // Correct module registration
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="product-card">
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
              <div className="add-to-cart-btn">Add to Cart</div>
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={index < Math.round(product.rating) ? "filled" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderShow;
