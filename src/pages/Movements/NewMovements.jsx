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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useDispatch, useSelector } from "react-redux";

function NewMovement({ addMovement }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [units, setUnits] = useState("");
  const [type, setType] = useState("");

  const navigation = useNavigate();
  //   const dispatch = useDispatch();

  const addMovementSubmit = () => {
    let movement = {
      name,
      description,
      units,
    };
    addMovement(movement);
  };

  return (
    <PageTemplate>
      <Container className="bg-white rounded shadow-md text-slate-800 shadow-slate-200">
        <CssBaseline />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-left m-5">
            Movimiento de inventario
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
                  label="Nombre del producto"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                    sx={{ width: 545 }}
                    value={date}
                    label="Fecha del movimiento"
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(e) => setDate(e.target.value)}
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
                  value={type}
                  onChange={(e) => setType(e.target.value)}
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
                  type="submit"
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
                  onClick={() => navigation("/product-list")}
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

NewMovement.propTypes = {
  addMovement: PropTypes.func.isRequired,
};

export default NewMovement;
