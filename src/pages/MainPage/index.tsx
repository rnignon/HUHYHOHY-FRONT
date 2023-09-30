import React from "react";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Content/Slider";

export default function MainPage() {
  return (
    <main className="main">
      <Banner />
      <div className="crews__container">
        <div className="crews__top">
          <p className="crews__title">크루즈 TOP 10</p>
          <Slider key={"TOP10"} />
        </div>
        <div className="crews__imminent">
          <p className="crews__title">모집 임박 크루즈</p>
          <Slider key={"imminenet"} />
        </div>
      </div>
    </main>
  );
}
