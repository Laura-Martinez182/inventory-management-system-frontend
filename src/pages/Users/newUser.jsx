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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Cookies from "js-cookie";
import axios from "../../config/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';
import { clearUserEdit } from "../../redux/reducers/userEditSlice";

function NewUser() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [document, setDocument] = useState("");
  const [doc_type, setDocType] = useState("")
  const [userRole, setUserRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState(undefined);
  const [pageIntent, setPageIntent] = useState("Nuevo Usuario")
  const [roles, setRoles] = useState([]);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.userEdit);

  useEffect(() => {    
    initializeFields();    
    getRoles()
  }, []);

  const initializeFields = () => {
    if (user !== undefined) {
      setFirstName(user.first_name)
      setLastName(user.last_name)
      setDocument(user.document)
      setDocType(user.doc_type)
      setEmail(user.email)
      setPhoneNumber(user.phone_number)
      setBirthday(dayjs(user.birthday))

      setPageIntent("Actualizar Usuario")
      getUserRole(user.document)
    }
    else{
      setPageIntent("Nuevo Usuario")
    }
  };

  const getRoles = async () => {
    var token = Cookies.get("token-access");
    let roles_list = []

    var response = await axios.get("/groups/", {
      headers: { authorization: "Bearer " + token },
    });

    response.data.forEach((role)=>{
      roles_list.push(role)
    })

    setRoles(roles_list)
  }

  const getUserRole = async (document) => {
    var token = Cookies.get("token-access");    

    var response = await axios.get("/users/" + document + "/groups/", {
      headers: { authorization: "Bearer " + token },
    });

    if(response.data.length == 0){
      return
    }

    var role = response.data[0]

    setUserRole(role.id)
  }

  const getRoleOptions = () => {
    var options = []

    roles.forEach(function (role){
      options.push(<MenuItem value={role.id}>{role.name}</MenuItem>)
    })

    return options
  }

  const addUserSubmit = () => { 
    if (user !== undefined) {
      if(areFieldsOk()){
          
        let userUpdated = {
          first_name: first_name,
          last_name: last_name,
          document: document,
          doc_type: "CC",
          email:email,
          phone_number: phone_number,
          birthday: birthday.format("YYYY-MM-DD"),
        };  
          
        var token = Cookies.get("token-access");

        try{
          axios.patch("/users/"+user.document+"/", userUpdated, {
            headers: { authorization: "Bearer " + token, },
          }).then((response) =>{
            if(response.status == 200){
              toast.success("User modified succesfully", {
                position: toast.POSITION.TOP_RIGHT,
              });
              dispatch(clearUserEdit())
              navigation("/user-list")
            }
            else{
              toast.error("Error: " + response.status, {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
          }).catch((e)=>{
            toast.error(e, {
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
        let userUpdated = {
          first_name: first_name,
          last_name: last_name,
          document: document,
          password:"password",
          doc_type: "CC",
          email:email,
          phone_number: phone_number,
          birthday: birthday.format("YYYY-MM-DD"),
        };  
          
        var token = Cookies.get("token-access");

        axios.post("/users/", userUpdated, {
          headers: { authorization: "Bearer " + token, },
        }).then((response) =>{
          if(response.status == 201){
            toast.success("User added succesfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            dispatch(clearUserEdit())
            navigation("/user-list")
          }
          else{
            toast.error("Error: " + response.status, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        }).catch((e)=>{
          toast.error(e, {
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

  const areFieldsOk = () => {
    var isOk = true

    if (first_name == "" || last_name == ""){
      isOk = false
      toast.error("Se requiere el nombre completo", {
        position: toast.POSITION.TOP_RIGHT,
      });}

    if (document == ""){
      isOk = false
      toast.error("El número de documento es obligatorio", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (email == ""){
      isOk = false
      toast.error("El email es obligatorio", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (phone_number == ""){
      isOk = false
      toast.error("El número de celular es obligatorio", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (birthday === undefined){
      isOk = false
      toast.error("El número de celular es obligatorio", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    return isOk
  }

  return (
    <PageTemplate>
      <Container className="bg-white rounded shadow-md text-slate-800 shadow-slate-200 mb-10">
        <CssBaseline />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-left m-5">{pageIntent}</h1>
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
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="user-lastname"
                  label="Apellido"
                  name="user-lastname"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel>Rol</InputLabel>
                      <Select
                        key="select-user-role"
                        label="Role"
                        value = {userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                      >
                        {getRoleOptions()}
                      </Select>
                    </FormControl>
                  </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  name="user-idDoc"
                  label="Documento"
                  id="user-idDoc"
                  value={document}
                  onChange={(e) => setDocument(e.target.value)}
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
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ width: 565 }}
                    value={birthday}
                    label="Fecha de nacimiento"
                    onChange={(e) => setBirthday(dayjs(e))}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  color="success"
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
