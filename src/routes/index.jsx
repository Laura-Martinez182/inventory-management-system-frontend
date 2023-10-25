import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import ProductList from "../pages/Products/productsList.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/productList" element={<ProductList />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
