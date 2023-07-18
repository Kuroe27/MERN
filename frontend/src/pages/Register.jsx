import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = data;

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

    if (password !== password2) {
      toast.error("password mismatch");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section>
        <h1>Register</h1>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="name"
            onChange={handleChange}
          />
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
          <input
            type="text"
            id="password2"
            name="password2"
            value={password2}
            placeholder="password2"
            onChange={handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </section>
    </>
  );
};

export default Register;
