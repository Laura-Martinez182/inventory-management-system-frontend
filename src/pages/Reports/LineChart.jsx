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

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined),
];

export default function ChartLine() {
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
            <h1 className="p-5">Titulo</h1>
            <ResponsiveContainer>
              <LineChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
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
                    Sales ($)
                  </Label>
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </PageTemplate>
  );
}
