import { Link } from "react-router-dom";
import Pill from "./UI/Pill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const phoneIcon = <FontAwesomeIcon icon={faPhone} size="3x" />;
const ClientList = (props) => {
  return (
    <div>
      <Pill>
        <Link to="/client/1">
          <h1>Name 1</h1>
          <div>{phoneIcon}</div>
        </Link>
      </Pill>
      <Pill>
        <Link to="/client/1">
          <h1>Name 1</h1>
          <div>{phoneIcon}</div>
        </Link>
      </Pill>
      <Pill>
        <Link to="/client/1">
          <h1>Name 1</h1>
          <div>{phoneIcon}</div>
        </Link>
      </Pill>
      <Pill>
        <Link to="/client/1">
          <h1>Name 1</h1>
          <div>{phoneIcon}</div>
        </Link>
      </Pill>
      <Pill>
        <Link to="/client/1">
          <h1>Name 1</h1>
          <div>{phoneIcon}</div>
        </Link>
      </Pill>
    </div>
  );
};

export default ClientList;
