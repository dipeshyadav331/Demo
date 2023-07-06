import React from 'react'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart , removeFromCart } from './cartSlice';
import { useNavigate } from 'react-router-dom';

function SingleProduct(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(state => state.cartReducer.cart);
    const curItem = cart.find(item => item.id == props.props.id);
    const curQuantity = curItem ? curItem.quantity : 0;
    const flag = curQuantity > 0 ? false : true;

    function fun(){
        navigate(`/items/${props.props.id}`)
    }

    return (
    <div key = {props.props.id} className="singleItem">
        <div className = "curs" onClick={fun} >
            <img src={props.props.images[1]} alt="No image" />
            <p>{props.props.title}</p>
            <p>Price : {props.props.price}</p>
        </div>
        <div className="buton">
            <button className='rm' onClick={() => dispatch(removeFromCart(props.props.id))}>-</button>
            {flag ? 
                <p>Add To Cart </p> :
                <p>{curQuantity}</p>
            }
            <button className='rm' onClick={() => dispatch(addToCart(props.props.id))}>+</button>
        </div>
    </div>
  )
}

export default SingleProduct