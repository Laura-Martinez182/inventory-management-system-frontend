import { IconButton } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PropTypes from "prop-types";
import { red, green } from "@mui/material/colors";

function UserRow({ user, onDeleteUser, onEditUser }) {
  return (
    <tr>
      <td className={style.rowStyle}>{user.first_name}</td>
      <td className={style.rowStyle}>{user.last_name}</td>
      <td className={style.rowStyle}>{user.document}</td>
      <td className={style.rowStyle}>{user.doc_type}</td>
      <td className={style.rowStyle}>{user.role}</td>
      <td className={style.rowStyle}>{user.email}</td>
      <td className={style.rowStyle}>{user.phone_number}</td>
      <td className={style.rowStyle}>{user.birthday}</td>
      <IconButton aria-label="delete">
        <DeleteRoundedIcon
          sx={{ color: red[500] }}
          onClick={() => {
            onDeleteUser(user.id);
          }}
        />
      </IconButton>
      <IconButton aria-label="edit">
        <EditRoundedIcon
          sx={{ color: green[500] }}
          onClick={() => {
            onEditUser(user);
          }}
        />
      </IconButton>
    </tr>
  );
}

UserRow.propTypes = {
  user: PropTypes.object.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onEditUser: PropTypes.func.isRequired,
};

const style = {
  rowStyle:
    "h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500",
};

export default UserRow;
