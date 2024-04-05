import styled from "styled-components";

export const Container = styled.div`
    background-color: #f5f5f5;
    height: 4rem;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 2rem;
    div {
        h2 {
            font-style: italic;
        }
    }
    .img {
        width: 30px;
        height: 30px;
    }
`;
