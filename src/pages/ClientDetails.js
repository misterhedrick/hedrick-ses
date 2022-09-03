import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { doc } from "firebase/firestore";

const ClientDetails = (props) => {
  const params = useParams();
  const [client, setClient] = useState([]);

  useEffect(() => {
    const q = query(doc(db, "clients", params.clientId));
    onSnapshot(q, (querySnapshot) => {
      setClient(
        querySnapshot.data()
      );
    });
  }, []);

  console.log('client: ', client);
  return (
    <div>
      <h1>{client.name}</h1>
      <h3>{client.phone}</h3>
    </div>
  );
};

export default ClientDetails;
