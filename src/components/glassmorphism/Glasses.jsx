import React from "react";
import Glassmorphism from "./Glassmorphism";

const Glasses = ({ glass }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {glass.map((gla) => (
            <Glassmorphism gla={gla} key={gla.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glasses;
