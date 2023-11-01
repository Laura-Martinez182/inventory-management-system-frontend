import * as React from 'react';
import {useState } from 'react'
import PageTemplate from "../../components/PageTemplate";
import { Box, Button } from "@mui/material";
import { SearchBar } from "../../components/SearchBar";
import PropTypes from "prop-types";

import productsData from "../../data/products.json";
import ProductRow from "./ProductRow";
import NewProduct from './newProduct';

function ProductList() {
  const [product, setProduct] = useState(productsData);

  

  const renderProduct = () => {
    return product.map((product) => (
      <ProductRow key={product.id} product={product} />
    ));
  };

  return (
    <PageTemplate>
      <h1 className="text-4xl	font-bold text-left m-5">Lista de productos</h1>
      <Box
        sx={{
          my: 5,
          mx: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button variant="contained" sx={{ margin: "20px" }}>
          {" "}
          Agregar producto{" "}
        </Button>
        <SearchBar />
      </Box>

      <div
        className={
          "flex-col items-center align-center justify-center w-[70vw] drop-shadow-lg rounded-lg m-3 overflow-y-scroll"
        }
      >
        <table
          className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Foto
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Nombre
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Codigo
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Cantidad
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Costo
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Precio
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Fecha
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Acciones
              </th>
            </tr>
            {renderProduct()}
          </tbody>
        </table>
      </div>
    </PageTemplate>
  );
}

ProductList.propTypes = {
  person: PropTypes.object.isRequired,
};

export default ProductList;
