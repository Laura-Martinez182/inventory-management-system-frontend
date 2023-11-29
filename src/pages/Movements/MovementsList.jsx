import * as React from "react";
import { useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

function MovementsList() {
  const [movement, setMovement] = useState([]);
  const navigation = useNavigate();

  // const renderProduct = () => {
  //   return product.map((product) => (
  //     <ProductRow key={product.id} product={product} />
  //   ));
  // };

  return (
    <PageTemplate>
      <div className=" bg-white rounded shadow-md text-slate-800 shadow-slate-200 mb-10">
        <div className="p-6">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <h1 className="text-4xl font-bold text-left m-5">
                Lista de movimientos
              </h1>
            </Grid>

            <Grid xs={12} sm={4} padding={6}>
              <Button
                color="success"
                variant="contained"
                onClick={() => navigation("/new-movement")}
              >
                Agregar movimiento
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
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Descripción
                </th>
                <th scope="col" className="px-6 py-3">
                  Tipo de movimiento
                </th>
                <th scope="col" className="px-6 py-3">
                  Unidades
                </th>
              </tr>
            </thead>
            <tbody> </tbody>
          </table>
        </div>
      </div>
    </PageTemplate>
  );
}

MovementsList.propTypes = {
  movement: PropTypes.object.isRequired,
};

export default MovementsList;
