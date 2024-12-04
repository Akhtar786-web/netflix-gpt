import React, { useRef, useState } from 'react'
import Header from './Header'
import CheckvalidateData from '../Utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);

  const [errorMesage,setErrorMesage]=useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef();
  

  const handleOnClick =()=>{
    // if(!isSignInForm)
    // {
    const message = CheckvalidateData(email.current.value,password.current.value,"Invalid");
  

    
    setErrorMesage(message);
    if(message) return;

    if(!isSignInForm)
    {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://img.freepik.com/premium-photo/cinema-logo-movie-emblem-template-movie-production-logo-film-camera-logo-template-film-strip-ci_1041545-4853.jpg"
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      
      dispatch(addUser({uid: uid , 
        email: email, 
        displayName: displayName,
        photoURL: photoURL,
      }));
      navigate("/browse");
      // Profile updated!
      // ...
    }).catch((error) => {
      setErrorMesage(error);
      // An error occurred
      // ...
    });
    console.log(user);
    navigate("/browse");

    
    // ...
  }

)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMesage(errorCode +"-"+ errorMessage);
    navigate("/");
    // ..
  });
    }
    else
    {
      //Sign In Logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMesage(errorCode +"-"+ errorMessage);
    navigate("/");
  });
    }

    //Sign In / Sign Up
    //
   // }
    // else
    // {
    //   const message = CheckvalidateData(email.current.value,password.current.value,"Invalid");
    // console.log(email.current.value);
    // console.log(password.current.value);
    // //console.log(name.current.value);
    // console.log(message);
    // setErrorMesage(message);
    // }
  }

  return (
    <div>
     <Header />
     <div className=' absolute'>
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg" 
      alt='Logo'/>
     </div>
     <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 bg-opacity-80 rounded-lg text-white'>
        <div className='text-3xl text-white font-bold mb-8'>{isSignInForm ? "Sign In" : "Sign Up"}</div>
        {!isSignInForm && <input ref={name}  type='text' placeholder='Full Name' className='p-4 my-2 bg-gray-800 w-full bg-opacity-60 rounded-lg'/>}
        <input type='text' ref={email} placeholder='Email or phone number' className='p-4 my-2 bg-gray-800 w-full bg-opacity-60 rounded-lg'/>
        
        <input type='password' ref={password} placeholder='Password' className='p-4 my-2 bg-gray-800 w-full bg-opacity-60 rounded-lg'/>
        <p className='text-red-500'>{errorMesage}</p>
        <button className='p-4 my-2 bg-red-600 text-white w-full rounded-lg' onClick={handleOnClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        
      <p className='p-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered Sign In Now"} </p>
     </form>
    </div>
  )
}

export default Login
