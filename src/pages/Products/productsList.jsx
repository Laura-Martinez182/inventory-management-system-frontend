import * as React from "react";
import { useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import { Box, Button } from "@mui/material";
import { SearchBar } from "../../components/SearchBar";
import PropTypes from "prop-types";
import productsData from "../../data/products.json";
import ProductRow from "./ProductRow";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

function ProductsList() {
  const [product, setProduct] = useState(productsData);
  const navigation = useNavigate();

  const renderProduct = () => {
    return product.map((product) => (
      <ProductRow key={product.id} product={product} />
    ));
  };

  return (
    <PageTemplate>
      <div className=" bg-white rounded shadow-md text-slate-800 shadow-slate-200 mb-10">
      <div className="p-6">
      <h1 className="text-3xl	font-bold text-left m-5">Lista de productos</h1>
      <Divider />
      </div>
        <Box
          sx={{
            my: 5,
            mx: 4,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button color="success"
            variant="contained"
            sx={{ margin: "20px" }}
            onClick={() => navigation("/new-product")}
          >
            {" "}
            Agregar producto{" "}
          </Button>
          <SearchBar />
        </Box>

        <div className="relative shadow-md sm:rounded-lg overflow-y-auto p-6">
          <table
            className="w-full text-sm text-center rtl:text-right text-gray-900 border border-collapse rounded"
            cellSpacing="0"
          >
            <thead className="text-xs text-gray-900 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Foto
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Codigo
                </th>
                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>
                <th scope="col" className="px-6 py-3">
                  Costo
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
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

ProductsList.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductsList;
