import { IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PropTypes from "prop-types";
import { red, green } from "@mui/material/colors";

function ProductRow({ product, onDeleteProduct, onEditProduct }) {
  return (
    <tr>
      <td className={style.rowStyle}>{product.photo}</td>
      <td className={style.rowStyle}>{product.name}</td>
      <td className={style.rowStyle}>{product.code}</td>
      <td className={style.rowStyle}>{product.amount}</td>
      <td className={style.rowStyle}>{product.cost}</td>
      <td className={style.rowStyle}>{product.price}</td>
      <td className={style.rowStyle}>{product.date}</td>
      <IconButton aria-label="delete">
        <DeleteRoundedIcon
          sx={{ color: red[500] }}
          onClick={() => {
            onDeleteProduct(product.code);
          }}
        />
      </IconButton>
      <IconButton aria-label="edit">
        <EditRoundedIcon
          sx={{ color: green[500] }}
          onClick={() => {
            onEditProduct(product);
          }}
        />
      </IconButton>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onEditProduct: PropTypes.func.isRequired,
};

const style = {
  rowStyle:
    "h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500",
};

export default ProductRow;
