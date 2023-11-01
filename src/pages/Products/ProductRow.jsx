import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";

function ProductRow({ product }) {
  return (
    <tr>
      <td className={style.rowStyle}>{product.photo}</td>
      <td className={style.rowStyle}>{product.name}</td>
      <td className={style.rowStyle}>{product.id}</td>
      <td className={style.rowStyle}>{product.amount}</td>
      <td className={style.rowStyle}>{product.cost}</td>
      <td className={style.rowStyle}>{product.price}</td>
      <td className={style.rowStyle}>{product.date}</td>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
    </tr>
  )
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
};

const style = {
  rowStyle:
    "h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500",
};

export default ProductRow;
