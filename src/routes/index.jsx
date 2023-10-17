import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login.jsx";
//import ProductList from "../pages/ProductList.jsx";


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router