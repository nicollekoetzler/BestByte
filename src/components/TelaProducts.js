import { useNavigate } from "react-router-dom" 
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"


import logo from "../assets/imgs/logo.png"

export default function TelaProducts(){
    const [ products, setProducts ] = useState([])
    return(
        <ScreenProcuts>
            <Cabecalho />
            <SubTitulo />
            <Produtos products={products} setProducts={setProducts}/>
        </ScreenProcuts>

    )
}


function Cabecalho(){
    const navigate = useNavigate()
    return(
        <>
            <Header>
                <ion-icon name="person-outline" onClick={() => navigate("/login")}></ion-icon>
                <img src={logo} alt="logo BestByte" />
                <ion-icon name="cart-outline" onClick={() => navigate("/cart")}></ion-icon>
            </Header>
        </>

    )
}

function SubTitulo(){
    return(
        <>
            <SubTitle>
                <p>PRODUTOS</p>
                <h1>Mais vendidos</h1>
            </SubTitle>
        </>
    )
}

function Produtos({products, setProducts}){
    useEffect(() => {
        const url = "http://localhost:5000/products"
        const promise = axios.get(url)
        promise.then(response => {
            const {data} = response
            setProducts(data)
        })
        promise.catch( err => {
            console.log(`Erro ${err.response.status}, ${err.data.message}`)
        })
    }, [])
    console.log(products)
    return(
        <>
                <ListProducts>
                    {products.map((product) => <Products image={product.image} name={product.name} price={product.price} key={product._id} />)}
                </ListProducts>
        </>
    )
    
}

function Products({image, name, price}){
    console.log(image)
    console.log(name)
    console.log(price)
    return(
        <Product>
            <Image>
                <img src={image} alt="imagem do produto" />
            </Image>
            <Infos>
                <h1>{name}</h1>
                <h2>R$ {price.toFixed(2)}</h2>
                <button>Adcionar ao carrinho</button>
            </Infos>
        </Product>
    )
}

// function AddCarrinho(){
//     const url = "http://localhost:5000/cart"
    
// }



const ScreenProcuts = styled.div`
    background-color: #212121;

    width: 100%;
    height: 100vh;
    padding: 12px;
`

const Header = styled.div `
    background-color: #212121;
    color: #FFFFFF;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    position: fixed;

    img{
        width: 200px;
    }

    ion-icons{
        width: 24px;
        height: 24px;
    }

`


const SubTitle = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 70px;
    gap: 5px;
    position: relative;

    p{
        color: #008a9e;
        font-family: 'Roboto';
        font-size: 12px;
    }
    h1{
        color: #FFFFFF;
        font-family: 'Roboto';
        font-size: 25px;
    }
`

const ListProducts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 80%;
    gap: 12px;
    position: relative;

`

const Product = styled.div`
    background-color: #2a2a2a;

    display: flex;

    border-radius: 16px;
    box-shadow: 0px 4px 5px 6px #00000026;

    width: 100%;
    height: 150px;
    padding: 12px;
    gap: 8px;
    position: absolute;

    
    `

const Image = styled.div`
    background-color: #333333;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 16px;
    
    width: 136px;
    height: 136px;
    
    img{
        width: 100px;
        height: 100px;
    }
    `

const Infos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    h1{
        color: #FFFFFF;
        font-family: 'Roboto';
        font-size: 18px;
        
        display: flex;
        flex-wrap: wrap;
    }
    
    h2{
        color: #0F9C18;
        font-family: 'Roboto';
        font-size: 22px;
        
        display: flex;

    }
    button{
    background-color: #008a9e;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-size: 12px;
    
    border: none;
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
        width: 200px;
        height: 20px;
    }
    `