

import { useForm } from "react-hook-form";
import './browser.css'
import { useDispatch,useSelector } from "react-redux";
import { fetchAuth, fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from '../../axios';
import SearchRes from "./searchRes";
import { fetchSearch,selectSearch } from "../../redux/slices/searchs";


const Browser = () =>{
    const IsSearch = useSelector(selectSearch);
    const dispatch = useDispatch();
    const{ register,handleSubmit,  formState:{errors, isValid} } = useForm({
        defaultValues:{
        },
        mode: 'onChange',
    
      });
      

      let navigate=useNavigate();
      const onSubmit = async (values)=>{
         dispatch(fetchSearch(values));
        navigate('/search-request');
       
    };
   

    return(
        <div className='browserbody'>

            <Link to={'/catalog'}>
                <button className="cat_btn">Каталог</button>
            </Link>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Искать что-нибудь" type="search" className='input_text' {...register('text', {required:'Укажите полное имя'})}></input> <br></br>
                    <button className="search_btn" type="submit" > Поиск</button>
                </form>  
                
        </div>
    )
}
export default Browser;
