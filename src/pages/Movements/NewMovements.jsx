import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PageTemplate from "../../components/PageTemplate";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from 'jwt-decode';
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "../../config/axios";
import { setMovementEdit, clearMovementEdit } from "../../redux/reducers/movementEditSlice";


function NewMovement() {
  const [prodId, setProductId] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [units, setUnits] = useState(0);
  const [movType, setMovType] = useState("");
  const [pageIntent, setPageIntent] = useState("Nuevo Moviemiento de Inventario")
  
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const movement = useSelector((state) => state.movement.movementEdit)

  useEffect(() => {
    initializeFields();
  }, []);

  const initializeFields = () => {
    if (movement !== undefined) {
      setProductId(movement.product_id)

      var token = Cookies.get("token-access");    
      var decoded = jwtDecode(token);      

      console.log(decoded["document"])

      setUser(decoded["document"])
      setDate(dayjs(movement.date))
      setDescription(movement.description)
      setUnits(movement.units)
      setMovType(movement.movType)

      setPageIntent("Actualizar Movimiento de Inventario")
    }
    else{
      setMovType("Entrada")
      setPageIntent("Nuevo Moviento de Inventario")
    }
  };

  const areFieldsOk = () => {
    var isOk = true

    if (prodId == ""){
      isOk = false
      toast.error("El id del producto es obligatorio", {
        position: toast.POSITION.TOP_RIGHT,
      });}

    if (description == ""){
      isOk = false
      toast.error("La descripción es obligatoria", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (units == 0){
      isOk = false
      toast.error("Debe haber un movimiento de al menos 1 unidad", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    return isOk
  }

  const addMovementSubmit = () => { 
    if (movement !== undefined) {
      if(areFieldsOk()){

        console.log(date)
        console.log(date.format())
          
        let movementUpdated = {
          product: prodId,
          user: user,
          description: description,
          date:date.format(),
          units: units,
          movType: movType
        };  
          
        var token = Cookies.get("token-access");

        try{
          axios.put("/inventory-movements/"+movement.id+"/", movementUpdated, {
            headers: { authorization: "Bearer " + token, },
          }).then((response) =>{
            if(response.status == 200){
              toast.success("Movement modified succesfully", {
                position: toast.POSITION.TOP_RIGHT,
              });
              dispatch(clearMovementEdit())
              navigation("/inventory")
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
        let movement = {
          product: prodId,
          user: user,
          description: description,
          date:date.format(),
          units: units,
          movType: movType
        };  
          
        var token = Cookies.get("token-access");

        axios.post("/inventory-movements/", movement, {
          headers: { authorization: "Bearer " + token, },
        }).then((response) =>{
          if(response.status == 201){
            toast.success("Movement added succesfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            dispatch(clearMovementEdit())
            navigation("/inventory")
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
            <h1 className="text-4xl font-bold text-left m-5">
              {pageIntent}
            </h1>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="product-name"
                    required
                    fullWidth
                    id="product-name"
                    label="Código del producto"
                    value={prodId}
                    onChange={(e) => setProductId(e.target.value)}
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
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      value={date}
                      label="Fecha del movimiento"
                      onChange={(e) => setDate(e)}
                    />
                  </LocalizationProvider>
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
                    InputProps={{
                      inputProps: { min: 0 }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Tipo de movimiento
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={movType}
                    onChange={(e) => setMovType(e.target.value)}
                  >
                    <FormControlLabel
                      value={"Entrada"}
                      control={<Radio />}
                      label="Entrada"
                    />
                    <FormControlLabel
                      value={"Salida"}
                      control={<Radio />}
                      label="Salida"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    color="success"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={addMovementSubmit}
                  >
                    Guardar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    color="error"
                    onClick={() => {
                      navigation("/inventory");
                      dispatch(clearMovementEdit())}}
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
    </div>
  );
}

NewMovement.propTypes = {
  addMovement: PropTypes.func.isRequired,
};

export default NewMovement;
