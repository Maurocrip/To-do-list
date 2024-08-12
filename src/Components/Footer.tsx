import { todoListContext } from "../Context/TodoListContext";
import { useContext } from "react";
import Filter from "./Filter";

export default function Footer() {
  const context = useContext(todoListContext);

  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }
  const { ActiveTodos, DeletCompletedActivity, countCompleted } = context;

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{ActiveTodos()}</strong> Tareas pendientes
        </span>

        <Filter></Filter>

        {countCompleted() ? (
          <button onClick={DeletCompletedActivity} className="clear-completed">
            Borrar completadas
          </button>
        ) : null}
      </footer>
    </>
  );
}
