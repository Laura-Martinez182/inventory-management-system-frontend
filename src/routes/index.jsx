import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import NewProduct from "../pages/Products/newProduct.jsx";
import ProductsList from "../pages/Products/productsList.jsx";
import NewUser from "../pages/Users/NewUser.jsx";
import UsersList from "../pages/Users/UsersList.jsx";
import MovemenstList from "../pages/Movements/MovementsList.jsx";
import NewMovement from "../pages/Movements/NewMovements.jsx";
import Reports from "../pages/Reports/Reports.jsx";
import ChartLine from "../pages/Reports/LineChart.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/product-list" element={<ProductsList/>} />
      <Route path="/new-product" element={<NewProduct/>} />
      <Route path="/user-list" element={<UsersList/>} />
      <Route path="/new-user" element={<NewUser/>} />
      <Route path="/inventory" element={<MovemenstList/>} />
      <Route path="/new-movement" element={<NewMovement/>} />
      <Route path="/reports" element={<Reports/>} />
      <Route path="/line-chart" element={<ChartLine/>} />
      <Route path="/bar-chart" element={<ChartLine/>} />
      <Route path="/pie-chart" element={<ChartLine/>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
