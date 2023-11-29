import { IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PropTypes from "prop-types";
import { red, green } from "@mui/material/colors";

function ProductRow({ product, onEditProduct }) {
  return (
    <tr>
      <td className={style.rowStyle}>{product.code}</td>
      <td className={style.rowStyle}>{product.name}</td>
      <td className={style.rowStyle}>{product.cost}</td>
      <td className={style.rowStyle}>{product.sellingPrice}</td>
      <td className={style.rowStyle}>{product.unitsAvailable}</td>
      <td className={style.rowStyle}>{product.category}</td>
      <td className={style.rowStyle}>{product.brand}</td>
      <IconButton aria-label="edit" 
      onClick={() => {
        onEditProduct(product);
      }}>
        <EditRoundedIcon
          sx={{ color: green[500] }}

        />
      </IconButton>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
  onEditProduct: PropTypes.func.isRequired,
};

const style = {
  rowStyle:
    "h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500",
};

export default ProductRow;
