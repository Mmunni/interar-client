import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/SignUp/SignUp";
import pageNotFound from "../../assets/pageNotFound/pageNotFound.jpg"
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";
import Review from "../../Pages/Review/Review";
import AddServices from "../../Pages/AddServices/AddServices";
import ReviewForm from "../../Pages/ReviewFrom/ReviewForm";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    
        {
            path: '/',
            element:<Main/>,
            children: [
                {
                    path:'/',
                    loader: () => fetch('https://interar-server.vercel.app/services'),
                    element:<Home/>

                },
                
                {
                    path: '/services',
                    loader: () => fetch('https://interar-server.vercel.app/servicesAll'),
                    element: <Services/>,
                },
                {
                    path: '/services/:id',
                    loader: ({params}) => fetch(`https://interar-server.vercel.app/services/${params.id}`),
                    element: <ServicesDetails/>,
                },
                {
                    path: 'blog',
                    element: <Blog/>
                },
                {
                    path: 'review',
                    element: <PrivateRoute><Review/></PrivateRoute>
                },
                {
                    path: '/reviewform/:id',
                    element: <PrivateRoute><ReviewForm/></PrivateRoute>,
                    loader: ({params})=> fetch(`https://interar-server.vercel.app/services/${params.id}`)
                },
                {
                    path: 'addservices',
                    element: <PrivateRoute><AddServices/></PrivateRoute>
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