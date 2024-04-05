import { FormEvent } from "react";
import { Container, InputLogin } from "./styles";



export function LoginAuth() {
    function enviarFormulario(event: FormEvent) {
        event.preventDefault()
    }


    return <Container onSubmit={enviarFormulario}>
        <InputLogin>
            <h3>Entrar com email e senha</h3>
            <div>
                <input type="email" placeholder="Ex.: exemplo@mail.com" />
                <input type="password" placeholder="Adicione sua senha" />
            </div>
            <a href="http">Esqueci minha senha</a>
            <div>
                <button type="submit">Entrar</button>
                <a href="http">Não tem uma conta? Cadastre-se</a>
            </div>
        </InputLogin>
    </Container>
}