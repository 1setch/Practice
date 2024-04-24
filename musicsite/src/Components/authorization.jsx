
import './authorization.css'

const Login = () =>{
    return(
        <div className='login'>
            <h1>Авторизуйтесь 
                или зарегистрируйтесь
            </h1>
            <div className='input_section'>
               <input className='input_email'></input> <br></br>
                <input className='input_pass'></input><br></br>
                <input type="checkbox" name="myCheckbox" />
                <label> Не выходить</label> <br></br>
            </div>


        </div>
    )
}
export default Login;