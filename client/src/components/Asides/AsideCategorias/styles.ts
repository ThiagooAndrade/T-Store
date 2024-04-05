import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    height: 100%;

    header {
        .backToAsideHambuger {
            color: white;
            cursor: pointer;
        }
        padding: 1rem;
        background-color: #211915;
        display: flex;

        justify-content: space-between;
        align-items: center;
        h2 {
            color: #fff;
            font-size: 1.5rem;
        }
        img {cursor: pointer;}
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        height: 3rem;
        a {
            text-decoration: none;
            color: black;
        }
    }
`;
