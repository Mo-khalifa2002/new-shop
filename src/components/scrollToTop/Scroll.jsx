//this component is from google, I just made some styling on it

import { useEffect, useState } from "react";
import "./scroll.scss";

const Scroll = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          {/* &#8679; */}Top
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
};

export default Scroll;
