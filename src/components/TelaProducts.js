import { useNavigate } from "react-router-dom" 
import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import userContext from "../contexts/usercontexts"


import logo from "../assets/imgs/logo.png"

export default function TelaProducts(){

    const { userData, setUserData } = useContext(userContext)

    const [ products, setProducts ] = useState([])
    return(
        <ScreenProcuts>
            <Cabecalho />
            <SubTitulo />
            <Produtos products={products} setProducts={setProducts} token={userData}/>
        </ScreenProcuts>

    )
}


function Cabecalho(){
    const navigate = useNavigate()
    return(
        <Header>
            <ion-icon name="person-outline" onClick={() => navigate("/sign-in")}></ion-icon>
            <img src={logo} alt="logo BestByte" />
            <ion-icon name="cart-outline" onClick={() => navigate("/cart")}></ion-icon>
        </Header>

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

function Produtos({products, setProducts, token}){
    useEffect(() => {
        const url = "https://back-bestbyte.herokuapp.com/products"
        const promise = axios.get(url)
        promise.then(response => {
            const {data} = response
            setProducts(data)
        })
        
        promise.catch( (err) => {
            console.log(`Erro ${err.response.status}, ${err.data.message}`)
        })
    }, [])
    console.log(products)
    return(
        <>
                <ListProducts>
                    {products.map((product) => <Products image={product.image} name={product.name} price={product.price} key={product._id} token={token}/>)}
                </ListProducts>
        </>
    )
    
}

function Products({image, name, price, token}){


    function addCarrinho(){
            const url = "https://back-bestbyte.herokuapp.com/cart"
            const config = {
                headers:{
                    Authorization: token
                }
            }
            const promise = axios.post(url, {
                image: image,
                name: name,
                price: price
            }, config)
            promise.then( response => {
                console.log('then test')
                const {data} = response
                console.log(data)
            })
            promise.catch(console.log('catch test'))
        }
        console.log(token)
    return(
        <Product>
            <Image>
                <img src={image} alt="imagem do produto" />
            </Image>
            <Infos>
                <h1>{name}</h1>
                <h2>R$ {price.toFixed(2)}</h2>
                <button onClick={() => addCarrinho()}>Adcionar ao carrinho</button>
            </Infos>
        </Product>
    )
}


const ScreenProcuts = styled.div`
    background-color: #212121;

    width: 100%;
    min-height: 100vh;
`

const Header = styled.div `
    background-color: #212121;
    color: white;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 80px;

    ion-icon{
        width: 24px;
        height: 30px;
        cursor: pointer;
    }

`

const SubTitle = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 10px;
    padding-left: 22px;
    gap: 5px;
    /* position: relative; */

    p{
        color: #008a9e;
        font-family: 'Roboto';
        font-size: 14px;
    }
    h1{
        color: white;
        font-family: 'Roboto';
        font-size: 25px;
        font-weight: 700;
    }
`

const ListProducts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 12px;
    margin-top: 20px;

`

const Product = styled.div`
    background-color: #2a2a2a;
    height: 150px;
    width: 88%;
    border-radius: 22px;
    display: flex;
    align-items: center;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
    margin-bottom: 10px;
    `

const Image = styled.div`
    background-color: #333333;
    height: 136px;
    min-width: 136px;
    width: 136px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-right: 8px;
    
    img{
        max-height: 100%;
        max-width: 100%;
    }
    `

const Infos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: 'Roboto';
    
    h1{
        color: white;
        font-size: 16px;
        
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 14px;
    }
    
    h2{
        font-size: 24px;
        font-weight: 700;
        color: #009e2a;
        padding-bottom: 14px;
    }

    button{
        background-color: #008a9e;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: 700;

        border: none;
        border-radius: 5px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    
        width: 100%;
        height: 20px;
    }
    `