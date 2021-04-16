import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react";
import AddTask from "./component/AddTask";

function App() {
  const [showAddTask, setShowAddTak] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "first",
      reminder: true,
    },
    {
      id: 2,
      text: "second",
      reminder: false,
    },
    {
      id: 3,
      text: "thrid",
      reminder: false,
    },
    {
      id: 4,
      text: "fourth",
      reminder: true,
    },
  ]);

  //Add task
  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTak(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Nothing to show"
      )}
    </div>
  );
}

export default App;
