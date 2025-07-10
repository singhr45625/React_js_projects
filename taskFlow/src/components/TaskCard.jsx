import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../App.css";

const TaskCard = ({ task }) => {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <div style={{
      border: "1px solid #ccc", margin: 10, padding: 10,
      backgroundColor: task.completed ? "#d4edda" : "#f8d7da"
    }}>
      <h4>{task.title}</h4>
      <p>{task.desc}</p>
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Mark Pending" : "Mark Done"}
      </button>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 10 }}>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
