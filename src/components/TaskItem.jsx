import { useState } from "react";
import { Button } from "./button";

export const TaskItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [newText, setNewText] = useState(task.text);
  const [edit, setEdit] = useState(false);
  
  const handleSave = ()=>{
    if(newText.trim()){
      editTask(task.id, newText)
      setEdit(false)
    }
  }

  const handleKeyDown=(e)=>{
    if(e.key==="Enter") handleSave()
  }

  return (
    <li className="flex justify-between items-center p-2  rounded-md">
      {edit ? (
        <input onKeyDown={handleKeyDown} onBlur={handleSave}
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          type="text"
        />
      ) : (
        <span
          className={`mr-4  overflow-hidden text-ellipsis ${
            task.completed ? "line-through text-shadow-gray-900" : ""
          }`}
        >
          {task.text}-{task.priority}
        </span>
      )}

      <div className="flex gap-1">
        <Button color="red" handleClick={() => deleteTask(task.id)} >Delete</Button>

        <Button  handleClick={() => toggleTask(task.id)} >Done</Button>

        <Button  handleClick={() => setEdit(true)}>Edit</Button>
      </div>
    </li>
  );
};
