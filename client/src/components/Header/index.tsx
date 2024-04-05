import { Container } from "./style";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import logo from "../../assets/logo1.png";
import { Nomezinho } from "../Nomezinho";
import { useAside } from "../../hooks/useAsides";



export function Header() {
    const { handleOpenAsideCarrinho, handleOpenAsideMenuHamburger } = useAside();

    return (
        <>
            <Nomezinho />
            <Container>
                <div>
                    <FaBars
                        className="react-aside-button"
                        onClick={handleOpenAsideMenuHamburger}
                    />
                    <img src={logo} alt="Logo" />
                    <FaShoppingCart
                        className="carrinho"
                        onClick={handleOpenAsideCarrinho}
                    />
                </div>
                <form className="input-container">
                    <input type="search" placeholder="Busque por..." />
                    <span>
                        <FaSearch />
                    </span>
                </form>
            </Container>
        </>
    );
}
