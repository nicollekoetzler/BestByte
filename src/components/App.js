import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TelaProducts from "./TelaProducts";
import TelaCart from "./TelaCart";
import TelaCheckout from "./TelaCheckout";

export default function App(){

    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaProducts />} />
                    <Route path="/cart" element={<TelaCart />} />
                    <Route path="/checkout" element={<TelaCheckout />} />
                </Routes>
        </BrowserRouter>
    )
}