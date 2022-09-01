import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Card from "./UI/Card";
import Form from "./UI/Form";

const AddEquipmentForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(enteredName);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  /* function to add new task to firestore */
  const addEquipmentHandler = async (event) => {
    event.preventDefault();
    setEnteredName("");
    setEnteredPhone("");
    try {
      await addDoc(collection(db, "clients"), {
        name: enteredName,
        phone: enteredPhone,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Card>
      <Form onSubmit={addEquipmentHandler}>
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
export default AddEquipmentForm;
