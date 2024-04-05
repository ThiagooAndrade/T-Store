import styled from "styled-components";

export const Container = styled.div`
    h2 {
        text-align: center;
        font-style: italic;
    }

    .slide {
        margin-bottom: 30px;
    }

    .swiper-pagination-bullet {
        background: red;
        padding: 0 1rem;
        height: 3px;
        border-radius: 0;
    }

    .swiper-pagination-bullet-active {
        background: red;
        padding: 0 1rem;
        height: 5px;
        border-radius: 0;
    }
`;
