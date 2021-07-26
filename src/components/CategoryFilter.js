import React from "react";

function CategoryFilter({categories, selected, setSelected}) {
  
  const buttons = categories.map((category=>{
  const classname = category === selected ? "selected" : ''
    return <button key={category} className={classname} onClick={handleClick}>{category}</button>
  }))

  function handleClick(e){
    setSelected(e.target.textContent)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
