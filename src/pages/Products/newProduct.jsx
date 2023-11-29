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
import { setProductEdit, clearProductEdit } from "../../redux/reducers/productEditSlice";
import axios from "../../config/axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewProduct() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");
  const [units, setUnits] = useState(0);
  const [cost, setCost] = useState();
  const [price, setPrice] = useState();
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [pageIntent, setPageIntent] = useState("Nuevo producto")
  
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.productEdit);

  useEffect(() => {
    initializeFields();
    getCategories();
    getBrands();
  }, []);

  const initializeFields = () => {
    if (product !== undefined) {
      setName(product.name);
      setCode(product.code);
      setCategory(product.category_id);
      setDimensions(product.dimensions);
      setBrand(product.brand_id);
      setUnits(product.unitsAvailable);
      setCost(product.cost);
      setPrice(product.sellingPrice);
      setDescription(product.description);

      setPageIntent("Actualizar producto")
    }
    else{
      setPageIntent("Nuevo producto")
    }
  };

  const getCategories = async () => {

    var token = Cookies.get("token-access");

    var response = await axios.get("/categories/", {
      headers: { authorization: "Bearer " + token },
    });

    setCategories(response.data)

  }

  const getBrands = async () => {

    var token = Cookies.get("token-access");

    var response = await axios.get("/brands/", {
      headers: { authorization: "Bearer " + token },
    });

    setBrands(response.data)

  }

  const getSelectBrandOptions = () => {
    var options = []

    brands.forEach(function (brand){
      options.push(<MenuItem value={brand.id}>{brand.name}</MenuItem>)
    })

    return options
  }

  const getSelectCategoryOptions = () => {
    var options = []

    categories.forEach(function (category){
      options.push(<MenuItem value={category.id}>{category.name}</MenuItem>)
    })

    return options
  }

  const areFieldsOk = () => {
    var isOk = true

    if (name == ""){
      isOk = false
      toast.error("El nombre es obligatorio", {
        position: toast.POSITION.TOP_RIGHT,
      });}

    if (description == ""){
      isOk = false
      toast.error("La descripción es obligatoria", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (category == ""){
      isOk = false
      toast.error("La categoría es obligatoria", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (brand == ""){
      isOk = false
      toast.error("La marca es obligatoria", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (dimensions == ""){
      isOk = false
      toast.error("Las dimensiones son obligatorias", {
        position: toast.POSITION.TOP_RIGHT,
      });}

    if (cost === undefined){
      isOk = false
      toast.error("El costo es obligatorio", {
        position: toast.POSITION.TOP_RIGHT,
      });}

    if (price === undefined){
      isOk = false
      toast.error("El precio es obligatorio", {
        position: toast.POSITION.TOP_RIGHT,
      });}

    return isOk
  }
  
  const onSubmit = async () => {  
    if (product !== undefined) {
      if(areFieldsOk()){

        let oldCode = product.code
        
        let productUpdated = {
          name:name,
          code:code,
          category:category,
          brand:brand,
          dimensions:dimensions,
          description:description,
          cost:cost,
          sellingPrice:price,
        };  
          
        var token = Cookies.get("token-access");

        try{
          axios.put("/products/"+oldCode+"/", productUpdated, {
            headers: { authorization: "Bearer " + token, },
          }).then((response) =>{
            if(response.status == 200){
              toast.success("Product modified succesfully", {
                position: toast.POSITION.TOP_RIGHT,
              });
              dispatch(clearProductEdit())
              navigation("/product-list")
            }
            else{
              toast.error("Error: " + response.status, {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
          }).catch((e)=>{
            toast.error(e.response.data.detail, {
              position: toast.POSITION.TOP_RIGHT,
            });
          })
        }
        catch(e){
          toast.error(e.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

      }
      else{
        toast.error("Fields are not ok", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      
    } else {
      if(areFieldsOk()){
        let product = {
          name:name,
          code:code,
          category:category,
          brand:brand,
          dimensions:dimensions,
          description:description,
          cost:cost,
          sellingPrice:price,
        };
          
        var token = Cookies.get("token-access");

        axios.post("/products/", product, {
          headers: { authorization: "Bearer " + token, },
        }).then((response) =>{
          if(response.status == 201){
            toast.success("Product added succesfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            dispatch(clearProductEdit())
            navigation("/product-list")
          }
          else{
            toast.error("Error: " + response.status, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        }).catch((e)=>{
          toast.error(e.response.data.detail, {
            position: toast.POSITION.TOP_RIGHT,
          });
        })

      }
      else{
        toast.error("Fields are not ok", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <div>
      <ToastContainer/>
      <PageTemplate>
        <Container className="bg-white rounded shadow-md text-slate-800 shadow-slate-200">
          <CssBaseline />
          <div className="p-6">
            <h1 className="text-4xl	font-bold text-left m-5">{pageIntent}</h1>
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
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="select-category-label">Categoría</InputLabel>
                      <Select
                        id="selector-category"
                        label="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {getSelectCategoryOptions()}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel>Marca</InputLabel>
                      <Select
                        key="select-brand"
                        label="Brand"
                        value = {brand}
                        onChange={(e) => setBrand(e.target.value)}
                      >
                        {getSelectBrandOptions()}
                      </Select>
                    </FormControl>
                  </Box>
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
                    disabled
                    required
                    fullWidth
                    name="product-units"
                    label="Unidades"
                    id="product-units"
                    type="number"
                    min="1"
                    value={units}
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
                    InputProps={{
                      inputProps: { min: 0 }
                    }}
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
                    InputProps={{
                      inputProps: { min: 0 }
                    }}
                  />
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      color="success"
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
                      onClick={() => {
                        navigation("/product-list")
                        dispatch(clearProductEdit())}}
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
    </div>
  );
}

export default NewProduct;
