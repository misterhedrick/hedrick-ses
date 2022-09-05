import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, collection, query, orderBy, onSnapshot, deleteDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AddEquipmentForm from "./AddEquipmentForm";
import Pill from "./UI/Pill";
import styles from "../styles/ClientDetails.module.scss";

const ClientDetails = () => {
  const phoneIcon = <FontAwesomeIcon icon={faPhone} size="1x" />;
  const plusIcon = <FontAwesomeIcon icon={faCirclePlus} size="4x" />;
  const trashIcon = <FontAwesomeIcon icon={faTrashCan} size="1x" />;
  const params = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [isAddingEquipment, setIsAddingEquipment] = useState(false);

  const isAddingEquipmentClickHandler = () => {
    setIsAddingEquipment(!isAddingEquipment);
  };

  useEffect(() => {
    const docq = query(doc(db, "clients", params.clientId));
    onSnapshot(docq, (querySnapshot) => {
      setClient(querySnapshot.data());
    });
  }, [params]);

  useEffect(() => {
    const colq = query(collection(db, `clients/${params.clientId}/equipment`), orderBy('brandName', 'asc'));
    onSnapshot(colq, (querySnapshot) => {
      setEquipment(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [params]);

  /* function to delete a document from firstore */ 
  const handleDelete = async () => {
    const taskDocRef = doc(db, 'clients', params.clientId)
    try{
      navigate(-1);
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

  const phoneLink = "tel:" + client.phone;
  return (
    <div>
      <h1 className="title">
        {client.name} <a href={phoneLink}>{phoneIcon}</a> <div className="deleteIcon" onClick={handleDelete}>{trashIcon}</div>
      </h1>
      {equipment.map((e) => (
        <Pill id={e.id} key={e.id}>
          <Link to={e.id}>
            <h1>{e.data.brandName}</h1>
          </Link>
        </Pill>
      ))}
      {isAddingEquipment && <AddEquipmentForm onAddEquipment={isAddingEquipmentClickHandler} id={params.clientId}/>}
      {!isAddingEquipment && (
        <div
          onClick={isAddingEquipmentClickHandler}
          className={styles.AddEquipment}
        >
          {plusIcon}
        </div>
      )}
    </div>
  );
};

export default ClientDetails;
