import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProduct category={"airpods"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"mobile_phones"}
        heading={"Popular's SmartPhones"}
      />
    </div>
  );
};

export default Home;
