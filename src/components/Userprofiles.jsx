import React, { useState, useEffect } from "react";

function UserProfiles() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [editMode, setEditMode] = useState(false);


  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    e.preventDefault();
    console.log("First Name", e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    e.preventDefault();
    console.log("Last Name", e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
    e.preventDefault();
    console.log("Email", e.target.value);
  };

  const body = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    username: e.target.username.value,
  };

  const url = "";

  fetch(url, { method: "POST", body: JSON.stringify(body) })
    .then((response) => response.JSON())
    .then(() => {
      localStorage.setFirstName("first name", JSON.stringify(firstName));
      localStorage.setLastName("last name", JSON.stringify(lastName));
      localStorage.setUsername("username", JSON.stringify(username));
      navigate("/admin");
      console.log("Success");
    })
    .catch(console.log("Error"));

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleFirstName}
        placeholder="First Name"
      />
       <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleLastName}
        placeholder="Last Name"
      />
       <input
        type="text"
        name="username"
        value={username}
        onChange={handleUsername}
        placeholder="username"
      />
    </div>
    
  );
}

export default UserProfiles;
