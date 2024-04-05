import { AsideMenuHamburguer } from "../components/Asides/AsideMenuHamburguer";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { Banner } from "../components/Sliders/Banner";
import { BannerCompras } from "../components/Sliders/BannerCompras";
import { AsideCarrinho } from "../components/Asides/AsideCarrinho";
import { AboutUs } from "../components/AboutUs";
import { Products } from "../components/Sliders/Products";
import { AsideCategorias } from "../components/Asides/AsideCategorias";
import { Footer } from "../components/Footer";
import { NewsLetter } from "../components/NewsLetter";
import { AsideProvider } from "../hooks/useAsides";

export function Home() {
    return (
        <>
            <AsideProvider>
                <AsideMenuHamburguer />
                <AsideCarrinho />
                <AsideCategorias />
                <Header />
            </AsideProvider>
            <Banner />
            <BannerCompras />
            <AboutUs />
            <Products />
            <NewsLetter />
            <Footer />
            <GlobalStyle />
        </>
    );
}
