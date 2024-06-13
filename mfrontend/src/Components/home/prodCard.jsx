import React from 'react';
//import companyLogo from '../../img/55268-1-1.jpg';

import './prodCard.css'
import { Link } from 'react-router-dom';


const ProdCard = ({
    _id,
    title,
    prodPrice,
    imageUrl
}) =>{

    return(
        <div className='prod_card'>
                
                
                <Link to={`/prods/${_id}`}> 
                    <img className='prod_img' src={imageUrl}/> 
                    <div className='prod_price'>{prodPrice}₽</div>
                    <div className='prod_title'>{title}</div>
                </Link>
        </div>
    )
}
export default ProdCard;