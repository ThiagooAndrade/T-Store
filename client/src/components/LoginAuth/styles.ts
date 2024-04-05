import styled from "styled-components";


export const Container = styled.form`
    padding: 0 1.25rem;  
`

export const InputLogin = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3 {
        text-align: center;
        font-style: italic;
        font-size: 1rem;
        font-weight: 700;
    }
    a {
        text-align: end;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        input {
            padding: 0 1rem;
            height: 3.25rem;
            background: #F8F8F8;
            
            font-family: "Montserrat", sans-serif;
            font-size: 0.875rem;
            border: 1px solid rgba(0,0,0, 0.1);
            border-radius: 0.25rem;
            &::placeholder {
                font-style: italic;
                color: rgba(0,0,0, 0.4);
                font-weight: 500;
            }
        }
    }
`