import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { doc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ClientDetails = (props) => {
  const phoneIcon = <FontAwesomeIcon icon={faPhone} size="1x" />;
  const params = useParams();
  const [client, setClient] = useState([]);

  useEffect(() => {
    const q = query(doc(db, "clients", params.clientId));
    onSnapshot(q, (querySnapshot) => {
      setClient(querySnapshot.data());
    });
  }, []);

  console.log("client: ", client);
  const phoneLink = 'tel:' + client.phone;
  return (
    <div>
      <h1 className="title">{client.name} <a href={phoneLink}>{phoneIcon}</a></h1>
    </div>
  );
};

export default ClientDetails;
