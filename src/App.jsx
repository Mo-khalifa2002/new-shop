import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import data from "./Data";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cart from "./components/footer/cart/Cart";
import { useState } from "react";
import Scroll from "./components/scrollToTop/Scroll";

function App() {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      // if the item exist then increase the quantity by 1
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      // if the item not exist then make the quantity by 1

      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // handle the remove function
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    // if the quantity is 1 then remove it

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      // if the item exist decrease it by 1
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="cart">
          <div className="app-shop-icon">
            {/* <FaCartPlus className="shopping-icon" /> */}
            <h3 className="shopping-icon">
              
              Cart: 
              <span>
                {cartItems ? (
                  <div className="badge text-black">{cartItems.length}</div>
                ) : (
                  ""
                )}
              </span>
            </h3>
          </div>
        </Link>
        <Scroll />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
