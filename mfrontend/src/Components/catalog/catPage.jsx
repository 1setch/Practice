import React from 'react';
//import companyLogo from '../../img/55268-1-1.jpg';

import './catPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../redux/slices/prods';
import ProdCard from '../home/prodCard';
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import axios from '../../axios';
import Browser from '../browser/browser';

const CatPage = ({
}) =>{
    // const dispatch = useDispatch();
    const [data, setData] = React.useState();
    const [isLoading, setLoading] = React.useState(true);
    const id = useParams();
    console.log(id.id);
    

    React.useEffect(()=>{
        axios
        .get(`/category/${id.id}`)
        .then((res)=>{
          setData(res.data);
          setLoading(false);
        })
        .catch((err)=>{
          console.warn(err);
          alert('ошибка получения статьи')
        })
      },[]);
       
      console.log(data);
      if(isLoading){
        return <div className='cat_page'>
        </div>;
      }
    
    
  
    // React.useEffect(()=>{
    //   dispatch(fetchCategory());
    // },[]);
    // const prods =useSelector(state=>state.prods)
    // const isProdsLoading = prods.status ==='loading';
    // console.log(prods);

    return(
       <>
       <Browser/>
        <div className='cat_page1'>
        <h1>{id.id}</h1>
                <div className='cat_prod_section1'>
                 {( isLoading ? [...Array(5)] : data ).map((obj, index) => 
                 isLoading? 
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
export default CatPage;