import { TodoList } from "../components/TodoList";
import { Form } from "../components/Form";
import useTasks from "../hooks/useTasks";
import { useOutletContext } from "react-router-dom";
import ClearTasksComponent from "../components/ClearTasksComponent";

export const Home = () => {
  const { deleteTask, editTask, tasks, addTask, toggleTask, clearCompleted } = useTasks();
  const { searchWord } = useOutletContext();

  const searchTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div>
      <Form addTask={addTask} />
      {tasks.length === 0 ? (
        <div>no tasks</div>
      ) : (
        <TodoList
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          tasks={searchTasks}
          editTask={editTask}
        />
      )}
      <ClearTasksComponent tasks={tasks} deleteCompleted={clearCompleted}/>
    </div>
  );
};
