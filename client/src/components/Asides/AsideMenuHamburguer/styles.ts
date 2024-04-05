import styled from "styled-components";

export const Container = styled.div`
    header {
        padding: 0 1rem;
        height: 6rem;
        background-color: #211915;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        h2 {
            color: #fff;
            font-size: 1rem;
            font-style: italic;
        }
        div {
            display: flex;
            a {
                color: #fff;
                display: flex;
            }
        }
        img {
            position: absolute;
            right: 6%;
            cursor: pointer;
        }
    }

    nav {
        padding: 1rem;
        text-transform: uppercase;

        div {
            display: flex;
            justify-content: space-between;
            a {
                margin-bottom: 1rem;
            }
            .openAsideCategorias {
                cursor: pointer;
            }
        }
        a {
            & + a {
                margin-top: 1rem;
            }
            display: block;
            text-decoration: none;
            color: black;
            font-size: 1.2rem;
        }

        #promotions {
            color: red;
        }
    }
`;

export const ProfileActions = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    button {
        display: flex;
        align-items: center;
        background-color: #f5f5f5;
        padding: 0 1rem;
        height: 4rem;
        border: 0;

        div {
            width: 40px;
            height: 40px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
        }
        span {
            margin-left: 10px;
        }
    }
`;
