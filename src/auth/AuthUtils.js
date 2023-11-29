import axios from '../config/axios'
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom"

const refreshTokens = async () => {

    navigate = useNavigate()

    tokenAccess = Cookies.get("token_access")
    tokenRefresh = Cookies.get("token_refresh")

    if (tokenAccess === undefined && tokenRefresh === undefined){
        navigate("/")
    }
    else if (tokenAccess !== undefined){
        navigate("/")
    }
    else if (tokenRefresh !== undefined){
        axios.post('/login/verify',{token:tokenRefresh})
        .then(response => {
            if(response.status != 200){    
                axios.post('/login/refresh',{refresh:tokenRefresh}).then(response=>{
                    Cookies.set('token_refresh',response.data.refresh)
                }).catch(e => {
                    navigate('/')
                })
            }
        })
        .catch(e => {
            navigate('/')
        })
    }
    else{
        //check if both tokens are ok
        //if both ok then ok
        //if only refresh ok, then refresh
        //if only access ok, then redirect to login
        //if neither is ok, then redirect to login
    }
}


export default refreshTokens