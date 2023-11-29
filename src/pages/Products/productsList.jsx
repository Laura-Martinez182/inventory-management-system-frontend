import * as React from "react";
import { useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import productsData from "../../data/products.json";
import ProductRow from "./ProductRow";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Divider from "@mui/material/Divider";
import Cookies from "js-cookie";
import axios from "../../config/axios";
import { useDispatch } from "react-redux";
import { setProductEdit, clearProductEdit } from "../../redux/reducers/productEditSlice";
import Grid from "@mui/material/Grid";

function ProductsList() {
  const [products, setProducts] = useState(productsData);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const getProducts = async () => {
    var token = Cookies.get("token-access");

    var response = await axios.get("/products/", {
      headers: { authorization: "Bearer " + token },
    });

    setProducts(response.data);
    console.log(response.data);
  };

  const onEditProduct = (product) => {
    dispatch(setProductEdit(product));
    navigation("/new-product");
  };

  const onButtonAddProductClick = () => {
    dispatch(clearProductEdit());
    navigation("/new-product")
  }

  const renderProduct = () => {
    return products.map((product) => (
      <ProductRow
        key={product.code}
        product={product}
        onEditProduct={onEditProduct}
      />
    ));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <PageTemplate>
      <div className=" bg-white rounded shadow-md text-slate-800 shadow-slate-200 mb-10">
        <div className="p-6">
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item xs={8} sm={8}>
              <h1 className="text-4xl font-bold text-left m-5">
                Lista de productos
              </h1>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button
                color="success"
                variant="contained"
                onClick={() => onButtonAddProductClick()}
              >
                Agregar producto
              </Button>
            </Grid>
          </Grid>
          <Divider />
        </div>

        <div className="relative shadow-md sm:rounded-lg overflow-y-auto p-6">
          <table
            className="w-full text-sm text-center rtl:text-right text-gray-900 border border-collapse rounded"
            cellSpacing="0"
          >
            <thead className="text-xs text-gray-900 uppercase bg-emerald-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Código
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Costo
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio de venta
                </th>
                <th scope="col" className="px-6 py-3">
                  Unidades
                </th>
                <th scope="col" className="px-6 py-3">
                  Categoria
                </th>
                <th scope="col" className="px-6 py-3">
                  Marca
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>{renderProduct()}</tbody>
          </table>
        </div>
      </div>
    </PageTemplate>
  );
}

export default ProductsList;
