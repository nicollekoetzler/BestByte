import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Login/Login";
import { useState } from "react";

import TelaProducts from "./TelaProducts";

export default function App(){
    const [token, setToken] = useState('');

    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login setToken={setToken}/>} />
                    <Route path="/" element={<TelaProducts token={token}/>} />
                </Routes>
        </BrowserRouter>
    )
}