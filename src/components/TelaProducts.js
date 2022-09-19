import { useNavigate } from "react-router-dom" 
import styled from "styled-components"
import logo from "../assets/imgs/logo.png"

export default function TelaProducts(){
    return(
        <div className="products-screen">
            <Header />
        </div>
    )
}


function Header(){
    const navigate = useNavigate()
    return(
        <header>
            <ion-icon name="person-outline" onClick={() => navigate("/sign-in")}></ion-icon>
            <img src={logo} alt="logo BestByte" />
            <ion-icon name="cart-outline" onClick={() => navigate("/cart")}></ion-icon>
        </header>

    )
}




const header = styled.div `
    background-color: #303030;
    color: #FFFFFF;
    font-size: 22px;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100vh;

    img {
        width: 50px;
        height: 50px;
    }

`