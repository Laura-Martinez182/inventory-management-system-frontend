import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import NewProduct from "../pages/Products/newProduct.jsx";
import ProductsList from "../pages/Products/productsList.jsx";
import NewUser from "../pages/Users/NewUser.jsx";
import UsersList from "../pages/Users/UsersList.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/product-list" element={<ProductsList/>} />
      <Route path="/new-product" element={<NewProduct/>} />
      <Route path="/user-list" element={<UsersList/>} />
      <Route path="/new-user" element={<NewUser/>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
