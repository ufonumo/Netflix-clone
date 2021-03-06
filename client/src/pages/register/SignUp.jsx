import React , {useState , useRef} from 'react';
import './signup.scss'

const SignUp = () => {
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
        <div className='signup'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    
                    <button className="loginbtn">
                        Sign In
                    </button>
                </div>
            </div> 

            <div className="container">
                <h1>Unlimited movies, TV shows, and more. </h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {!email ? (

                    <div className="input">
                        <input ref={emailRef} type="email" name="" placeholder='Email address' id="" />
                        <button onClick={handleStart} className="signupBtn">Get started</button>
                    </div>
                ) :  (
                    <form className="input">
                        <input ref={emailRef} type="password" placeholder='Password' ref={passwordRef} />
                        <button onClick={handleFinish} className="signupBtn">Start </button>
                    </form>
                )}
            </div>
            
        </div>
    )
}

export default SignUp
