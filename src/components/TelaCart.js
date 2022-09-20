import styled from 'styled-components';
import logo from "../assets/imgs/logo.png"
import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/usercontexts.js"



export default function TelaCart(){

    const URL = "https://back-bestbyte.herokuapp.com/cart";
    const navigate = useNavigate();

    const { userData, setUserData } = useContext(UserContext);

    const [ userName, setUserName ] = useState();
    const [ productsInfo, setProductsInfo ] = useState([]);

    const [ valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData}`
            }
        }

        const promise = axios.get(URL, config)
    
        promise.then( res => {
            setUserName(res.data.name)
            setProductsInfo(res.data.products)
            setValorTotal(calculaValorTotal(res.data.products))
        })

    },[])

    function calculaValorTotal(products){
        let total = 0
        for( let i = 0; i < products.length ;i++ ){
            total += Number(products[i].price)
        }
        return total
    }

    return(
        <>
            <BackContainer>
                <Header>
                    <Link to='/sign-in'>
                        <ion-icon name="person-outline" onClick={() => navigate("/sign-in")}></ion-icon>
                    </Link>
                    <Link to='/'>
                        <img src={ logo } />
                    </Link>
                        <ion-icon name="cart-outline" onClick={() => navigate("/cart")}></ion-icon>
                </Header>
                <WhiteContainer>
                    <h1>Seu carrinho de compras, {userName}!</h1>
                    { 
                        productsInfo.length > 0 
                        ?
                        productsInfo.map( product => {
                            return(
                                <ProductContainer>
                                    <ImageContainer><img src={product.image} alt={ product.name }/></ImageContainer>
                                    <DescriptionContainer>
                                        <p>{ product.name }</p>
                                        <h3>R$ { Number(product.price).toFixed(2) }</h3>
                                    </DescriptionContainer>
                                </ProductContainer>
                            )
                        })
                        :
                        <h2>Seu carrinho está vazio :(</h2>
                    }

                    <Total>
                        <h3>Total:</h3>
                        <h3>R$ { valorTotal.toFixed(2)}</h3>
                    </Total>
                    <button onClick={() => navigate("/checkout")}>
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
`

const Header = styled.div`
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 14px 0px 10px 0px;

    ion-icon {
        color: white;
        height: 28px;
        width: 28px;

        cursor: pointer;
    }
`

const WhiteContainer = styled.div`
    width: 100%;
    min-height: 88%;
    background-color: #eaeaea;
    border-radius: 34px 34px 0px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;

h1 {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
}

h2 {
    font-family: 'Roboto';
    color: gray;
    font-weight: 500;
    font-size: 16px;
    padding-top: 40px;
    padding-bottom: 40px;
}

button {
    background-color: #009e2a;
    height: 60px;
    width: 88%;
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 50px;
    border: none;

    cursor: pointer;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    img {
        background-color: #eaeaea;
        max-height: 100%;
        max-width: 100%;
    }
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
    padding: 12px 0 22px 0;

    h3 {
        font-family: 'Roboto';
        font-size: 22px;
        font-weight: bold;
    }
`