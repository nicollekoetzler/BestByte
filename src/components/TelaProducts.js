import { useNavigate } from "react-router-dom" 
import styled from "styled-components"


<<<<<<< HEAD
import logo from "../assets/imgs/logo.png"
=======
import logo from "../assets/imgs/logo.bestbyte.svg"
>>>>>>> 60b70823bf071cfbf00f0901d8ec4f3722dc9bca

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
            <ion-icon name="person-outline" onClick={() => navigate("/login")}></ion-icon>
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

    img{
        width: 50px;
        height: 50px;
    }

`