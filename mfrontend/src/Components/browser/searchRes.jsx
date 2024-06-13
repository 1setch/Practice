import React from 'react';
import { useSelector } from 'react-redux';
import ProdCard from '../home/prodCard';
//import companyLogo from '../../img/55268-1-1.jpg';
import './browser.css'
import Browser from './browser';



const SearchRes = () =>{
    const searchs =useSelector(state=>state.searchs)
   // console.log(searchs.searchs.items);
    const isProdsLoading = searchs.searchs.status ==='loading';

    return(
        <>
        <Browser/>
        <div>
            <div className='cat_page1'>
            <p> По запросу найдено:</p>
               {/* <div className='cat_page2'>
                    <div className='search_attributes'></div> */}
                    <div className='cat_page'>
                    {( isProdsLoading ? [...Array(8)] : searchs.searchs.items ).map((obj, index) => 
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
               {/* </div> */}
                
            </div>
        </div>
        </>
    )
}
export default SearchRes;