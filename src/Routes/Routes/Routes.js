import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/SignUp/SignUp";
import pageNotFound from "../../assets/pageNotFound/pageNotFound.jpg"
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";

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
                    loader: () => fetch('http://localhost:5000/services'),
                    element: <Services/>,
                },
                {
                    path: '/services/:id',
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                    element: <ServicesDetails/>,
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
            element: <img className="mx-auto" src={pageNotFound} alt="" />
        }
    
])

export default router;