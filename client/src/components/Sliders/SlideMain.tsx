import { ReactNode } from "react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperProps } from "swiper/react";

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}

export function Slider({ settings, children }: SliderProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            {...settings}
        >
            {children}
        </Swiper>
    );
}
