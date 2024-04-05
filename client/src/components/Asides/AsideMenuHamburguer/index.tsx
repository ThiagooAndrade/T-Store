import { slide as Menu } from "react-burger-menu";
import closeImg from "../../../assets/Fechar.svg";
import { FaCube, FaFacebookMessenger, FaArrowRight } from "react-icons/fa";

import { Container, ProfileActions } from "./styles";
import { useAside } from "../../../hooks/useAsides";
import { Link } from "react-router-dom";



export const AsideMenuHamburguer: React.FC = () => {
    const { isAsideMenuOpen, handleCloseAsideMenuHamburger, handleOpenAsideCategorias } = useAside()

    return (
        <>
            <Menu
                isOpen={isAsideMenuOpen}
                className="react-menu-content"
                overlayClassName="react-menu-overlay"
                width={"90%"}
                onClose={handleCloseAsideMenuHamburger}
            >
                <Container>
                    <header>
                        <h2>Seja bem vindo</h2>
                        <div>
                            <Link to="/login">Acesse seu perfil</Link>

                        </div>
                        <img
                            src={closeImg}
                            alt="fechar"
                            onClick={handleCloseAsideMenuHamburger}
                        />
                    </header>
                    <nav>
                        <div>
                            <a
                                id="Categorias"
                                className="menu-item"
                                href="https://a"
                            >
                                Todas as categorias
                            </a>
                            <FaArrowRight className="openAsideCategorias" onClick={handleOpenAsideCategorias} />
                        </div>
                        <a
                            id="Whey protein"
                            className="menu-item"
                            href="https://a"
                        >
                            Whey Protein
                        </a>
                        <a id="Creatina" className="menu-item" href="https://a">
                            Creatina
                        </a>
                        <a
                            id="Glutamina"
                            className="menu-item"
                            href="https://a"
                        >
                            Glutamina
                        </a>
                        <a
                            id="Categorias"
                            className="menu-item"
                            href="https://a"
                        >
                            Hipercalórico
                        </a>
                        <a
                            id="Categorias"
                            className="menu-item"
                            href="https://a"
                        >
                            Blog
                        </a>
                        <a
                            id="promotions"
                            className="menu-item"
                            href="https://a"
                        >
                            Promoções
                        </a>
                    </nav>
                    <ProfileActions>
                        <button>
                            <div>
                                <FaCube />
                            </div>
                            <span>Meus pedidos</span>
                        </button>
                        <button>
                            <div>
                                <FaFacebookMessenger />
                            </div>
                            <span>Atendimento</span>
                        </button>
                    </ProfileActions>
                </Container>
            </Menu>
        </>
    );
};
