import React from 'react';
import './favor.css'

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe , selectIsAuth,} from '../../redux/slices/auth';
import { fetchProds } from '../../redux/slices/prods';
import Purchase from '../cart/Purchase';
import PurchaseFavor from './Purchase-favor';
//import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

const Cart = () =>{
    
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(fetchProds());
        dispatch(fetchAuthMe());
    
      },[]);

    const data =useSelector(state=>state.auth);
    const isUserLoaded = data.status ==='loading';
    //console.log( data.userData.cart);
    if(isUserLoaded)return(
        <div className='favorbody2'>
            <h1>Избранное</h1>
            
        </div>
    )

    return(
        <div className='favorbody'>
            <h1>Избранное</h1>
            <div className='favor_grid'>
                <div className='favor_prod_section'>
                {isUserLoaded?isUserLoaded:data.data.userData.favorites.map((obj, index) => 
                isUserLoaded? 
                (
                <PurchaseFavor />
                ):(
                    <PurchaseFavor
                    _id={obj}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}
export default Cart;



