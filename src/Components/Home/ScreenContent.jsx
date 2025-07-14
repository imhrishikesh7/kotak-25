import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scene from "./Scene";

export const ScreenContent = () => {

    const src = "./home/Test.webp"

    const slides = [<Scene />,
    <img src="./home/Kotak Bank App.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak Cherry.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak 811.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak Neo.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak FYN.webp" alt="Test" className="w-full h-full object-cover" />,
    <img src="./home/Kotak Sampark Setu.webp" alt="Test" className="w-full h-full object-cover" />,

    ]
        ;

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
            <Slider {...settings}>
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
            <div className='h-[130px] absolute top-[28%] left-4 w-[38px] rounded-full bg-black' />

        </div>
    );
};
