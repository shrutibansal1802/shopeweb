import React,{useState} from "react";
import Slider from "./Slider";
import banner2 from "./../imgs/banner2.jpg";
import {bannerData} from './../data'

export default function Home() {
    const [banner, setbanner] = useState(bannerData);

  return (
    <div>
      <Slider bannerarray={banner} />

      <div className="category">
        <h5 className="cate_name">Top Categories</h5>
        <div className="banners">
          <img src={banner2} />
          <img src={banner2} />
          <img src={banner2} />
        </div>
      </div>
      <div className="category">
        <h5 className="cate_name">New Arrivals</h5>
        <div className="banners">
          <img src={banner2} />
          <img src={banner2} />
          <img src={banner2} />
        </div>
      </div>
    </div>
  );
}
