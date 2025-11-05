import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Login/Login";
import Register from "../Login/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path:'',
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    element:<CategoryNews></CategoryNews>,
                    loader: () => fetch('/news.json')
                },
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children : [
                {
                    path:'/auth/login',
                    element: <Login></Login>
                },
                {
                    path:'/auth/register',
                    element: <Register></Register>
                },
            ]
        },
        {
            path: '/news',
            element: <h2>News Layout</h2>
        },
        {
            path: '/*',
            element: <h2>Error404</h2>
        },
    ]
)

export default router