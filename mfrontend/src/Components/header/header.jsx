import { NavLink } from 'react-router-dom';
import './header.css'

import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "../../redux/slices/auth";
import React from "react";

const Header = () =>{

    const dispatch = useDispatch();
    const IsAuth = useSelector(selectIsAuth);
    
    React.useEffect(()=>{
      dispatch(fetchAuthMe());
    },[])


    return(
        <header>
            <div className='logo'>
                {/* <img src='https://sun9-50.userapi.com/impg/PT1O8BEfXqhMn9WVcensUeBtzLWdkhbymMilIQ/wusLgk1zBLc.jpg?size=56x45&quality=96&sign=122dd5ef417f3acbdbfe3fa2ff6c1e97&type=album' width='40px' height='40px'></img> */}
            </div>

            <div className='town'>г.Таганрог
            </div>
            <div className='space'>
            </div>

            <div className='menu'>
                <ul>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/catalog'>Каталог</NavLink></li>
                    <li><NavLink to='/cart'>Корзина</NavLink></li>
                    <li><NavLink to='/favorites'>Избранное</NavLink></li>
                    <li><NavLink to='/about'>О проекте</NavLink></li>
                    { IsAuth ? (<li><NavLink to='/me'>Личный кабинет</NavLink></li>):(<li><NavLink to='/auth'>Войти</NavLink></li>)}
                </ul>
            </div>
            
        </header>
    )
}
export default Header;