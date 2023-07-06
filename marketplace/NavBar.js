import React from 'react'
import {AiFillShopping , AiOutlineShoppingCart} from 'react-icons/ai';
import { useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const select = useSelector(state => state.cartReducer.cart);

    let count = 0;
    select.forEach(item => count += item.quantity);
    
    let flag = count > 0 ? true : false;

    function fn(){
        navigate('/home');
    }
    return (
        <nav className='NavBar'>
            <div className="right">
                <div onClick = {fn} className="left">
                    <AiFillShopping size = {20} className='woulditwork'/>
                    <h1 style={{marginTop : '5px'}}>DiZone</h1>
                </div>
                <div className="leftflex">
                    <AiOutlineShoppingCart size = {25} className='itworks'/>
                    {  count ? 
                        <h2 style={{marginTop : '5px'}}>{count}</h2> : 
                        <p></p>
                    }    
                </div>
            </div>
        </nav>
  )
}

export default NavBar