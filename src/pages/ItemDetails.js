import { useParams } from "react-router-dom";

const ItemDetails = (props) => {
  const params = useParams();
  console.log("params " + params.itemId);

  return (
    <div>
      <h1>Item Name From ID</h1>
      <p>{params.itemId}</p>
    </div>
  );
};

export default ItemDetails;
