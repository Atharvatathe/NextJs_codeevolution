"use client";

import Slider from "react-slick";
import { serverSideFunction } from "../utils/server-utils";
import React from "react";
import { useTheme } from "@/components/theme-provider";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function ClientRoutePage() {
   const theme = useTheme();
  // const result = serverSideFunction();
  //  const settings = {
  //   dots: true,
  // };
  return (
    <>
    <div style={{ color: theme.colors.primary }}>
      <h1>Client route page</h1>
    </div>
      {/* <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
      </Slider>
    </div> */}
    </>
  );
}
