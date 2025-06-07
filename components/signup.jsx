import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ user, setUser }) {
  const navigate = useNavigate();

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    console.log(JSON.stringify(body));

    const url = "";

    fetch(url, { method: "POST", body: JSON.stringify(body) })
      .then((response) => response.JSON())
      .then((result) => {
        console.log("result", result);
        localStorage.setFirstName("first name", JSON.stringify(firstName));
        localStorage.setLastName("last name", JSON.stringify(lastName));
        localStorage.setUsername("username", JSON.stringify(username));
        localStorage.setPassword("password", JSON.stringify(password));
        navigate("/admin");
        console.log("Success");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <form onSubmit={SignUp}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        id="firstName"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        id="lastName"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Username"
        name="username"
        id="username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        placeholder="Password"
        name="password"
        id="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default SignUp;
