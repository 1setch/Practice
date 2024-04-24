import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () =>{
    return(
        <header>
            <div className='logo'>
                <img src='https://sun9-50.userapi.com/impg/PT1O8BEfXqhMn9WVcensUeBtzLWdkhbymMilIQ/wusLgk1zBLc.jpg?size=56x45&quality=96&sign=122dd5ef417f3acbdbfe3fa2ff6c1e97&type=album' width='40px' height='40px'></img>
            </div>

            <div className='town'>г.Таганрог
            </div>
            <div className='space'>
            </div>

            <div className='menu'>
                <ul>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/shops'>Магазины</NavLink></li>
                    <li><NavLink to='/delivery'>Доставка</NavLink></li>
                    <li><NavLink to='/about'>О нас</NavLink></li>
                    <li><NavLink to='/contacts'>Контакты</NavLink></li>
                    <li><NavLink to='/login'>Личный кабинет</NavLink></li>
                </ul>
            </div>
            
        </header>
    )
}
export default Header;