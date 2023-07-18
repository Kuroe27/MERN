import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
