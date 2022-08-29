import "../../styles/UI/Pill.scss";

const Pill = (props) => {
  const classes = "pill " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Pill;
