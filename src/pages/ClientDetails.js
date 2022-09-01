import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Pill from "../components/UI/Pill";

const ClientDetails = (props) => {
  const params = useParams();
  console.log("params " + params.clientId);

  return (
    <div>
      <h1>Client Name From ID</h1>
      
    </div>
  );
};

export default ClientDetails;
