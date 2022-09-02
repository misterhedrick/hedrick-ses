import "../../styles/UI/Pill.scss";

const Pill = (props) => {
  const classes = "pill " + props.className;
  return <div id={props.id} key={props.id} className={classes}>{props.children}</div>;
};

export default Pill;
