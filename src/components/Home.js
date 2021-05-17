import React from "react";
import Slider from "./Slider";
import banner2 from "./../imgs/banner2.jpg";
import {bannerData} from './../data'

export default function Home() {

  return (
    <div>
      <Slider bannerarray={bannerData} />

      <div className="category">
        <h5 className="cate_name">Top Categories</h5>
        <div className="banners">
          <img src={banner2} alt="banner" />
          <img src={banner2}  alt='banner '/>
          <img src={banner2} alt="banner"/>
        </div>
      </div>
      <div className="category">
        <h5 className="cate_name">New Arrivals</h5>
        <div className="banners">
          <img src={banner2} alt="banner" />
          <img src={banner2}  alt='banner '/>
          <img src={banner2} alt="banner"/>
        </div>
      </div>
    </div>
  );
}
