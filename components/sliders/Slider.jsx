import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

export default function Slider(props) {
  const swiperRef = useRef(null);
  const { children, slideClasses, ...rest } = props;

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest,
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children?.map((child, index) => (
        <swiper-slide className={slideClasses} key={index}>
          {child}
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
