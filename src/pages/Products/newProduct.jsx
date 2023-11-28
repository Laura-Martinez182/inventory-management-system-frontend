import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PageTemplate from "../../components/PageTemplate";
import Divider from "@mui/material/Divider";
import AddImageInput from "../../components/AddImageInput";

export default function NewProduct() {
  return (
    <PageTemplate>
      <Container className=" bg-white rounded shadow-md text-slate-800 shadow-slate-200 mb-10">
        <CssBaseline />
        <div className="p-6">
          <h1 className="text-3xl	font-bold text-left m-5">Nuevo producto</h1>
          <Divider />
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AddImageInput />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="product-name"
                  required
                  fullWidth
                  id="product-name"
                  label="Nombre"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="product-code"
                  label="Código"
                  name="product-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="product-category"
                  label="Categoría"
                  name="product-category"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="product-brand"
                  label="Marca"
                  id="product-brand"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="product-dimensions"
                  label="Dimensiones"
                  id="product-dimensions"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="product-description"
                  label="Descripción"
                  id="product-description"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="product-units"
                  label="Unidades"
                  id="product-units"
                  type="number"
                  min="1"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="product-cost"
                  label="Costo"
                  id="product-cost"
                  type="number"
                  min="1"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="product-price"
                  label="Precio de venta"
                  id="product-price"
                  type="number"
                  min="1"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  color="success"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Guardar
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  color="error"
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </PageTemplate>
  );
}
