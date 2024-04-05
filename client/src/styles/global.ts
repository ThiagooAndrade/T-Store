import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-dark: #211915;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop)
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background-color: #fff;
        font-family: "Montserrat", sans-serif;
    }

    body, input, texarea, button {
        /* font-family:  */
        /* font-weight:  */
    }

    h1, h2, h3, h4, h5,h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-menu-content {
        background: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 1rem;
    }
    .bm-overlay {
        
    }
    .react-menu-overlay {
        background: rgba(0, 0, 0, 0.5);
    }

    .bm-burger-button {
        background: #fff;
        position: fixed;
        width: 0;
        height: 0;
        left: -300%;
        top: -300%;
    }

    .bm-cross-button {
        background: #fff;
        position: fixed;
        width: 0;
        height: 0;
        left: -300%;
        top: -300%;
    } 
   
`;
