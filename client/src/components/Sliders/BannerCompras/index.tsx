import { SwiperProps, SwiperSlide } from "swiper/react";

import { Container, Content } from "./styles";
import "swiper/css";

import "swiper/css/virtual";

import { FaBox, FaTruck, FaAmazonPay, FaSdCard } from "react-icons/fa";
import { Slider } from "../SlideMain";

export function BannerCompras() {
    const settings: SwiperProps = {
        speed: 3000,
        autoplay: {
            delay: 2500,
            waitForTransition: false,
        },
    };

    return (
        <Container>
            <Slider settings={settings}>
                <SwiperSlide className="slider-bannerCompras">
                    <Content>
                        <FaBox className="img" />
                        <div>
                            <h2>Entrega Rápida</h2>
                            <p>Disponível para algumas regiôes</p>
                        </div>
                    </Content>
                </SwiperSlide>
                <SwiperSlide className="slider-bannerCompras">
                    <Content>
                        <FaTruck className="img" />
                        <div>
                            <h2>Frete grátis</h2>
                            <p>Acima de R$280,00</p>
                        </div>
                    </Content>
                </SwiperSlide>
                <SwiperSlide className="slider-bannerCompras">
                    <Content>
                        <FaAmazonPay className="img" />
                        <div>
                            <h2>Lançamentos</h2>
                            <p>Lançamentos antecipados</p>
                        </div>
                    </Content>
                </SwiperSlide>
                <SwiperSlide className="slider-bannerCompras">
                    <Content>
                        <FaSdCard className="img" />
                        <div>
                            <h2>Formas de pagamento</h2>
                            <p>Várias formas de pagamento</p>
                        </div>
                    </Content>
                </SwiperSlide>
            </Slider>
        </Container>
    );
}
