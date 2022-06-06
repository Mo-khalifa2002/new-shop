import React from "react";
import "./Nav.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="nav-col1">
                <div className="en d-flex">
                  <div className="eng">En</div>
                  <span>
                    <AiOutlineArrowDown />
                  </span>
                </div>
                <div className="search-section">
                  <div class="wrap">
                    <div class="search">
                      <input
                        type="text"
                        class="searchTerm"
                        placeholder="What are you looking for?"
                      />
                      <button type="submit" class="searchButton">
                        <BiSearchAlt2 />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="text-center fw-bold text-dark">Mo-khalifa</p>
            </div>
            <div className="col-lg-4">
              <div className="nav-col-3">
                <div className="register">Register</div>
                <div className="signin">Sign In</div>
                <div className="nav-cart">
                  <div id="ex4">
                    <span class="p1 fa-stack fa-2x has-badge" data-count="4">
                      <HiOutlineShoppingCart data-count="4b" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
