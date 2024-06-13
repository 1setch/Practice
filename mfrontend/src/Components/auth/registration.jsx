//import { Link } from 'react-router-dom';
import './authorization.css'

import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { fetchAuth, fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";


const Regist = () =>{

    const IsAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const{ register,handleSubmit,  formState:{errors, isValid} } = useForm({
      // defaultValues:{
      //   fullName:'Биба боб',
      //   email:'testmail22@maul.ru',
      //   password:'1234'
      // },
      mode: 'onChange',
  
    });
  
    const onSubmit = async (values)=>{
      const data = await dispatch(fetchRegister(values));
  
      if(!data.payload){
        return alert('Пароль должен быть не меньше 5 символов');
      }
  
      if('token' in data.payload){
        window.localStorage.setItem('token', data.payload.token);
      } 
  };
  
  if(IsAuth) return <Navigate to="/"/>
  console.log(IsAuth);







    return(
        <div className='login'>
            <h1>Авторизуйтесь 
                или зарегистрируйтесь
            </h1>
            <div className='input_section'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Введите ваше имя" className='input_fullName' {...register('fullName', {required:'Укажите полное имя'})}></input> <br></br>
                <input placeholder="Введите Email" className='input_email' {...register('email', {required:'Укажите почту'})}></input> <br></br>
                <input placeholder="Введите пароль" className='input_pass' {...register('password', {required:'Укажите parol'})}></input><br></br>
                
                
                
                    <button type="submit" className='reg_btn'> зарегистрироваться</button>
            </form>  
            </div>


        </div>
    )
}
export default Regist;