import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Login/Login";

import TelaProducts from "./TelaProducts";

export default function App(){

    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<TelaProducts />} />
                </Routes>
        </BrowserRouter>
    )
}