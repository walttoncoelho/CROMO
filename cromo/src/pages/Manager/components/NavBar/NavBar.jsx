// import './NavBar.css'
import {
    ContainerNavBar,
    DivLogo,
    DivSaudacao,
    NomePessoa,
    ContainerBotoes
} from './style/NavBar'
import { BotaoNormal, BotaoTransparente } from '../Buttons/Buttons'
import { useNavigate } from "react-router-dom";

export default NavBar
function NavBar() {
    let navigate = useNavigate();

    let logout = function (event) {
        event.preventDefault();
        localStorage.clear("token");
        navigate("/manager");
    }
    let redirectToSite = function (event) {
        event.preventDefault();
        navigate("/");
    }
    let { nome } = {
        nome: "Waltton Coelho",
    };
    return (
        <>
            <ContainerNavBar>
                <DivLogo>
                    <img src="./logo.svg" alt="" />
                </DivLogo>
                <DivSaudacao>
                    <NomePessoa>Olá, <strong>{nome}</strong></NomePessoa>
                </DivSaudacao>
                <ContainerBotoes>
                    <BotaoTransparente onClick={logout}>Sair</BotaoTransparente>
                    <BotaoNormal onClick={redirectToSite}>Ir para o site</BotaoNormal>
                </ContainerBotoes>
            </ContainerNavBar>
        </>
    )
}