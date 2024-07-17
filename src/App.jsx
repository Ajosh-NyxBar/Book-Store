import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Bbagus from "./components/bukuBagus/Bbagus";
import Banner from "./components/Banner/Banner";
import BannerPenjualanMisalkanAppstoreAtauGooglePlay from "./components/BannerPenjualanMisalkanAppstoreAtauGooglePlay/BannerPenjualanMisalkanAppstoreAtauGooglePlay";

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200"> 
        <Navbar />
        <Hero />
        <Bbagus />
        <Banner />
        <BannerPenjualanMisalkanAppstoreAtauGooglePlay />
      </div>
    </>
  );
};

export default App;
