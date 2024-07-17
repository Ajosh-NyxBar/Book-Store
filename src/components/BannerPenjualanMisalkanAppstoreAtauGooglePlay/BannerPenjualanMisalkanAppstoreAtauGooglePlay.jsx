import React from "react";
import bannerBg from "../../assets/bannerBg.jpg";
import googlePlay from "../../assets/googlePlay.png";
import appstore from "../../assets/appstore.png";

const banner = {
  backgroundImage: `url(${bannerBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
const BannerPenjualanMisalkanAppstoreAtauGooglePlay = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white py-10"
      style={banner}
    >
      <div className="container">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-4xl font-semibold">
            Reed Books At Your Fingertips
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="#">
              <img
                src={appstore}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
            <a href="#">
              <img
                src={googlePlay}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPenjualanMisalkanAppstoreAtauGooglePlay;
