const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <button onClick={() => onDelete(task.id)}>delete</button>
        {task.reminder ? "cheked" : "not checked"}
      </h3>
    </div>
  );
};
export default Task;
