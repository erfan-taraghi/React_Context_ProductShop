import React from 'react'
import Details from './components/Details';
import Products from './components/Products';
import Cart from "./components/Cart"
function Content() {
    return (
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default Content