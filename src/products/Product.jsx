import React from "react";

const Product = ({ heroproduct }) => {
  return (
    <div>
      <div className="hero-products-product">
        <div className="hero-product-image">
          <img src={heroproduct.img} alt={heroproduct.name} />
        </div>
        <div className="hero-products-info">
          <div className="hero-products-name">{heroproduct.name}</div>
          <div className="hero-products-price">{heroproduct.price}</div>
          <div className="hero-products-desc">{heroproduct.desc}</div>
          <button className="hero-products-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
