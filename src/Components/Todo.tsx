import { useContext } from "react";
import { todoListContext } from "../Context/TodoListContext";
import todoInterface from "../interface/TodoInterface";

function Todo({ id, title, completed }: todoInterface) {
  const context = useContext(todoListContext);

  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }

  let { RemoveActivity, CompleteActivity } = context;

  function HandleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    CompleteActivity(id, (completed = e.target.checked));
  }

  return (
    <>
      <div className="view">
        <input
          className="toggle"
          checked={completed}
          type="checkbox"
          onChange={HandleOnChange}
        ></input>
        <label htmlFor="">{title}</label>
        <button
          className="destroy"
          onClick={() => {
            RemoveActivity(id);
          }}
        ></button>
      </div>
    </>
  );
}

export default Todo;
