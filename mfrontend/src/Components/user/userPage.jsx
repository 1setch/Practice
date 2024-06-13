import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './user.css'
import { fetchAuthMe, logout } from '../../redux/slices/auth';
import { Link } from 'react-router-dom';
import UserInfo from './user';
import Browser from '../browser/browser';
// import { fetchProds } from '../../redux/slices/prods';
// //import axios from '../../axios';
// import ProdCard from './prodCard';
// //import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const UserPage = () =>{
    const dispatch = useDispatch();

    const onClickLogout = () => {
        if(window.confirm('Are you sure?')){
          dispatch(logout());
          window.localStorage.removeItem('token');
        }
      };

    //   const [isLoading, setLoading] = React.useState(true);
    //     React.useEffect(()=>{
    //         dispatch(fetchAuthMe());
            
    //       },[]);


      const data =useSelector(state=>state.auth);
      const isUserLoaded = data.status ==='loading';
      

    //   if(isLoading){
    //     return <div className='homebody'></div>;
    //   }
      


    return(
        <div>
            {/* <h1> Личный кабинет </h1>
            */}
            
            

            <Browser/>



            {/* <UserInfo 
              _id = {data.data.userData._id}
              fullName = {data.data.userData.fullName}
              email= {data.data.userData.email}
              avatarUrl = {data.data.userData.avatarUrl}
              address = {data.data.userData.address} 
            /> */}
            
             <div className='userbody'>

             {isUserLoaded? 
            (
            <UserInfo />
            ):(
                <UserInfo
                _id = {data.data.userData._id}
                fullName = {data.data.userData.fullName}
                email= {data.data.userData.email}
                avatarUrl = {data.data.userData.avatarUrl}
                address = {data.data.userData.address} 
                
                />
            )}
            <div className='history_section'>
              <h2>История заказов</h2>
              <hr />
              Вы ничего не заказывали
            </div>


              {/* <Link to={'/'}><button onClick={onClickLogout} type="submit" className='logout_btn'> Выйти из аккаунта</button></Link> */}
             </div>

        </div>

    )
}
export default UserPage;




