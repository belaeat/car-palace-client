import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import Blog from "../pages/Blog/Blog";
import AddToy from "../pages/AddToy/AddToy";
import MyToy from "../pages/MyToy/MyToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'sign-up',
            element: <SignUp></SignUp>
        },
        {
          path: 'all-toys',
          element: <AllToys></AllToys>
        },
        {
          path: 'add-toy',
          element: <AddToy></AddToy>
        },
        {
          path: "my-toys",
          element: <MyToy></MyToy>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);


export default router;