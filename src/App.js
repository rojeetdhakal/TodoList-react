import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete:false,
    };

    setTodoList([...todoList, task]);
  };
  const handleDelete = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const handleComplete=(id)=>{
    setTodoList(todoList.map((task)=>{
      if(task.id===id){
        return {...task,complete:true}
      }else{
        return task
      }
    }))

  }
  return (
    <div className="App">
      <div className="addtask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}> Add Tasks</button>
      </div>
      <div className="lists">
        {todoList.map((task) => {
          return(
          <Task
            taskName={task.taskName}
            id={task.id}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            complete={task.complete}
          />)
        })}
      </div>
    </div>
  );
}

export default App;
