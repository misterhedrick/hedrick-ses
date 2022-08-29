
import '../../styles/UI/Table.scss';

const Table = (props) => {
  const classes = 'table ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Table;