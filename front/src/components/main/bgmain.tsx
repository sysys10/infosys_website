'use client'
import "./bgmain.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { motion } from "framer-motion";
import React, { useRef } from "react";

const BgMain = () => {
  const titleRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };
  return (
    <div className="w-full h-screen relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true, root: titleRef }}
        transition={{ duration: 1 }}
      >
        <Slider {...settings} className="w-full">
          <div className="bg-1"></div>
          <div className="bg-2"></div>
          <div className="bg-3"></div>
        </Slider>
      </motion.div>
      <div
        ref={titleRef}
        className="absolute left-1/2 top-[300px] -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold w-full"
      >
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl">Hanyang University</h1>
          <h1 className="text-5xl mt-4">
            information system<span>.</span>
          </h1>
          <p className="text-xl mt-4 font-medium">
            한양대학교 공과대학 정보시스템학과 학생회 정원
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BgMain;
