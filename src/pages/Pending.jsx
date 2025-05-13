import { TodoList } from "../components/TodoList";
import useTasks from "../hooks/useTasks";

export const Pending = () => {
  const { deleteTask, editTask, tasks, toggleTask } = useTasks();

  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      {tasks.length === 0 ? (
        <div>no tasks</div>
      ) : (
        <TodoList
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          tasks={pendingTasks}
          editTask={editTask}
        />
      )}
    </div>
  );
};
