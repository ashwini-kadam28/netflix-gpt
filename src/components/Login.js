import React, { useRef, useState } from 'react'
import Header from './Header';
import { BG_IMG } from './utils/Contants';
import { checkValidateData } from './utils/validate';
import { auth } from "./utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [erroMessage, setErroMessage] = useState('');
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();

    const handleBtnClick = () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErroMessage(message);
        if (message) return;

        if (!isSignInForm) {
            //Sign up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log("", user);
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const {uid, email, displayName, pathURL} = auth;
                        dispatch(
                            addUser({
                                  uid:   uid,
                                  email: email,
                                  displayName: displayName,
                                  pathURL: pathURL
                        })
                    )
                        // Profile updated!
                       
                    }).catch((error) => {
                        setErroMessage(error.message)
                    });                   
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErroMessage(errorCode + "-" + errorMessage);

                });
        } else {
            //Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("user", user);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErroMessage(errorCode + "-" + errorMessage);
                  
                });
        }

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
                        ref={name}
                        type='text' placeholder='Name' className='p-2 my-4 w-full bg-gray-700' />   
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