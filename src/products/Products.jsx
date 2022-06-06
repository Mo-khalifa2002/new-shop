import React from "react";
import "./products.scss";
import Product from "./Product";

const Products = ({ herosproducts }) => {
  return (
    <div>
      <div className="hero-products">
        <div className="container">
          <div className="row">
            {herosproducts.map((heroproduct) => (
              <Product key={heroproduct.id} heroproduct={heroproduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
