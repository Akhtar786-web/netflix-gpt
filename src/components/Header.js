import React from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../Utils/userSlice';
import { Netflix_LOGO } from '../Utils/Constant';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  
  const handleSignOut=()=>{

    signOut(auth).then(() => {
      //navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      navigate("/Error");
      // An error happened.
    });
  }
  useEffect(()=>{
   const unsubcribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
       // const uid = user.uid;
        const {uid,email,displayName,photoURL} = user;
        console.log(uid);
        dispatch(addUser({uid: uid , 
          email: email, 
          displayName: displayName,
          photoURL: photoURL,
        }));
       navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });
    // unsubcribe when component Unmount
    return ()=> unsubcribe();
  },[]);
  return (
    
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
     <img className='w-44  mx-auto md:mx-0' src={Netflix_LOGO}
     alt='Netflix Logo'/>

    {user &&  (<div className='flex p-2'>
      <img className='w-12 h-12' alt='usericon' src={user?.photoURL}
      />
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
     </div>)}
    </div>
    

  );
};

export default Header;
