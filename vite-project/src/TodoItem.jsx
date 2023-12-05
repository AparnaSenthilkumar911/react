import propTypes from "prop-types";

const TodoItem = ({ todo,removeTaskWithIndex ,index}) => {
  const handleButtonClick=()=>{
    removeTaskWithIndex(index);
  };

  return(
    <li className="flex items-center w-min gap-8">
      {todo} <button onClick={handleButtonClick}></button>
    </li>
  ) ;
};

TodoItem.propTypes = {
  todo: propTypes.string.isRequired,
  removeTaskWithIndex:propTypes.func.isRequired,
  index:propTypes.number.isRequired,
};

export default TodoItem;