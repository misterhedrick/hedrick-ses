import { useState } from "react";
import Card from "./UI/Card";
import Form from "./UI/Form";

const AddClientForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const addClientHandler = (event) => {
    event.preventDefault();
    setEnteredName("");
    setEnteredPhone("");
    console.log("username: " + enteredName);
    console.log("phone: " + enteredPhone);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(enteredName);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  return (
    <Card>
      <Form onSubmit={addClientHandler}>
        <span>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </span>
        <span>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
        </span>
        <span>
          <button type="submit">Add</button>
        </span>
      </Form>
    </Card>
  );
};
export default AddClientForm;
