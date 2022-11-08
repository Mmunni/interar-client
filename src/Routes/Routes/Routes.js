import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";

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
                // {
                //     path:'login',
                //     element:<Login/>
                // },
                // {
                //     path:'signup',
                //     element:<Signup/>
                // },
                // {
                //     path: '/checkout/:id',
                //     element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                //      loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
                // },
                // {
                //     path: 'orders',
                //     element: <PrivateRoute><Orders/></PrivateRoute>
                // }
            ]
        },
        {
            path:'*',
            element: <h3>Page not found 404</h3>
        }
    
])

export default router;