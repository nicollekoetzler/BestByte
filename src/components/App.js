import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Login/Login";
import { useState } from 'react'

import TelaProducts from "./TelaProducts";
import TelaCart from "./TelaCart";
import TelaCheckout from "./TelaCheckout";

import UserContext from "../contexts/usercontexts.js"

export default function App(){

    const [userData, setUserData] = useState({})

    return(
        <BrowserRouter>
            <UserContext.Provider value = {{ userData, setUserData }}>
                <Routes>
                    <Route path="/" element={<TelaProducts />} />
                    <Route path="/cart" element={<TelaCart />} />
                    <Route path="/checkout" element={<TelaCheckout />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}