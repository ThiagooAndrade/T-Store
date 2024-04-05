import { ReactNode, createContext, useContext, useState } from 'react';

interface AsideContextType {
    isAsideMenuOpen: boolean;
    isAsideCarrinhoOpen: boolean;
    isAsideCategoriasOpen: boolean;
    handleOpenAsideMenuHamburger: () => void;
    handleOpenAsideCarrinho: () => void;
    handleCloseAsideCategorias: () => void;
    handleOpenAsideCategorias: () => void;
    handleCloseAsideMenuHamburger: () => void;
    handleCloseAsideCarrinho: () => void;
    handleCloseAsideCategoriasAndAsideMenuHamburger: () => void;
}

const AsideContext = createContext<AsideContextType | undefined>(undefined);

interface AsideProviderProps {
    children: ReactNode
}

export function AsideProvider({ children }: AsideProviderProps) {
    const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);
    const [isAsideCarrinhoOpen, setIsAsideCarrinhoOpen] = useState(false);
    const [isAsideCategoriasOpen, setIsAsideCategoriasOpen] = useState(false);

    const handleOpenAsideMenuHamburger = () => {
        setIsAsideMenuOpen(true);
    };

    const handleOpenAsideCarrinho = () => {
        setIsAsideCarrinhoOpen(true);
    };

    const handleCloseAsideCategorias = () => {
        setIsAsideCategoriasOpen(false);
    };

    const handleOpenAsideCategorias = () => {
        setIsAsideCategoriasOpen(true);
    };

    const handleCloseAsideMenuHamburger = () => {
        setIsAsideMenuOpen(false);
    };

    const handleCloseAsideCarrinho = () => {
        setIsAsideCarrinhoOpen(false);
    };

    const handleCloseAsideCategoriasAndAsideMenuHamburger = () => {
        setIsAsideCategoriasOpen(false);
        setIsAsideMenuOpen(false);
    };

    return (
        <AsideContext.Provider
            value={{
                isAsideMenuOpen,
                isAsideCarrinhoOpen,
                isAsideCategoriasOpen,
                handleOpenAsideMenuHamburger,
                handleOpenAsideCarrinho,
                handleCloseAsideCategorias,
                handleOpenAsideCategorias,
                handleCloseAsideMenuHamburger,
                handleCloseAsideCarrinho,
                handleCloseAsideCategoriasAndAsideMenuHamburger,
            }}
        >
            {children}
        </AsideContext.Provider>
    );
}

/* eslint-disable react-refresh/only-export-components */
export const useAside = () => {
    const context = useContext(AsideContext);
    if (!context) {
        throw new Error('useAside must be used within an AsideProvider');
    }
    return context;
};