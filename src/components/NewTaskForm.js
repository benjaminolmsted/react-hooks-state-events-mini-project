import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("All")


  function handleDetailChange(e){
    setDetails(e.target.value)
  }

  function handleCatChange(e){
    setCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    let newTask = {text: details, category: category}
    onTaskFormSubmit(newTask)
    setDetails('')
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCatChange}>
          {categories.map(cat=> <option key={cat}>{cat}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
