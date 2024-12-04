import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice'

const Body = () => {
     const dispatch = useDispatch();
     
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        },
]);
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
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
     
      // ...
    } else {
      dispatch(removeUser());
      
      // User is signed out
      // ...
    }
  });
},[]);
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
