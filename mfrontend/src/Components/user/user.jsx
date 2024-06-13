import React from 'react';
import { fetchAuthMe, logout } from '../../redux/slices/auth';
import './user.css'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const UserInfo = ({
  _id,
  fullName,
  avatarUrl,
  address,
  email
}) =>{
  const dispatch = useDispatch();

  const onClickLogout = () => {
      if(window.confirm('Are you sure?')){
        dispatch(logout());
        window.localStorage.removeItem('token');
      }
    };
      


    return(
      <div className='userinfo'>
          <div className='avatar_section'>
            <img className='user_img' src={avatarUrl}/> 
          
            <div className='user_name'>
              <h2>{fullName}</h2>
              <p>редактировать профиль</p>
              
            </div>
            <Link to={'/'}><button onClick={onClickLogout} type="submit" className='logout_btn'> Выйти из аккаунта</button></Link>
          </div>
          
          {/* <div className='user_address'>{address}</div>
          <div className='user_email'>{email}</div>   */}
      </div>

    )
}
export default UserInfo;




