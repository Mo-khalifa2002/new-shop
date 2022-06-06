import React from "react";
import "./cart.scss";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div>
      <div className="cart">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Cart Items</h2>
        </Link>
     
        <div>
          {cartItems.length === 0 && (
            <div>
              Cart is empty
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="m-3 fs-5 p-1 bg-info rounded">Add Some</span>
              </Link>
            </div>
          )}

          {cartItems.map((item) => (
            <>
              <div key={item.id} className="cart-left container">
                <div className="cart-image">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="cart-name-price">
                  <div className="cart-name">
                    Product Name: <span>{item.name}</span>
                  </div>
                  <div className="cart-price">
                    Product Price: <span>{item.price}</span>
                  </div>
                </div>
                <div className="cart-buttons">
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>
                  <div className="cart-quantity">
                    {/* tofixed(2) => make the price in two decimal */}
                    {item.qty}
                  </div>
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>
                <div className="cart-price-total">
                  Cart price: ${item.price.toFixed(2)}
                </div>
              </div>
              <hr className="mb-5 mt-3" />
            </>
          ))}

          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="cart-bottom-section container">
                <div className="row">
                  <div className="col-2">Items Price</div>
                  <div className="col-1 text-right">
                    <span>${itemsPrice.toFixed(2)}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Tax Price</div>
                  <div className="col-1 text-right">
                    <span>${taxPrice.toFixed(2)}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Shipping Price</div>
                  <div className="col-1 text-right">
                    <span>${shippingPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <span>
                      <strong>${totalPrice.toFixed(2)}</strong>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <button onClick={() => alert("Implement Checkout!")}>
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
