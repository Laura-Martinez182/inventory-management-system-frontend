import { IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PropTypes from "prop-types";
import { red, green } from "@mui/material/colors";

function MovementRow({ movement, onDeleteMovement, onEditMovement }) {
  return (
    <tr>
      <td className={style.rowStyle}>{movement.id}</td>      
      <td className={style.rowStyle}>{movement.user}</td>
      <td className={style.rowStyle}>{movement.product}</td>
      <td className={style.rowStyle}>{movement.description}</td>
      <td className={style.rowStyle}>{movement.date}</td>
      <td className={style.rowStyle}>{movement.units}</td>
      <td className={style.rowStyle}>{movement.movType}</td>
      <IconButton aria-label="delete"
                onClick={() => {
                  onDeleteMovement(movement.id);
                }}>
        <DeleteRoundedIcon sx={{ color: red[500] }}/>
      </IconButton>
      <IconButton aria-label="edit"
                onClick={() => {
                  onEditMovement(movement);
                }}>
        <EditRoundedIcon sx={{ color: green[500] }} />
      </IconButton>
    </tr>
  );
}

MovementRow.propTypes = {
  movement: PropTypes.object.isRequired,
  onDeleteMovement: PropTypes.func.isRequired,
  onEditMovement: PropTypes.func.isRequired,
};

const style = {
  rowStyle:
    "h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500",
};

export default MovementRow;
