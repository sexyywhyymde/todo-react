import { useState } from "react";
import { Button } from "./button";

export const Form = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("high");
  const [desc, setDesc] = useState("");

  const handleAddTask = () => {
    addTask(task, desc, priority);
    setTask("");
    setDesc("")

  };
  return (
    <div className="flex gap-2">
      <input
        className="w-full rounded-md bg-black text-white border-black focus:outline-none focus:ring-2 focus:ring-white p-2"
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />

      <input
        className="w-full rounded-md bg-black text-white border-black focus:outline-none focus:ring-2 focus:ring-white p-2"
        value={desc}
        type="text"
        onChange={(e) => setDesc(e.target.value)}
      />
      <select className="bg-black" value={priority} onChange={(e)=>setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <Button handleClick={handleAddTask} type={"add"}>
        Add
      </Button>
    </div>
  );
};
