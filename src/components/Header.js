import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import { DataContext } from './Context';
function Header() {

     const [menu, setMenu] = useState(false);
     const value =useContext(DataContext)
     const [cart] = value.cart
     const toggleMenu = () => {
          setMenu(!menu);
     }

     const styleMenu = {
          right: menu ? 0 : "-100%"
     }

  return (
    <header>
         <div className="cart-icon">
              <span>{cart.length}</span>
              <Link to="/cart">
                    <FaShoppingBag />
              </Link>
         </div>
         <ul style={styleMenu}>
              <li><Link to="/">خانه</Link></li>
              <li><Link to="/Products">محصولات</Link></li>
              <li><Link to="/">درباره ما</Link></li>
              <li><Link to="/">تماس با ما</Link></li>
              <li><Link to="/">ثبت نام / ورود</Link></li>
               <li><img src={Close} width="30" className='menu' onClick={toggleMenu} /></li>
         </ul> 
         <div className="logo">
              <Link to="/">Google</Link>
         </div>
         <div className="menu" onClick={toggleMenu}>
              <img src={Menu} width="30" alt="" onClick={toggleMenu} />
         </div>
    </header>

  )
}

export default Header