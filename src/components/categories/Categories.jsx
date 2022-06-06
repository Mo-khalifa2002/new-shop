import React from "react";
import "./categories.scss";

const Categories = ({ categories, onAdd }) => {
  return (
    <div>
      {categories.map((category) => (
        <div className="category">
          <div className="contaainer">
            <img src={category.img} alt={category.title} />
            <div className="cat-info">
              <h2 className="cat-name">{category.title}</h2>
              <button onClick={() => onAdd(category)} className="cat-button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
