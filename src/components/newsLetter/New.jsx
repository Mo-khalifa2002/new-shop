import React from "react";
import "./new.scss";
import { MdSend } from "react-icons/md";

const New = () => {
  return (
    <div>
      <div className="news p-4">
        <h1 className="news-title text-center text-capitalize fw-bold mb-4">
          newsLetter
        </h1>
        <p className="new-par text-center mb-3 text-capitalize">
          Get timly updated from your favorite products
        </p>
        <div className="newss-input">
          <div className="news-input d-flex justify-content-center align-items-center">
            <input type="text" placeholder="Your Email" />
            <button className="btn">
              <MdSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
