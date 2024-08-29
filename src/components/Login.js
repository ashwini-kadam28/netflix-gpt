import React, { useRef, useState } from 'react'
import Header from './Header';
import { BG_IMG } from './utils/Contants';
import { checkValidateData } from './utils/validate';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [erroMessage, setErroMessage] = useState('');
    const email = useRef(null);
    const password = useRef(null);

    const handleBtnClick = () => {
        setErroMessage(checkValidateData(email.current.value, password.current.value));
    }
    const toggleSignInForm = () => {

        setIsSignInForm(!isSignInForm)
    }
    return (
        <div className='relative'>
            <Header />
            <div className='absolute h-screen w-screen bg-black'>

                {/* <img src="../img/bg_img.jpg" alt="bg" /> */}
            </div>

            <div >
                <form onClick={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black text-wrap my-36 mx-auto right-0 left-0 rounded bg-white/50'>
                    <h1>  {isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                    {!isSignInForm && <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />}
                    <input
                        ref={email}
                        type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
                    <input
                        ref={password}
                        type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />

                    <p className='py-4 text-red-700 font-bold text-sm'>{erroMessage}</p>
                    <button placeholder='Password' className='p-2 my-4 w-full bg-red-700'
                        onClick={handleBtnClick}
                    >
                        {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </button>
                    <p className='py-4 cursor-pointer text-sm' onClick={toggleSignInForm}>
                        <span className='block'>New to Netflix? Sign Up Now</span>
                        <span className='block'>Already registered? Sign In Now</span>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default Login;