import PageTemplate from "../../components/PageTemplate";
import CardComponent from "../../components/Card";
import Grid from "@mui/material/Grid";

function Reports() {
  return (
    <PageTemplate>
      <Grid
        container
        justifyContent="center"
        columnSpacing={6}
        marginTop={20}
        display="flex"
      >
        <Grid item>
          <CardComponent
            img=""
            title="Titulo "
            content="Describir la grafica"
            to="/line-chart"
          />
        </Grid>
        <Grid item>
          <CardComponent
            img=""
            title="Titulo "
            content="Describir la grafica"
            to="/bar-chart"
          />
        </Grid>
        <Grid item>
          <CardComponent
            img=""
            title="Titulo "
            content="Describir la grafica"
            to="/pie-chart"
          />
        </Grid>
      </Grid>
    </PageTemplate>
  );
}

export default Reports;
