import { useState } from "react";

import Card from "./UI/Card";
import Form from "./UI/Form";

const Login = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const addClientHandler = (event) => {
    event.preventDefault();
    setEnteredUsername("");
    setEnteredPassword("");
    console.log("username: " + enteredUsername);
    console.log("password: " + enteredPassword);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(enteredUsername);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <Card>
      <Form onSubmit={addClientHandler}>
        <span>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </span>
        <span>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </span>
        <span>
          <button type="submit">Login</button>
        </span>
      </Form>
    </Card>
  );
};

export default Login;
