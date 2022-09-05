import { useRef } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import Card from "./UI/Card";
import Form from "./UI/Form";

const AddDetailForm = (props) => {
  const keyInputRef = useRef();
  const valueInputRef = useRef();

  /* function to add new task to firestore */
  const addDetailHandler = async (event) => {
    event.preventDefault();
    const key = keyInputRef.current.value;
    const value = valueInputRef.current.value;
    const newDetail = { [key]: value };

    const taskDocRef = doc(
      db,
      `clients/${props.clientId}/equipment`,
      props.equipmentId
    );
    try {
      await updateDoc(taskDocRef, newDetail);
    } catch (err) {
      alert(err);
    }
    keyInputRef.current.value = "";
    valueInputRef.current.value = "";
  };

  return (
    <Card>
      <Form onSubmit={addDetailHandler}>
        <span className="span">
          <label className="label" htmlFor="key">
            Key
          </label>
          <input className="input" id="key" type="text" ref={keyInputRef} />
        </span>
        <span className="span">
          <label className="label" htmlFor="value">
            Value
          </label>
          <input className="input" id="value" type="text" ref={valueInputRef} />
        </span>
        <span className="span">
          <button className="button" type="submit">
            Add
          </button>
        </span>
        <span className="span">
          <button onClick={props.onAddDetail} className="button" type="button">
            Done
          </button>
        </span>
      </Form>
    </Card>
  );
};
export default AddDetailForm;
