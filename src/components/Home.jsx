import React, { useState } from "react";
import Categories from "./categories/Categories";
import Hero from "./hero/Hero";
import { categories } from "../Data";
import Popular from "./popularCategoreis/Popular";
import { popularProducts } from "../Data";
import { herosproducts } from "../Data";
import New from "./newsLetter/New";
import Footer from "./footer/Footer";
import Products from "../products/Products";
import SmallSwiper from "./smallSwiper/SmallSwiper";
import { small } from "../Data";
import { animatedcard } from "../Data";
import { animatedcard1 } from "../Data";
import { animatedcard2 } from "../Data";
import { fancyswiper } from "../Data";
import { hovercard, threedflip, glass } from "../Data";
import AnimatedCard from "./animatedCard/AnimatedCard";
import Animated from "./animatedCard/Animated";
import OneCards from "./oneCardPhoto/OneCards";
import Fancy from "./fancySwiper/Fancy";
import Neon from "./neo/Neon";
import HoverCard from "./hoverCardAnimation/HoverCard";
import ThreeDflip from "./threeDflip/ThreeDflip";

const Home = ({ products, cartItems, onAdd, onRemove }) => {
  return (
    <div>
      <Animated animatedcard={animatedcard} />
      {/* <Hero /> */}
      <Categories onAdd={onAdd} categories={categories} />
      <Popular onAdd={onAdd} popularProducts={popularProducts} />
      <SmallSwiper onAdd={onAdd} small={small} />
      {/* <Products onAdd={onAdd} herosproducts={herosproducts} /> */}
      <OneCards
        onAdd={onAdd}
        animatedcard2={animatedcard2}
        animatedcard1={animatedcard1}
      />
      <Fancy onAdd={onAdd} fancyswiper={fancyswiper} />
      {/* <Neon onAdd={onAdd}/> */}
      <HoverCard hovercard={hovercard} onAdd={onAdd} />
      <ThreeDflip threedflip={threedflip} onAdd={onAdd} />
      {/* <Glasses glass={glass} onAdd={onAdd} /> */}
      <New />
      <Footer />
    </div>
  );
};

export default Home;
