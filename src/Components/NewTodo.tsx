import React, { useContext, useState } from "react";
import { todoListContext } from "../Context/TodoListContext";

export default function NewTodo() {
  let [input, setInput] = useState<string>("");
  const context = useContext(todoListContext);

  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }
  let { CreatTodo } = context;

  function handleSubmitEvent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    CreatTodo(input);
    setInput("");
  }
  return (
    <form onSubmit={handleSubmitEvent}>
      <input
        type="text"
        className="new-todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Que necesitas hacer?"
        autoFocus
      />
    </form>
  );
}
