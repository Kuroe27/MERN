import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };
  return (
    <>
      <section>
        <h1>Login</h1>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
          />

          <button type="submit">submit</button>
        </form>
      </section>
    </>
  );
};

export default Login;
