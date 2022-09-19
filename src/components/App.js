import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Login/Login";
import { useState } from 'react';
import TelaCart from "./TelaCart";
import TelaCheckout from "./TelaCheckout";
import TelaProducts from "./TelaProducts";
import UserContext from "../contexts/usercontexts.js"
import TelaDeSucesso from "./TelaSucesso/TelaDeSucesso";

export default function App(){
    const [token, setToken] = useState('');

    const [userData, setUserData] = useState({})

    return(
        <BrowserRouter>
            <UserContext.Provider value = {{ userData, setUserData }}>
                <Routes>
                    <Route path="/" element={<TelaProducts token={token}/>} />
                    <Route path="/cart" element={<TelaCart />} />
                    <Route path="/checkout" element={<TelaCheckout />} />
                    <Route path="/sign-in" element={<Login setToken={setToken}/>} />
                    <Route path="/success" element={<TelaDeSucesso />}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}