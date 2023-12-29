
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES, login_icon, netflix_logo } from '../utils/constants';
import Gptsearch from './Gptsearch';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
// import { Link } from 'react-router-dom';
// <nav>
// <Link to="/">Login</Link>
// <Link to="/Browse">Browse</Link>
// </nav>


const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch= useSelector(store =>store.gpt.showGptSearch)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
const unsubscribe =    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    
     return ()=>unsubscribe();
  } , []);
   

  const handleGpt=()=>{
    dispatch(toggleGptSearchView())
  }

  const handleClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });

  }

  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  
  return (
    <>
      <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
        <img
          className=" w-44" src={netflix_logo} alt="logoimage" />
        <div className="flex">
          {user && <>
          { showGptSearch && <select className="w-24 h-10 m-4 p-2 bg-gray-700 text-white" onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
            }
            
            </select> }

            <button onClick={handleGpt} className="bg-red-500 p-2 m-2 px-4 text-xl text-white rounded-lg">{showGptSearch ? "Go Home" : "GPT Search"}</button> 
          <button className='m-2 bg-red-500 p-2 m-2 px-4 text-xl text-white rounded-lg' onClick={handleClick}>Signout</button></>}
          <img className=" w-14 h-14 m-2 rounded-lg" src={user?.photoURL} alt="usericon" />
          </div>
      </div>

    </>
  )
}

export default Header;
