import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Cookies from "js-cookie";
import axios from "../../config/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function Reports() {
  const [chartData, setChartData] = useState([]);

  const createData = (month, value) => ({ month, value });

  // function createData(month, value) {
  //   return { month, value };
  // }

  const getValuePerMonth = async () => {
    try {
      var token = Cookies.get("token-access");

      var response = await axios.get(
        "/graphs/value-per-month/?date_from=01-01-2023&date_to=29-11-2023",
        {
          headers: { authorization: "Bearer " + token },
        }
      );

      const responseData = response.data;

      const renderDataFromResponse = responseData.map((data) =>
        createData(data.month, data.inv_value)
      );

      console.log(renderDataFromResponse);

      setChartData(renderDataFromResponse);
    } catch (e) {
      toast.error(e.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    getValuePerMonth();
  }, []);

  const theme = useTheme();
  return (
    <div>
      <ToastContainer/>
        <PageTemplate>
          <Grid container spacing={2}>
            <Grid item>
              <Paper
                sx={{
                  m: 4,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 640,
                  width: 1280,
                }}
              >
                <h1 className="p-5"> Valor del inventario por mes 2023</h1>
                <ResponsiveContainer>
                  <LineChart
                    width={730}
                    height={250}
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis>
                      <Label
                        angle={270}
                        position="left"
                        style={{
                          textAnchor: "middle",
                          fill: theme.palette.text.primary,
                          ...theme.typography.body1,
                        }}
                      >
                        Movimientos
                      </Label>
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8eab96" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </PageTemplate>
    </div>
  );
}

export default Reports;
