import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TelaProducts from "./TelaProducts";
import TelaCart from "./TelaCart";

export default function App(){

    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaProducts />} />
                    <Route path="/cart" element={<TelaCart />} />
                </Routes>
        </BrowserRouter>
    )
}