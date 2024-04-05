import { Route, Routes } from "react-router-dom";
import { AsideCarrinho } from "../components/Asides/AsideCarrinho";
import { AsideCategorias } from "../components/Asides/AsideCategorias";
import { AsideMenuHamburguer } from "../components/Asides/AsideMenuHamburguer";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LoginAuth } from "../components/LoginAuth";
import { NewsLetter } from "../components/NewsLetter";
import { AsideProvider } from "../hooks/useAsides";
import { GlobalStyle } from "../styles/global";


export function Login() {
    return <Routes>
        <Route index element={
            <>
                <AsideProvider>
                    <AsideCarrinho />
                    <AsideMenuHamburguer />
                    <AsideCategorias />
                    <Header />
                </AsideProvider>
                <LoginAuth />

                <NewsLetter />
                <Footer />
                <GlobalStyle />
            </>
        } />
        <Route path="register" element={<h1>registro</h1>} />
    </Routes>
}