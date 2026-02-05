import { createBrowserRouter } from "react-router-dom";
import LoginPage from '../src/page/loginPage';
import RegisterPage from '../src/page/registerPage';
import ListPage from "../src/page/ListPage";
import CardStackDemo from "../src/page/CardStackDemo";

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
    },
    {
        path: "/cards",
        element: <CardStackDemo />
    }
]);

export default router;