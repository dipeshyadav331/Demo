import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'; 
import { addToCart , removeFromCart } from './cartSlice';


function NewPage() {
    const { id } = useParams();
    const cart = useSelector(state => state.cartReducer.cart);
    const curItem = cart.find(item => item.id == id);
    const curQuantity = curItem ? curItem.quantity : 0;
    const flag = curQuantity > 0 ? false : true;
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    console.log(products[id]);
    return (
        <div>
            <h1>{products[id].title}</h1>
            <br />
            <br />
            <h2>{products[id].description}</h2>
            <br />
            <br />
            <div className="newflex">
                <img src={products[id].images[0]} alt="" />
                <img src={products[id].images[1]} alt="" />
                <img src={products[id].images[2]} alt="" />
            </div>
            <br />
            <h2>Price for this item is {products[id].price}</h2>
            <div className="buton">
                <button className='rm' onClick={() => dispatch(removeFromCart(id))}>-</button>
                {flag ? 
                    <p>Add To Cart </p> :
                    <p>{curQuantity}</p>
                }
                <button className='rm' onClick={() => dispatch(addToCart(id))}>+</button>
            </div>
        </div>
  )
}

export default NewPage