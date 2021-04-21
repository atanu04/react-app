const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h4>{task.text}</h4>
      <button onClick={() => onDelete(task.id)}>X</button>
      {/* <h5>{task.reminder ? "cheked" : "not checked"}</h5> */}
    </div>
  );
};
export default Task;
