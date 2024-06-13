import React from 'react';
//import companyLogo from '../../img/55268-1-1.jpg';

import './catElem.css'
import { Link } from 'react-router-dom';


const CatElem = ({
    title,
    imageUrl
}) =>{

    return(
        <div className='cat_elem_body'>
                
                
                <Link to={`/catalog/${title}`}> 
                    <img className='cat_elem_img' src={imageUrl}/> 
                    <div className='cat_elem_title'>{title}</div>
                </Link>
        </div>
    )
}
export default CatElem;