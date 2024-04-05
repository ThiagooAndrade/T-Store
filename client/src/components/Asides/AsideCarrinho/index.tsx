import { slide as Menu } from "react-burger-menu";
import closeImg from "../../../assets/Fechar.svg";

import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { useAside } from "../../../hooks/useAsides";



export function AsideCarrinho() {
    const { isAsideCarrinhoOpen, handleCloseAsideCarrinho } = useAside()

    return (
        <Menu
            right
            isOpen={isAsideCarrinhoOpen}
            className="react-menu-content"
            overlayClassName="react-menu-overlay"
            width={"90%"}
            onClose={handleCloseAsideCarrinho}
        >
            <Container>
                <header>
                    <h2>Carrinho</h2>
                    <img src={closeImg} alt="fechar" onClick={handleCloseAsideCarrinho} />
                </header>
                <main>
                    <FaShoppingCart className="Carrinho" />
                    <h2>Sua sacola está vazia</h2>
                    <span>Adicione itens em sua sacola</span>
                    <button type="button" onClick={handleCloseAsideCarrinho}>
                        Continuar Comprando
                    </button>
                </main>
            </Container>
        </Menu>
    );
}
