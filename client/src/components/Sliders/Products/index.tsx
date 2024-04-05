import { SwiperProps, SwiperSlide } from "swiper/react";
import { Slider } from "../SlideMain";
import { Container } from "./styles";

import halter from "../../../assets/halter-aço-maciço.jpg";
import halterRegulavel from "../../../assets/halter-regulável.jpg";
import halterDaBarbie from "../../../assets/halter-da-barbie.jpg";
import dumbbell from "../../../assets/dumbbell.jpg";

export function Products() {
    const settings: SwiperProps = {
        slidesPerView: 2,
        navigation: true,
        pagination: {
            clickable: true,
        },
    };
    return (
        <Container>
            <h2>Busque por categoria</h2>
            <Slider settings={settings}>
                <SwiperSlide className="slide">
                    <img src={halter} alt="halter" />
                    <h3>Whey Protein</h3>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src={halterRegulavel} alt="halterRegulavel" />
                    <h3>HiperCalórico</h3>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src={halterDaBarbie} alt="halterDaBarbie" />
                    <h3>Glutamina</h3>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img src={dumbbell} alt="dumbbell" />
                    <h3>Creatina</h3>
                </SwiperSlide>
            </Slider>
        </Container>
    );
}
