import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import axiosInstance from "../config/axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/UserSlice"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const onLogin = async (e) => {

    const bodyParams = {
      email:email,
      password:password
    }

    var success = false

    await axiosInstance.post('/api/token/',bodyParams).then((response) =>{
      const accessToken = response['data'].access
      const refreshToken = response['data'].refresh
        
      dispatch(
        login({
          email:email,
          accessToken:accessToken,
          refreshToken:refreshToken
        })
      )   
      
      success = true
      toast.success(<div>Log in succesful</div>)
    }).catch((error) =>{
      toast.error(<div>Log in failed. Try again</div>)
    })

    if(success){
      navigate('/productList')
    }    
  }

  return (
    <>
    <Grid container sx={{ height: "100vh", width: "100vw" }}>      
      <Grid
        item
        xs={false}
        sm={2}
        md={7}
        sx={{
          backgroundImage:"url(https://www.advotics.com/wp-content/uploads/2022/12/cover-Proses-Manajemen-Inventory-dan-Metode-Penerapannya-01-1-1536x984.png)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize:"cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 20,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "success.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={onLogin}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#00a76f",
                '&:hover': {
                  backgroundColor: "#0062cc",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
    </>
  );
}
export default Login;
