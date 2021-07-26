import React, {useState} from "react";

function Task({category, text}) {
  
  const [isDeleted, setIsDeleted] = useState(false)
  function setDeleted (){
    setIsDeleted(true)
  }

  return (
    isDeleted ? null : <div className="task">
    <div className="label">{category}</div>
    <div className="text">{text}</div>
    <button className="delete" onClick={setDeleted}>X</button>
  </div>
  );
}

export default Task;
