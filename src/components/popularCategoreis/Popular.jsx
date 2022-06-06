import React from "react";
import "./popular.scss";
import { popularProducts } from "../../Data";
import PopularProduct from "./PopularProduct";

const Popular = ({ popularProducts, onAdd }) => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          {popularProducts.map((item) => (
            <PopularProduct onAdd={onAdd} item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
