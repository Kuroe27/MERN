import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navigation;
