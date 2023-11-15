"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import React from "react";
import Image from "next/image";
import {
  Autoplay,
  EffectCoverflow,
  EffectCreative,
  Pagination,
} from "swiper/modules";
import { creatorImages } from "../../public/config/data.json";
import { v4 as uuidv4 } from "uuid";

export const SwiperImages = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop={true}
        slidesPerView={2}
        spaceBetween={0}
        centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, EffectCreative, Pagination, Autoplay]}
      >
        {creatorImages.map((image, index) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <Image
                src={"/images/" + image}
                alt={"Image " + index}
                sizes="100vw"
                decoding="async"
                loading="lazy"
                width={250}
                height={300}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
