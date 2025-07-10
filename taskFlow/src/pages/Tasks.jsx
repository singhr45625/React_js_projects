import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../App.css";

const Tasks = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="page-container">
      <TaskForm />
      <h3>Your Tasks</h3>
      {tasks.length === 0 && <p>No tasks added yet.</p>}
      {tasks.map(task => <TaskCard key={task.id} task={task} />)}
    </div>
  );
};

export default Tasks;
