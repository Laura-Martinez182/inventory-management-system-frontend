import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PageTemplate from "../../components/PageTemplate";
import Divider from "@mui/material/Divider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

function NewUser({ addUser }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("");
  const [idDoc, setIdDoc] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const navigation = useNavigate();
  // const dispatch = useDispatch()

  const addUserSubmit = () => {
    let person = { name, lastname, role, idDoc, email, tel, birthdate };
    addUser(person);
    //dispatch(setPersonEdit({name:"", lastname:"", role:"", idDoc:"", email:"", tel:"", birthdate:""}))
  };

  return (
    <PageTemplate>
      <Container className="bg-white rounded shadow-md text-slate-800 shadow-slate-200 mb-10">
        <CssBaseline />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-left m-5">Nuevo usuario</h1>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  name="user-name"
                  required
                  fullWidth
                  id="user-name"
                  label="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="user-lastname"
                  label="Apellido"
                  name="user-lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="user-role"
                  label="Rol"
                  name="user-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  name="user-idDoc"
                  label="Documento de identidad"
                  id="user-idDoc"
                  value={idDoc}
                  onChange={(e) => setIdDoc(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  name="user-email"
                  label="Correo electrónico"
                  id="user-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="user-tel"
                  label="Teléfono"
                  id="user-tel"
                  type="number"
                  min="1"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ width: 565 }}
                    value={birthdate}
                    label="Fecha de nacimiento"
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(e) => setBirthdate(e.target.value)}
                  />
                </LocalizationProvider>
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
                  onClick={addUserSubmit}
                >
                  Guardar
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  color="error"
                  onClick={() => navigation("/user-list")}
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

NewUser.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default NewUser;
