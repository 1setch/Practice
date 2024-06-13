import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import './prodPage.css'
import { useForm } from "react-hook-form";
import axios from '../../axios';
import CharactItem from './charactItem';
import Review from './review';
import Browser from '../browser/browser';
import { selectIsAuth } from '../../redux/slices/auth';



const ProdPage = () =>{
    const [data, setData] = React.useState();
    const [isLoading, setLoading] = React.useState(true);
    const id = useParams();
    const IsAuth = useSelector(selectIsAuth);
    const{ handleSubmit,  formState:{errors, isValid} } = useForm({
        mode: 'onChange',
      });
    console.log(id.id);
    

    React.useEffect(()=>{
        axios
        .get(`/prods/${id.id}`)
        .then((res)=>{
          setData(res.data);
          setLoading(false);
        })
        .catch((err)=>{
          console.warn(err);
          alert('ошибка получения статьи')
        })
      },[]);
       

      if(isLoading){
        return <div className='prodbody'>
        </div>;
      }

      

      const onSubmit = async ()=>{

        if(IsAuth)await axios.patch(`/addtocart/${id.id}`);
    
      };
      const onSubmit2 = async ()=>{
        if(IsAuth)await axios.patch(`/addtofavorites/${id.id}`);
    
      };
      let icon_img='https://sun9-48.userapi.com/impg/TGgXEGKKl_f92WAnwE-I_KJO45-iN-dXJcGs7Q/gxAR_0goDkY.jpg?size=50x50&quality=96&sign=bd51d5ee73e76071ac0687b9dabdd9a2&type=album';
      let icon_img2='https://sun9-51.userapi.com/impg/eHs8fTUuvycPnTABAmEZ9-cQX3h83cBxSedY1A/IHIVBQmhCaw.jpg?size=42x37&quality=96&sign=1e9b6398dc0810af8bfb6b0d68ef0041&type=album';
      let icon_img3 ='https://sun9-48.userapi.com/impg/TGgXEGKKl_f92WAnwE-I_KJO45-iN-dXJcGs7Q/gxAR_0goDkY.jpg?size=50x50&quality=96&sign=bd51d5ee73e76071ac0687b9dabdd9a2&type=album';
      const changeImg = ()=>{
        icon_img=icon_img3;
        icon_img3=icon_img2;
        icon_img2=icon_img;
        console.log(icon_img3);
        
      }

    return(
       <>
<Browser/>
<div className='prodbody'>


<div className='prod_title_body'>
  <div className='prod_title11'>{data.title}</div>
  <img className='prod_title_img' src='https://sun9-63.userapi.com/impg/fugzxU3-8eI-wSmNSV-tFFZROaUjGFmnHeKobA/CkUQupxyLa0.jpg?size=415x24&quality=96&sign=d58428cf90b3ab1d09fea2802c0bb519&type=album'/> 
  
</div>



<div className='prod_description'>

    <div className='prod_img_section'>
      <img className='prod_description_img' src={data.imageUrl}/> 
      <form onSubmit={handleSubmit(onSubmit2)}>
        <button className='fav_icon' >
          <img  src={icon_img3}/>
        </button>
      </form>
    </div>


    <div className='right_column'>
      <div className='buy_section'>
        <div className='prod_price1'>{data.prodPrice}₽</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button className='buy_button'>В корзину</button>
        </form>
        {/* <form onSubmit={handleSubmit(onSubmit2)}>
          <button className='buy_button'>В Избранное</button>
        </form> */}
        
      </div>
      <div className='prod_text'>
        <p>{data.text}</p>
        </div>
    </div>


{/*               
    <div className=''>{data.category}</div> */}

    
</div>


<div className='сharacteristics'>
  <h3>Характеристики</h3>
  <hr/>
      {/* {data.сharacteristics.map(function(сharacteristics){
        return(<div>
          <CharactItem 
            grif={сharacteristics.grif}
            strings={сharacteristics.strings}
            frets={сharacteristics.frets}
          />
        </div>)
      })}    */}
{( isLoading ? [...Array(2)] : data.сharacteristics ).map((obj, index) => 
  isLoading? 
  (
    <CharactItem  key = {index}/>
  ):(
    <CharactItem 
    grif={obj.grif}
    strings={obj.strings}
    frets={obj.frets}
    country={obj.country}
      
      />
  ))}
      
</div>
<div className='review_section'>
  <h3>Отзывы о товаре</h3>
  <hr/>



</div>
<div>
  
  {data.reviews.map((obj)=>{return(
  <div className='review_section'>
    <Review
      text={obj.text}
      orderRate={obj.orderRate}
      userName={obj.userName}
      avatarUrl={obj.avatarUrl}
    />
  </div>)})}
</div>



</div>
       </>
    )
}
export default ProdPage;




