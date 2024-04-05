import styled from "styled-components";

import "../../assets/lupa.png";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    background: var(--background-dark);
    padding: 1.5rem 1rem;
    height: 125px;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .carrinho {
            cursor: pointer;
        }
        img {
            width: 80px;
        }
        h1 {
            color: #fff;
        }
        .react-aside-button {
            cursor: pointer;
            color: #fff;
            font-size: 1.5rem;
        }

        .carrinho {
            color: #fff;
            font-size: 1.5rem;
        }
    }

    .input-container {
        position: relative;
        padding-top: 0.5rem;
        span {
            position: absolute;
            top: 43%;
            right: 5%;
        }

        input {
            padding: 0.75rem;
            width: 100%;
            border-radius: 3px;
            border: 0;
            padding-left: 2rem;

            &::placeholder {
                opacity: 0.9;
                font-style: italic;
                filter: brightness(1.4);
            }

            &:focus {
                outline: 0;
            }
        }
    }
`;
