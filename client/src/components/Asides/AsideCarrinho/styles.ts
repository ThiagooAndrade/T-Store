import styled from "styled-components";

export const Container = styled.div`
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #211915;
        height: 5rem;
        position: relative;
        h2 {
            color: #fff;
        }
        img {
            position: absolute;
            left: 5%;
            cursor: pointer;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10rem;

        .Carrinho {
            width: 100px;
            height: 100px;
        }

        button {
            margin-top: 2rem;
            background: #fff;
            border: 1px solid black;
            border-radius: 0.25rem;
            padding: 0 3rem;
            height: 3rem;
            font-style: italic;
            font-weight: 600;
        }
    }
`;
