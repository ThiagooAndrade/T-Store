import { Container } from "./styles";

export function NewsLetter() {
    return (
        <Container>
            <header>
                <h2>Receba nossa newsletter</h2>
                <p>
                    <span>Assine</span> a nossa <span>newsletter</span> e receba
                    as novidades e conteúdos exclusivos da
                    <span> Integralmédica.</span>
                </p>
            </header>
            <form>
                <div>
                    <input type="text" placeholder="Seu nome" />
                    <input type="email" placeholder="E-mail" />
                    <div>
                        <input type="checkbox" />
                        <p>Aceito os termos e condições</p>
                    </div>
                </div>
                <button type="submit">Inscreva-se</button>
            </form>
        </Container>
    );
}
