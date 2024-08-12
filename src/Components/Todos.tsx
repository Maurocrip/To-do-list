import todoInterface from "../interface/TodoInterface.ts";
import Todo from "./Todo.tsx";

export default function Todos({
  todoList,
}: {
  todoList: Array<todoInterface>;
}) {
  return (
    <>
      <ul className="todo-list">
        {todoList.map((elemnt) => {
          return (
            <li key={elemnt.id} className={elemnt.completed ? "completed" : ""}>
              <Todo
                id={elemnt.id}
                completed={elemnt.completed}
                title={elemnt.title}
              ></Todo>
            </li>
          );
        })}
      </ul>
    </>
  );
}
