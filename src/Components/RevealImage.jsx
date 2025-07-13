// components/RevealImage.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealImage = ({
  src,
  alt = "",
  animation = "scale-in",
  delay = 0,
  duration = 2,
  triggerOnce = true,
  className = "",
  style = {},
}) => {
  const imgRef = useRef(null);

  useEffect(() => {
    let animProps = { opacity: 1, scale: 1, y: 0, x: 0 };

    switch (animation) {
      case "slide-up":
        gsap.set(imgRef.current, { y: 50, opacity: 0 });
        break;
      case "slide-left":
        gsap.set(imgRef.current, { x: 50, opacity: 0 });
        break;
      case "slide-right":
        gsap.set(imgRef.current, { x: -50, opacity: 0 });
        break;
      case "fade-in":
        gsap.set(imgRef.current, { opacity: 0 });
        break;
      case "scale-in":
      default:
        gsap.set(imgRef.current, { scale: 0.8, opacity: 0 });
        break;
    }

    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 70%",
        toggleActions: triggerOnce ? "play none none none" : "play none none reverse",
      },
      duration,
      delay,
      ease: "power3.out",
      ...animProps,
    });
  }, [animation, delay, duration, triggerOnce]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={style}
    />
  );
};

export default RevealImage;
