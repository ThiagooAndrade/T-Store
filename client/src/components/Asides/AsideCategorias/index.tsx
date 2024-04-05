import { useAside } from "../../../hooks/useAsides";
import { slide as Menu } from "react-burger-menu";
import closeImg from "../../../assets/Fechar.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Container } from "./styles";


export function AsideCategorias() {
    const { isAsideCategoriasOpen, handleCloseAsideCategorias, handleCloseAsideCategoriasAndAsideMenuHamburger } = useAside()


    return (
        <Menu isOpen={isAsideCategoriasOpen} onClose={handleCloseAsideCategorias} width={"100%"}>
            <Container>
                <header>
                    <FaArrowLeft
                        className="backToAsideHambuger"
                        onClick={handleCloseAsideCategorias}
                    />
                    <h2>Todas as Categorias</h2>
                    <img
                        src={closeImg}
                        alt="fechar"
                        onClick={handleCloseAsideCategoriasAndAsideMenuHamburger}
                    />
                </header>
                <main>
                    <ul>
                        <li>
                            <a href="https:al">Whey Protein</a>
                            <FaArrowRight className="" />
                        </li>
                        <li>
                            <a href="https:al">Creatina</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Glutamina</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Hipercalórico</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Pré treino</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Intra treino</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Aminoácidos</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Multivitamínico</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Barra de Proteína</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Termogênico</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Ômega</a>
                            <FaArrowRight />
                        </li>
                        <li>
                            <a href="https:al">Colágeno</a>
                            <FaArrowRight />
                        </li>
                    </ul>
                </main>
            </Container>
        </Menu>
    );
}
