import { createContext } from "react";
import useTodoList from "../Hooks/TodolistHook";
import useFiltro from "../Hooks/FiltroHook";
import { ContextReturn } from "../Types/TypeContextFilter";

export const todoListContext = createContext<ContextReturn | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function TodoListProvider({ children }: Props) {
  const [filtro, setFiltro, Filtrar] = useFiltro("all");
  const {
    todoList,
    RemoveActivity,
    DeletCompletedActivity,
    countCompleted,
    CreatTodo,
    CompleteActivity,
    ActiveTodos,
  } = useTodoList();

  function FiltrarLista() {
    return Filtrar(todoList);
  }

  return (
    <todoListContext.Provider
      value={{
        RemoveActivity,
        CompleteActivity,
        ActiveTodos,
        FiltrarLista,
        setFiltro,
        DeletCompletedActivity,
        filtro,
        countCompleted,
        CreatTodo,
        todoList,
      }}
    >
      {children}
    </todoListContext.Provider>
  );
}
