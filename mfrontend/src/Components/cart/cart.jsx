import React from 'react';
import './cart.css'
import Purchase from './Purchase';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe , selectIsAuth,} from '../../redux/slices/auth';
import { fetchProds } from '../../redux/slices/prods';
//import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

const Cart = () =>{
    let cart_weight;
    const dispatch = useDispatch();
    const IsAuth = useSelector(selectIsAuth);
    React.useEffect(()=>{
        dispatch(fetchProds());
        dispatch(fetchAuthMe());
    
      },[]);

    const data =useSelector(state=>state.auth);
    const isUserLoaded = data.status ==='loading';
    //console.log( data.userData.cart);
    //if(data.data==undefined)return(<div className='cartbody2'></div>)

    if(!IsAuth)return(<div className='cartbody'><h1>Корзина</h1>
    <div className='auth_message'>Авторизуйтесь</div></div>)    

    return(
        <div className='cartbody'>
            <h1>Корзина</h1>
            <div className='cart_grid'>
                <div className='prod_section'>
                    <div className='prod_card_list'>
                    {isUserLoaded?[...Array(5)]:data.data.userData.cart.map((obj, index) => 
                    isUserLoaded? 
                    (
                    <Purchase _id={obj} />
                    ):(
                        <Purchase
                        _id={obj}
                        />
                    )
                    // {if(isUserLoaded)return(<Purchase _id={obj} />)
                    //  else {
                    //     cart_weight+=obj.;
                    //     return()
                    //  }}
                    )}</div>
                    <div className='order_section'>
                        <p>Итого: </p>
                        <button className='order_btn'>
                            Перейти к оформлению
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;



