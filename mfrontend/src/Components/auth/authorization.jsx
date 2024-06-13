import { Link,Navigate} from 'react-router-dom';
import './authorization.css'

import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { fetchSearch } from '../../redux/slices/searchs';




const Login = () =>{

    const IsAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const{ register,handleSubmit,  formState:{errors, isValid} } = useForm({
      // defaultValues:{
      //   email:'testmail2@maul.ru',
      //   password:'12345'
      // },
      mode: 'onChange',
  
    });
    const text={"text":"gut"};

    const onSubmit = async (values)=>{
        const data = await dispatch(fetchAuth(values));
         
        if(!data.payload){
          return alert('NE avtorizovalsya');
        }
  
        if('token' in data.payload){
          window.localStorage.setItem('token', data.payload.token);
        } 
        };
        
        if(IsAuth) return <Navigate to="/"/>
        //console.log(IsAuth);



    return(
        <div className='login'>
            <h1>Авторизуйтесь <br /> 
                или зарегистрируйтесь
            </h1>
            <div className='input_section'>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input placeholder="Введите Email" className='input_email' {...register('email', {required:'Укажите почту'})}></input> <br></br>
                <input placeholder="Введите пароль" className='input_pass' {...register('password', {required:'Укажите parol'})}></input><br></br>
                <input type="checkbox" name="myCheckbox" className='checkboxlog' />
                <label> Не выходить</label> <br></br>

                

                    <button type="submit"> Войти</button>
                <Link to={'/reg'}>

                    <div className='reg_link'><p>Нет аккаунта? Зарегистрируйтесь!</p></div>
                </Link>
                </form>
            </div>


        </div>
    )
}
export default Login;