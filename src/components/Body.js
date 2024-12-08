
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { RouterProvider } from 'react-router-dom'
 import Browse from './Browse'
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../Utils/firebase';
// import { useDispatch } from 'react-redux'
// import { addUser, removeUser } from '../Utils/userSlice'

const Body = () => {
     
     
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

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
