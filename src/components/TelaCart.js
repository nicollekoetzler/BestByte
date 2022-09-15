import styled from 'styled-components';
import logo from "../assets/imgs/logo.png"

export default function TelaCart(){
    return(
        <>
            <BackContainer>
                <Header>
                    <img src={ logo } />
                </Header>
                <WhiteContainer>
                    <h1>Seu carrinho de compras</h1>
                    <ProductContainer>
                        <ImageContainer></ImageContainer>
                        <DescriptionContainer>
                            <p>Processador Intel Core i5-10400, 2.9GHZ</p>
                            <h3>R$1.189,90</h3>
                        </DescriptionContainer>
                    </ProductContainer>
                    <ProductContainer>
                        <ImageContainer></ImageContainer>
                        <DescriptionContainer>
                            <p>Processador Intel Core i5-10400, 2.9GHZ</p>
                            <h3>R$1.189,90</h3>
                        </DescriptionContainer>
                    </ProductContainer>
                    <Total>
                        <h3>Total:</h3>
                        <h3>R$2.379,80</h3>
                    </Total>
                    <button>
                        <p>Ir para o pagamento</p>
                    </button>
                </WhiteContainer>
            </BackContainer>
        </>
    )
}

const BackContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #212121;
    position: relative;
`

const Header = styled.div`
    width: 100%;
    height: 12%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const WhiteContainer = styled.div`
    width: 100%;
    height: 88%;
    background-color: #eaeaea;
    position: absolute;
    bottom: 0;
    border-radius: 34px 34px 0px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;

h1 {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

button {
    background-color: #009e2a;
    height: 60px;
    width: 88%;
    position: absolute;
    bottom: 0;
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 50px;
    border: none;
}
`

const ProductContainer = styled.div`
    background-color: #f7f7f7;
    height: 150px;
    width: 88%;
    border-radius: 22px;
    display: flex;
    align-items: center;
    padding: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-bottom: 10px;
`

const ImageContainer = styled.div`
    background-color: #eaeaea;
    height: 136px;
    min-width: 136px;
    width: 136px;
    border-radius: 16px;
`

const DescriptionContainer = styled.div`
    font-family: 'Roboto';
    margin-left: 8px;

    p {
        font-size: 18px;
        padding-bottom: 14px;
    }

    h3 {
        font-size: 24px;
        font-weight: bold;
        color: #009e2a;
    }
`

const Total = styled.div`
    width: 88%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    padding-bottom: 132px;

    h3 {
        font-family: 'Roboto';
        font-size: 24px;
        font-weight: bold;
    }
`