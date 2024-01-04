import React, { useState, useRef } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { bg_img, login_icon } from '../utils/constants';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormessage, setErrorMessage] = useState('');

    const mail = useRef(null);
    const Password = useRef(null);
    const dispatch=useDispatch();

    const togglesignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleClick = () => {


        const message = checkValidData(mail.current.value, Password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {

            // Sign Up form

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                

                    updateProfile(user , {
                        displayName: name , photoURL:login_icon
                      }).then(() => {

                        // Profile updated!
                        const {uid, name, displayName}=auth.currentUser;
                        dispatch(addUser({
                            uid:uid,
                            name:name,
                            displayName:displayName,
                            photoURL:login_icon 
                        }))

                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                      });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                });


        } else {

            // Sign In form

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
              
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }
    }
    return (
        <>
            <Header />
            <div className="absolute">
                <img src={bg_img} alt="backgroundimage" className='h-screen object-cover md:h-max' />
            </div>

            <div className="w-full login-form absolute md:w-1/3 mx-auto right-0 left-0 my-28 md:my-36 bg-black bg-opacity-80  h-fit md:h-screen">
                <form onSubmit={(e) => e.preventDefault()} className="mx-10 my-4 md:my-16 text-white">
                    <h3 className='font-bold text-3xl px-3 mb-2 '>{isSignInForm ? "Sign In" : "Sign Up"}</h3>
                    {!isSignInForm && <input type='text' name="name" placeholder=" enter your name" value={name} onChange={(e) => setName(e.target.value)} className="m-2 p-2 md:p-4 w-3/4 md:w-full rounded-lg bg-gray-700 ml-2" />}

                    <input type='text' ref={mail} name="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Email or Phone" className="m-2 p-2 md:p-4 w-3/4 md:w-full rounded-lg bg-gray-700 ml-2" />
                    <input type='password' ref={Password} name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter Password" className="m-2 p-2 md:p-4 w-3/4 md:w-full rounded-lg bg-gray-700 ml-2" />
                    <p className="text-red-500 font-medium m-2 ">{errormessage}</p>

                    <button className='block p-2 md:p-4 m-2 bg-red-600 w-3/4 md:w-full rounded-lg ml-2' onClick={handleClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <input type="checkbox" name="remember me" className='m-2' /><p className="inline-block">Remember me</p>
                    <p className="m-2 p-2 underline cursor-pointer" onClick={togglesignInForm}>{isSignInForm ? "New to netfilx? Signup Now" : " Already Registered ? Sign In now..."}</p>
                </form>
            </div>
        </>
    )
}

export default Login;

