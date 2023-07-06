import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { fetchData } from './productSlice';
import SingleProduct from './SingleProduct';
import NewPage from './NewPage';
import {Routes , Route} from "react-router-dom";

function ProductList() {
    const dispatch = useDispatch();
    
    useEffect( () => { 
        dispatch(fetchData())
    } , [])
    
    const products = useSelector(state => state.productReducer.products);
    const status = useSelector(state => state.productReducer.status);

    if(status === 'Loading'){
        return <h1>Loading....</h1>
    }
    
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<div className='griid'>{products.map((item) => <SingleProduct props={item} />)}</div>} />
                <Route path="*" element={<div className='griid'>{products.map((item) => <SingleProduct props={item} />)}</div>} />
                <Route path="/items/:id" element={<NewPage />} />
            </Routes>
        </div>
    )
}

export default ProductList