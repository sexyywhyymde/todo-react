import { Button } from "./button";

const ClearTasksComponent = ({ tasks, deleteCompleted }) => {
  const done = tasks.filter((task) => !task.completed).length;
  const isCompleted = tasks.some((task) => task.completed);
  
  return (
    <div className="flex justify-between items-center text-sm text-gray-400">
      <span>Осталось сделать {done} заданий</span>
      {isCompleted && (
        <Button handleClick={deleteCompleted} type="delete">
          Delete completed
        </Button>
      )}
    </div>
  );
};

export default ClearTasksComponent
