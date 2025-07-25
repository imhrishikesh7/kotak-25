import Slider from "react-slick";
import { useRef } from 'react';
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scene from "./Scene";

export const ScreenContent = () => {
    const sliderRef = useRef(null);
    const src = "./home/Test.webp"

    const slides = [<Scene />,
    // <img src="./home/Digital_Powerhouse.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak Bank App.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak Cherry.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak 811.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak Neo.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak Fyn.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak Sampark Setu.webp" alt="Test" className="w-full h-full object-cover" />,
    ];

    // Custom arrow components
    const Arrow = ({ onClick, direction }) => (
        <div
            className={`absolute bottom-25 cursor-pointer
      ${direction === 'left' ? 'left-1/2 transform -translate-x-[50px] ' : 'right-1/2 transform translate-x-[50px] '} 
      cursor-pointer bg-gradient-to-br from-[#9f0910] to-[#ed1c25] 
      text-white w-10 h-10 flex items-center justify-center rounded-full 
      z-1`}
            onClick={onClick}
        >
            {direction === 'left' ? (
                <HiOutlineArrowSmallLeft size={20} />
            ) : (
                <HiOutlineArrowSmallRight size={20} />
            )}
        </div>
    );


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: false,
        pauseOnHover: true,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        touchThreshold: 10
    };


    return (
        <div className="relative cursor-pointer">
            <Slider ref={sliderRef} {...settings}>
                {slides.map((Component, i) => (
                    <div
                        key={i}
                        className="w-full h-full"
                        style={{ background: "transparent", border: "none", boxShadow: "none" }}
                    >
                        {Component}
                    </div>
                ))}
            </Slider>
            {/* Custom Arrows */}
            <Arrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
            <Arrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
            <div className='h-[130px] absolute top-[28%] left-4 w-[38px] rounded-full bg-black' />

        </div>
    );
};
