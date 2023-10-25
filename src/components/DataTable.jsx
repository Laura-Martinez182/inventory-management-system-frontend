import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns }) {
  return (
    <DataGrid
      sx={{
        boxShadow: 2,
        border: 2,
        borderColor: "#d3a625"
      }}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 20 },
        },
      }}
      pageSizeOptions={[5, 10, 15, 20]}
    />
  );
}
