import { useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Card from "./UI/Card";
import Form from "./UI/Form";

const AddEquipmentForm = (props) => {
  const brandnameInputRef = useRef();
  const modelNumInputRef = useRef();
  const typeInputRef = useRef();

  /* function to add new task to firestore */
  const addEquipmentHandler = async (event) => {
    event.preventDefault();
    const brandName = brandnameInputRef.current.value;
    const modelNum = modelNumInputRef.current.value;
    const type = typeInputRef.current.value;
    const newEquipment = {brandName: brandName, modelNum: modelNum, type: type};
      try {
        await addDoc(collection(db, `clients/${props.id}/equipment`), newEquipment);
      } catch (err) {
        alert(err);
      }
      props.onAddEquipment();
      brandnameInputRef.current.value = '';
      modelNumInputRef.current.value = '';
      typeInputRef.current.value = '';

  };

  return (
    <Card>
      <Form onSubmit={addEquipmentHandler}>
        <span className="span">
          <label className="label" htmlFor="brandname">
            Brand Name
          </label>
          <input
            className="input"
            id="brandname"
            type="text"
            ref={brandnameInputRef}
          />
        </span>
        <span className="span">
          <label className="label" htmlFor="modelnum">
            Model Number
          </label>
          <input
            className="input"
            id="modelnum"
            type="text"
            ref={modelNumInputRef}
          />
        </span>
        <span className="span">
          <label className="label" htmlFor="type">
            Type
          </label>
          <input
            className="input"
            id="type"
            type="text"
            ref={typeInputRef}
          />
        </span>
        <span className="span">
          <button className="button" type="submit">
            Add
          </button>
        </span>
        <span className="span">
          <button onClick={props.onAddEquipment} className="button" type="button">
            Cancel
          </button>
        </span>
      </Form>
    </Card>
  );
};
export default AddEquipmentForm;
