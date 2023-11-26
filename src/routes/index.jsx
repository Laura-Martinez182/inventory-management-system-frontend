import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import NewProduct from "../pages/Products/newProduct.jsx";
import ProductsList from "../pages/Products/productsList.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/product-list" element={<ProductsList/>} />
      <Route path="/new-product" element={<NewProduct/>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
