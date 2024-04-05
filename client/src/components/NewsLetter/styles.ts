import styled from "styled-components";

export const Container = styled.div`
    background: red;
    header {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        color: white;
        h2 {
            font-style: italic;
            font-size: 1.5rem;
            font-weight: 700;
        }
        p {
            font-size: 0.875rem;
            text-align: center;
            span {
                font-weight: 600;
            }
        }
    }
    form {
        padding: 0 1.5rem;
        div {
            display: flex;
            flex-direction: column;
            input {
                padding: 0 2rem;
                height: 3rem;
                border-radius: 0.25rem;
                border: 0;
                & + input {
                    margin-top: 0.75rem;
                }

                &::placeholder {
                    font-size: 0.875rem;
                    font-family: "Montserrat", sans-serif;
                    font-style: italic;
                    opacity: 0.8;
                }
            }

            div {
                padding: 0;
                display: flex;
                flex-direction: row;
                justify-content: left;
                align-items: center;
                gap: 10px;
                input[type=checkbox] {
                    position: relative;
                }
                input[type=checkbox]:before {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    top: 30%;
                    left: 0;
                    background-color:#e9e9e9;
                    border-radius: 0.25rem;
                }
                input[type=checkbox]:checked:before {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    top: 30%;
                    left: 0;
                    background-color: black;
                }
                input[type=checkbox]:checked:after {
                    content: "";
                    display: block;
                    width: 3px;
                    height: 8px;
                    border: solid white;
                    border-width: 0 2px 2px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    position: absolute;
                    top: 35%;
                    left: 6px;
                }
                p {
                    color: #fff;
                    font-size: 0.875rem;
                    font-weight: 600;
                }
            }
        }

        button[type=submit] {
            width: 100%;
            background: var(--background-dark);
            border: 0;
            border-radius: 0.25rem;
            height: 2.75rem;
            color: #fff;
            font-style: italic;
            font-weight: 600;
        }
    }
`;
