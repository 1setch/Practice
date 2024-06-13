import React from 'react';
import axios from '../../axios';
import './Purchase.css'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Purchase = ({
    _id
}) =>{
    const [data, setData] = React.useState();
    const [isLoading, setLoading] = React.useState(true);
    const{ handleSubmit,  formState:{errors, isValid} } = useForm({
      mode: 'onChange',
    });

    React.useEffect(()=>{
        axios
        .get(`/prods/${_id}`)
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
        return <div>
        </div>;
      }
      const onSubmit = async ()=>{
        setLoading(true);
        await axios.get(`/removefromcart/${_id}`);
        console.log(`/removefromcart/${_id}`);
        
      };

    return(
        <div className='purc_card_cart'>
                
                
   
                    <div className='fsr_col'>
                      <Link to={`/prods/${_id}`}> 
                        <img className='purc_img' src={data.imageUrl}/> 
                      </Link>
                    </div>

                    <div className='scnd_col'>
                      <div className='purc_price'>{data.prodPrice}₽</div>
                      <div className='purc_title'>{data.title}</div>
                    </div>
                
                <div className='thrd_col'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <button className='del_button'>Убрать из корзины</button>
                  </form>
                </div>
               
        </div>
    )
}
export default Purchase;