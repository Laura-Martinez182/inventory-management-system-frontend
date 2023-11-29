import * as React from "react";
import { useTheme } from "@mui/material/styles";
import PageTemplate from "../../components/PageTemplate";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
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

function createData( month, value) {
  return { month, value };
}

const data = [
  createData("Enero", 0),
  createData("Febrero", 300),
  createData("Marzo", 600),
  createData("Abril", 800),
  createData("Mayo", 1500),
  createData("Junio", 1550),
  createData("Julio", 1900),
  createData("Agosto", 2000),
  createData("Septiembre", 2400),
  createData("Octubre", 2450),
  createData("Noviembre", 2500),
  createData("Diciembre", undefined),
];

export default function Reports() {
  const theme = useTheme();
  return (
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
            <h1 className="p-5">Movimientos por mes</h1>
            <ResponsiveContainer>
              <LineChart
                width={730}
                height={250}
                data={data}
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
  );
}
