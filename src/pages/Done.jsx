import { TodoList } from "../components/TodoList";
import useTasks from "../hooks/useTasks";

export const Done = () => {
  const { deleteTask, editTask, tasks, toggleTask } = useTasks();
  const doneTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      {tasks.length === 0 ? (
        <div>no tasks</div>
      ) : (
        <TodoList
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          tasks={doneTasks}
          editTask={editTask}
        />
      )}
    </div>
  );
};
