import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    
        {
            path: '/',
            element:<Main/>,
            children: [
                {
                    path:'/',
                    element:<Home/>
                },
                
                {
                    path: '/services',
                    element: <Services/>,
                },
                {
                    path: 'blog',
                    element: <Blog/>
                },
                {
                    path:'login',
                    element:<Login/>
                },
                {
                    path:'signup',
                    element:<Signup/>
                }
            ]
        },
        {
            path:'*',
            element: <h3>Page not found 404</h3>
        }
    
])

export default router;