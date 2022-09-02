import { useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Card from "./UI/Card";
import Form from "./UI/Form";

const AddClientForm = (props) => {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();

  /* function to add new task to firestore */
  const addClientHandler = async (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const phone = phoneInputRef.current.value;
    const newclient = {name: name, phone: phone};
    try {
      await addDoc(collection(db, "clients"), newclient);
    } catch (err) {
      alert(err);
    }
    nameInputRef.current.value = '';
    phoneInputRef.current.value = '';
  };

  return (
    <Card>
      <Form onSubmit={addClientHandler}>
        <span>
          <label htmlFor="username">Name</label>
          <input
            id="name"
            type="text"
            ref={nameInputRef}
          />
        </span>
        <span>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            ref={phoneInputRef}
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
