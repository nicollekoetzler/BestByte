import styled from 'styled-components';
import logo from "../assets/imgs/logo.png"
import { Link, useNavigate } from 'react-router-dom';

export default function TelaCheckout(){

    const navigate = useNavigate()

    return(
        <>
            <Container>
                <Header>
                    <ion-icon name="person-outline" onClick={() => navigate("/sign-in")}></ion-icon>
                    <img src={ logo } />
                    <ion-icon name="cart-outline" onClick={() => navigate("/cart")}></ion-icon>
                </Header>
                <PurchaseInfo>
                    <h1>Resumo da sua compra, nome.</h1>
                    <h3>Processador Intel Core i5-10400, 2.9GHZ</h3>
                    <p>R$1.189,90</p>
                </PurchaseInfo>
                <Purchase>
                    <h1>Finalizar compra</h1>
                    <form>
                    <label>
                            Nome Completo
                            <input 
                                id="formName" 
                                type="text" 
                                required
                            />
                        </label>
                        <label>
                            Endereço
                            <input  
                                id="formEndereco" 
                                type="text"
                                required
                            />
                        </label>
                        <label>
                            CPF
                            <input  
                                id="formCPF" 
                                type="number"
                                required
                            />
                        </label>
                        <label>
                            Dados do cartão
                            <input  
                                id="formCartao" 
                                type="number"
                                required
                            />
                        </label>
                        <Value>
                            <h3>Total:</h3>
                            <h4>R$1.189,90</h4>
                        </Value>
                        <button onClick={() => navigate("/success")}>Comprar</button>
                    </form>
                </Purchase>
            </Container>
        </>
    )
}

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #212121;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    width: 100%;
    height: 98px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    ion-icon {
        color: white;
        height: 28px;
        width: 28px;

        cursor: pointer;
    }
`

const PurchaseInfo = styled.div`
    color: white;
    font-family: 'Roboto';

    h1 {
        font-weight: bold;
        font-size: 20px;
        padding-top: 30px;
        padding-bottom: 40px;
        width: 100%;
        text-align: center;
    }

    h3 {
        align-items: baseline;
        text-align: left;
        font-size: 18px;
    }

    p {
        align-items: baseline;
        text-align: left;
        font-size: 18px;
        color: #008a9e;
    }
`

const Purchase = styled.div`
    width: 85%;
    height: 100%;
    background-color: #2a2a2a;
    margin-top: 50px;

    border: 1px solid #4F4D4D;
    border-radius: 15px;
    box-shadow: 1px 1px 6px black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;

    h1 {
        font-family: 'Roboto';
        font-weight: bold;
        font-size: 20px;
        padding:  20px 0;
    }

    form {
        width: 85%;
        height: 80%;
        margin: 5px 0;

        display: flex;
        flex-direction: column;
    }

    label {
        display: flex;
        flex-direction: column;
        
        font-family: 'Roboto';
    }

    input {
        height: 35px;
        border: 1px solid #0F9C18;
        border-radius: 8px;
        background-color: #272727;

        margin: 15px 0;
    }

    button {
        height: 60px;
        background-color: #0F9C18;
        border: none;
        border-radius: 28px;
        margin:  20px 0;

        color: white;
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 700;

        cursor: pointer;
    }

    p {
        color: white;
        font-size: 12px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`

const Value = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: bold;

    h4 {
        color: #0F9C18;
    }
`