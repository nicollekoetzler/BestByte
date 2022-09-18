import styled from "styled-components";

export default function Checkout() {

    return (
        <>
            <TopBar>
                <ion-icon name="person-outline"></ion-icon>
                <img src="../image/logo.png"/>
                <ion-icon name="cart-outline"></ion-icon>
            </TopBar>
            <CheckoutComponents>
                <PurchaseSummary>
                    <h1>Resumo da compra</h1>
                    <h6>Processador Intel Core i5-10400, 2.9GHZ</h6>
                    <p>R$ 1.189,00</p>
                </PurchaseSummary>
                <FinalizePurchase>
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
                        <div>
                            <h1>Total:</h1>
                            <p>R$ 1.189,90</p>
                        </div>
                        <button>Comprar</button>
                    </form>
                </FinalizePurchase>
            </CheckoutComponents>
        </>
    );
}

const TopBar = styled.div`
    width: 100%;
    height: 80px;
    background-color: #212121;

    display: flex;
    justify-content: space-around;
    align-items: center;

    position: fixed;
    top: 0;

    ion-icon {
        width: 25px;
        height: 25px;
        color: white;

        cursor: pointer;
    }
`

const CheckoutComponents = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #212121;
    font-family: 'Roboto';
    color: white;
    padding-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const PurchaseSummary = styled.div`
    width: 85%;
    height: 50px;
    margin-top: 60px;
    
    h1 {
        font-weight: 700;

        display: flex;
        justify-content: center;

        padding-bottom: 20px;
    }

    h6 {
        padding-bottom: 5px;
    }

    p {
        color: #4682b4;
    }
`

const FinalizePurchase = styled.div`
    width: 85%;
    height: 540px;
    background-color: #2a2a2a;
    margin-top: 50px;

    border: 1px solid #4F4D4D;
    border-radius: 15px;
    box-shadow: 1px 1px 6px black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: 700;
        padding: 20px;
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
    }

    input {
        height: 35px;
        border: 1px solid #0F9C18;
        border-radius: 8px;
        background-color: #272727;
        color: white;
        padding-left: 15px;

        margin: 15px 0;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: #0F9C18;
            font-weight: 700;
        }
    }

    button {
        height: 50px;
        background-color: #0F9C18;
        border: 0;
        border-radius: 20px;

        color: white;
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: 700;

        cursor: pointer;
    }
`