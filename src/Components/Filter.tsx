import { useContext } from "react";
import { todoListContext } from "../Context/TodoListContext";

export default function Filter() {
  const context = useContext(todoListContext);

  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }

  let { setFiltro, filtro } = context;

  return (
    <>
      <ul className="filters">
        <li>
          <a
            className={filtro === "all" ? "selected" : ""}
            onClick={() => {
              setFiltro("all");
            }}
          >
            Todos
          </a>
        </li>
        <li>
          <a
            className={filtro === "completed" ? "selected" : ""}
            onClick={() => {
              setFiltro("completed");
            }}
          >
            Completados
          </a>
        </li>
        <li>
          <a
            className={filtro === "todo" ? "selected" : ""}
            onClick={() => {
              setFiltro("todo");
            }}
          >
            Por hacer
          </a>
        </li>
      </ul>
    </>
  );
}
