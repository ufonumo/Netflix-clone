import React , {useState , useRef} from 'react';
import './login.scss'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () =>{
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        setpassword(passwordRef.current.value);
    };

    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                     
                </div>
            </div> 

            <div className="container">
                <form action="">
                    <h1>Sign In</h1>

                    <input type="email" placeholder='Email or Phone number' />
                    <input type="password" placeholder='Password' />
                    <button  className='loginBtn'>Sign In</button>

                    <span>New to Netflix?  <b>Sign up now. </b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
            
        </div>
    )
}

export default Login
