import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/Layout/MainLayout";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

const router=createBrowserRouter([
    {path:'/',
        element:<MainLayout/>,
        children:[
            { 
            index:true,
            element:<Home/>

            },
            {
             path:'/cart',
             element:<Cart/>

            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'Register',
                element:<Register/>
            }
        ]
    }
    

]);
export default router;