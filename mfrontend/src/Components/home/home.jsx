import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './home.css'
import { fetchProds } from '../../redux/slices/prods';
//import axios from '../../axios';
import ProdCard from './prodCard';
import { fetchAuthMe } from '../../redux/slices/auth';
import Browser from '../browser/browser';
//import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Home = () =>{
    
    
  
    const dispatch = useDispatch();
    const prods =useSelector(state=>state.prods)

    const isProdsLoading = prods.status ==='loading';
    
  
    const data = React.useEffect(()=>{
      dispatch(fetchProds());
      dispatch(fetchAuthMe());
  
    },[]);
    

    return(
       <>
        <Browser/>
        <div className='homebody'>
            {/* <h1> Товары</h1>
            

        <div className='fstrow'> 
            {( isProdsLoading ? [...Array(5)] : prods.prods.items ).map((obj, index) => 
            isProdsLoading? 
            (
            <ProdCard key = {index}/>
            ):(
                <ProdCard
                _id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl}
                prodPrice={obj.prodPrice}
                
                />
            ))}
        </div> */}
        
        <h1> Товары недели </h1>
        <div className='scndrow'> 
        {( isProdsLoading ? [...Array(5)] : prods.prods.items.slice(0,4) ).map((obj, index) => 
            isProdsLoading? 
            (
            <ProdCard key = {index}/>
            ):(
                <ProdCard
                _id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl}
                prodPrice={obj.prodPrice}
                
                />
            ))}
             </div>

             <h2> Все товары </h2>
        <div className='scndrow'> 
        {( isProdsLoading ? [...Array(5)] : prods.prods.items.slice(4,14) ).map((obj, index) => 
            isProdsLoading? 
            (
            <ProdCard key = {index}/>
            ):(
                <ProdCard
                _id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl}
                prodPrice={obj.prodPrice}
                
                />
            ))}
             </div>
        </div>
       </>
    )
}
export default Home;


