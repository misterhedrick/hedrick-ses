import { Link } from "react-router-dom";
import Pill from "./UI/Pill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const phoneIcon = <FontAwesomeIcon icon={faPhone} size="3x" />;
const ClientList = (props) => {
  const [clients, setClients] = useState([]);

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, "clients"), orderBy('name', 'asc'));
    onSnapshot(q, (querySnapshot) => {
      setClients(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div>
      {clients.map((client) => (
        <Pill id={client.id} key={client.id}>
          <Link to={'client/' + client.id}>
            <h1>{client.data.name}</h1>
            <div>{phoneIcon}</div>
          </Link>
        </Pill>
      ))}
    </div>
  );
};

export default ClientList;
