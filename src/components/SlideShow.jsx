import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper';

const ProductSlideshow = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', img: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', img: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', img: '/images/product3.jpg' },
    { id: 4, name: 'Product 4', img: '/images/product4.jpg' },
  ];

  return (
    <div className="product-slideshow">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add required modules
        spaceBetween={20} // Space between slides
        slidesPerView={3} // Number of slides visible at once
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
        autoplay={{ delay: 3000 }} // Auto-slide with a 3-second delay
        loop // Loop the slides
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlideshow;
