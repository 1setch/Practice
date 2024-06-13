import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './catalog.css'
import { fetchProds } from '../../redux/slices/prods';
//import axios from '../../axios';
import { fetchAuthMe } from '../../redux/slices/auth';
import CatElem from './catElem';
import Browser from '../browser/browser';
//import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Catalog = () =>{
    
    
  
    // const dispatch = useDispatch();
    // const prods =useSelector(state=>state.prods)

    // const isProdsLoading = prods.status ==='loading';
    
  
    // const data = React.useEffect(()=>{
    //   dispatch(fetchProds());
    //   dispatch(fetchAuthMe());
  
    // },[]);


    return(
        <>
        <Browser/>
        <div className='catalogbody'>
            <h1> Каталог</h1>
            <div className='ccat_section'> 
                <CatElem 
                imageUrl={"https://www.rediez.ru/im/gitars/electro/6/x1m.jpg"}
                title={"Электрогитары"}
                />
                <CatElem 
                imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXH4f4UV3X_8zN3sGFjqNwH5n7_lgS3Mipg&s"}
                title={"Ударные"}
                />
                <CatElem 
                imageUrl={"https://studio-evolution.com/images/microphones/gallery-microphones-big-3.webp"}
                title={"Микрофоны"}
                />
                <CatElem 
                imageUrl={"https://cdnmedia.220-volt.ru/content/products/608/608562/images/original/n1200x800_q80/1.jpeg"}
                title={"Наушники"}
                />
            </div>
            

        </div>
        </>
    )
}
export default Catalog;


