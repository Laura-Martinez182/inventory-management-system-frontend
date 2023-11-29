import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PageTemplate from "../../components/PageTemplate";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../config/axios";

function NewProduct({ addProduct }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");
  const [units, setUnits] = useState(0);
  const [cost, setCost] = useState(0.0);
  const [price, setPrice] = useState(0.0);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const navigation = useNavigate();

  const product = useSelector((state) => state.product.productEdit);

  useEffect(() => {
    initializeFields();
  }, []);

  const initializeFields = () => {
    //traerse las opciones del back y setearlas en selects
    //cada cosa está asociada con id, y mandar el post/put con ese id

    if (product != null) {
      setName(product.name);
      setCode(product.code);
      setCategory(product.category);
      setDimensions(product.dimensions);
      setBrand(product.brand);
      setUnits(product.unitsAvailable);
      setCost(product.cost);
      setPrice(product.sellingPrice);
      setDescription(product.description);
    }
  };

  const onSubmit = () => {
    if (product != null) {
      //edit
    } else {
      //add
    }
  };

  // const dispatch = useDispatch()

  const addProductSubmit = () => {
    let product = {
      name,
      code,
      category,
      brand,
      dimensions,
      description,
      units,
      cost,
      price,
    };
    addProduct(product);
    //dispatch(setProductEdit({name:"", code:"", category:"", brand:"", dimensions:"", description:"", units:"", cost:"", price:""}))
  };

  return (
    <PageTemplate>
      <Container className="bg-white rounded shadow-md text-slate-800 shadow-slate-200">
        <CssBaseline />
        <div className="p-6">
          <h1 className="text-4xl	font-bold text-left m-5">Nuevo producto</h1>
          <Divider />
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ m: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="product-name"
                  required
                  fullWidth
                  id="product-name"
                  label="Nombre"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="product-code"
                  label="Código"
                  name="product-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="product-category"
                  label="Categoría"
                  name="product-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="product-brand"
                  label="Marca"
                  id="product-brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="product-dimensions"
                  label="Dimensiones"
                  id="product-dimensions"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="product-description"
                  label="Descripción"
                  id="product-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
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
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    color="success"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={onSubmit}
                  >
                    Guardar
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    color="error"
                    onClick={() => navigation("/product-list")}
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </PageTemplate>
  );
}

NewProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default NewProduct;
