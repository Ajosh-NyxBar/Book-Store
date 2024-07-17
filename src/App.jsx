import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Bbagus from "./components/bukuBagus/Bbagus";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200"> 
        <Navbar />
        <Hero />
        <Bbagus />
        <Banner />
      </div>
    </>
  );
};

export default App;
