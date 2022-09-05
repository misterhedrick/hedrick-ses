import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, query, onSnapshot, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AddDetailForm from "./AddDetailForm";
import styles from "../styles/EquipmentDetails.module.scss";

const EquipmentDetails = (props) => {
  const plusIcon = <FontAwesomeIcon icon={faCirclePlus} size="4x" />;
  const trashIcon = <FontAwesomeIcon icon={faTrashCan} size="1x" />;
  const params = useParams();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState([]);
  const [isAddingDetail, setIsAddingDetail] = useState(false);
  const isAddingDetailClickHandler = () => {
    setIsAddingDetail(!isAddingDetail);
  };

  useEffect(() => {
    const q = query(
      doc(db, `clients/${params.clientId}/equipment`, params.equipmentId)
    );
    onSnapshot(q, (querySnapshot) => {
      setEquipment(querySnapshot.data());
    });
  }, []);

  /* function to delete a document from firstore */
  const handleDelete = async () => {
    const taskDocRef = doc(
      db,
      `clients/${params.clientId}/equipment`,
      params.equipmentId
    );
    try {
      navigate(-1);
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <h1 className="deleteIcon" onClick={handleDelete}>{trashIcon}</h1>
      {Object.entries(equipment).map(([key, val]) => (
        <div className={styles.detail} key={key}>
          {key}: {val}
        </div>
      ))}
      {isAddingDetail && (
        <AddDetailForm
          onAddDetail={isAddingDetailClickHandler}
          clientId={params.clientId}
          equipmentId={params.equipmentId}
        />
      )}

      {!isAddingDetail && (
        <div onClick={isAddingDetailClickHandler} className={styles.AddDetail}>
          {plusIcon}
        </div>
      )}
    </div>
  );
};

export default EquipmentDetails;
