import { createBrowserRouter } from "react-router-dom";
import LoginPage from '../src/page/loginPage';
import RegisterPage from '../src/page/registerPage';
import ListPage from "../src/page/ListPage";

const router=createBrowserRouter(
[
    {
        path:"", //ruta que se carga por defecto
        element: <RegisterPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/list",
        element: <ListPage />
    }
]);

export default router;