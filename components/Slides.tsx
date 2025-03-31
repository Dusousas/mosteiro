import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide1 from "./subc/Slide1";
import Slide2 from "./subc/Slide2";
import Slide3 from "./subc/Slide3";
import Slide4 from "./subc/Slide4";

export default function Slides() {
    return (
        <section id="tradicao" className="py-10 bg-BegeP">
            <div className="text-black maxW">
                <div className="flex w-full items-center justify-center gap-1">
                    <img src="/icon-sub.svg" alt="Ícone Missa"/>
                    <h2>Tradição</h2>
                </div>
                <h1 className="text-4xl text-black text-center font-bold uppercase mt-6">
                    Sabores e Tradição <span className="text-OrangeP">do Mosteiro</span>
                </h1>

                {/* SLIDER */}
                <div className="">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{ delay: 20000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        touchReleaseOnEdges={true}
                        loop={true}
                        modules={[Autoplay, Pagination]}
                        className="w-full"
                    >
                        <SwiperSlide><Slide1 /></SwiperSlide>
                        <SwiperSlide><Slide2 /></SwiperSlide>
                        <SwiperSlide><Slide3 /></SwiperSlide>
                        <SwiperSlide><Slide4 /></SwiperSlide>

                    </Swiper>
                

                </div>
            </div>
        </section>
    );
}
