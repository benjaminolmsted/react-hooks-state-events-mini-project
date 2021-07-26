import React from "react";
import Task from "./Task"

function TaskList({ tasks, selected }) {
  
  return (
    <div className="tasks">
      {tasks.filter(task=> { 
        if(selected==="All")
          return true
        return task.category === selected}).map((task => <Task key={task.text} category={task.category} text={task.text}/>))}
    </div>
  );
}

export default TaskList;
