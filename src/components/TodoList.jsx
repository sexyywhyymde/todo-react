import { TaskItem } from "./TaskItem";

export const TodoList = ({ tasks, deleteTask, toggleTask, editTask }) => {
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);
  
  return (
    <ul className="space-y-2 overflow-y-auto max-h-[350px] mt-4">
      {sortedTasks.map((task) => {
        return (
          <TaskItem
            toggleTask={toggleTask}
            editTask={editTask}
            key={task.id}
            deleteTask={deleteTask}
            task={task}
          />
        );
      })}
    </ul>
  );
};
