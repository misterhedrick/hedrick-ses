import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Pill from "../components/UI/Pill";

const ClientDetails = (props) => {
  const params = useParams();
  console.log("params " + params.clientId);

  return (
    <div>
      <h1>Client Name From ID</h1>
      <Pill>
        <Link to="/client/1/1">
          <h1>Name 1</h1>
        </Link>
      </Pill>
      <Pill>
        <Link to="/client/1/1">
          <h1>Name 1</h1>
        </Link>
      </Pill>
      <Pill>
        <Link to="/client/1/1">
          <h1>Name 1</h1>
        </Link>
      </Pill>
      <Pill>
        <Link to="/client/1/1">
          <h1>Name 1</h1>
        </Link>
      </Pill>
      <Pill>
        <Link to="/client/1/1">
          <h1>Name 1</h1>
        </Link>
      </Pill>
    </div>
  );
};

export default ClientDetails;
