import * as React from "react";
import { useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "../../config/axios";
import MovementRow from "./MovementRow"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setMovementEdit, clearMovementEdit } from "../../redux/reducers/movementEditSlice";
import { useDispatch } from "react-redux";


function MovementsList() {
  const [movements, setMovements] = useState([]);
  const navigation = useNavigate();
  const dispatch = useDispatch()

  const getMovements = async () => {
    try{
      var token = Cookies.get("token-access");

      var response = await axios.get("/inventory-movements/", {
        headers: { authorization: "Bearer " + token },
      });
      setMovements(response.data);
    }
    catch(e){
      toast.error(e.message, {
        position: toast.POSITION.TOP_RIGHT,
      });

    }
  };

  const onEditInvMov = (invMov) => {
    dispatch(setMovementEdit(invMov));
    navigation("/new-movement");
  };

  const onButtonAddInvMovClick = () => {
    dispatch(clearMovementEdit());
    navigation("/new-movement")
  };

  const onDeleteInvMov = async (invMovId) => {
    try{
      var token = Cookies.get("token-access");

      axios.delete("/inventory-movements/"+invMovId+"/", {
        headers: { authorization: "Bearer " + token },
      }).then((response) => {
        if(response.status == 200){     
          navigation(0)     
          /*toast.success("Product removed succesfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
          */          
        }
        else{
          toast.warning("Unexpected result:" + response.status, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }).catch((e) => {
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

  const renderMovements = () => {
    return movements.map((movement) => (
      <MovementRow
        key={movement.id}
        movement={movement}
        onEditMovement={onEditInvMov}
        onDeleteMovement={onDeleteInvMov}
      />
    ));
   };

   
  useEffect(() => {
    getMovements();
  }, []);

  return (
    <div>
    <ToastContainer/>
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
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Usuario
                </th>
                <th scope="col" className="px-6 py-3">
                  Producto
                </th>
                <th scope="col" className="px-6 py-3">
                  Descripción
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Unidades
                </th>
                <th scope="col" className="px-6 py-3">
                  Movimiento
                </th>                
              </tr>
            </thead>
            <tbody> {renderMovements()} </tbody>
          </table>
        </div>
      </div>
    </PageTemplate>
    </div>
  );
}

export default MovementsList;
