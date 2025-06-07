import React from "react";
import { useNavigate } from "react-router-dom";

function Login({user, setUser}) {
  const navigate = useNavigate();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const url = "";

    fetch(url, { method: "POST", body: JSON.stringify(body) })
      .then((response) => response.JSON())

      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        localStorage.setItem("user", JSON.stringify(result.data));
        setUser(result.data);
        navigate("/admin");
      })
      .catch((error) => console.log("error", error));

  }

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text" id="username" name="username" placeholder="username"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
      />
      <input type="submit" />
    </form>
  );
}

export default Login;
