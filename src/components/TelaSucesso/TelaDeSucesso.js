import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function() {

    const navigate = useNavigate();

    return (
        <ScreenComponents>
            <img src="../image/sucesso.svg"/>
            <p>Compra realizada com sucesso!</p>
            <h1 onClick={() => navigate("/")}>Vontar para tela inicial</h1>
        </ScreenComponents>
    );
}

const ScreenComponents = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #212121;
    font-family: 'Roboto';
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 50%;
    }

    p {
        color: #0F9C18;
        font-weight: 700;
        margin: 20px 0;
    }

    h1 {
        font-weight: 400;
        font-size: 14px;
        cursor: pointer;
    }
`