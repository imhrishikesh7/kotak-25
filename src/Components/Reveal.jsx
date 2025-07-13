// components/Reveal.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({
  children,
  animation = "slide-up", // default
  delay = 0,
  duration = 1,
  triggerOnce = true,
  className = "",
}) => {
  const el = useRef(null);

  useEffect(() => {
    let animProps = { opacity: 1, y: 0, x: 0, scale: 1 };

    // Define animation styles
    switch (animation) {
      case "slide-up":
        gsap.set(el.current, { y: 50, opacity: 0 });
        animProps.y = 0;
        break;
      case "slide-down":
        gsap.set(el.current, { y: -50, opacity: 0 });
        animProps.y = 0;
        break;
      case "slide-left":
        gsap.set(el.current, { x: 50, opacity: 0 });
        animProps.x = 0;
        break;
      case "slide-right":
        gsap.set(el.current, { x: -50, opacity: 0 });
        animProps.x = 0;
        break;
      case "fade-in":
        gsap.set(el.current, { opacity: 0 });
        break;
      case "scale-in":
        gsap.set(el.current, { scale: 0.8, opacity: 0 });
        break;
      default:
        break;
    }

    gsap.to(el.current, {
      scrollTrigger: {
        trigger: el.current,
        start: "top 85%",
        toggleActions: triggerOnce ? "play none none none" : "play none none reverse",
      },
      duration,
      delay,
      ease: "power3.out",
      ...animProps,
    });
  }, [animation, delay, duration, triggerOnce]);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
