import { SwiperProps, SwiperSlide } from "swiper/react";
import { Slider } from "../SlideMain";
import academiaImg from "../../../assets/academia-imagem.jpg";
import academia2Img from "../../../assets/academia-imagem2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "./styles";

export function Banner() {
    const settings: SwiperProps = {
        slidesPerView: 1,
        pagination: { clickable: true },
        autoplay: {
            delay: 5000,
        },
        navigation: true,
    };

    return (
        <Container>
            <Slider
                settings={settings}
                // modules={[Navigation, Pagination]}
                // autoplay={{
                //     delay: 500,
                // }}
                // slidesPerView={1}
                // navigation
                // allowTouchMove={false}
                // autoHeight={true}
                // pagination={{ clickable: true }}
                // onSlideChange={() => console.log("slide change")}
            >
                <SwiperSlide className="slider-banner">
                    <img src={academiaImg} alt="imagem de academia" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={academia2Img} alt="imagem de academia" />
                </SwiperSlide>
            </Slider>
        </Container>
    );
}
