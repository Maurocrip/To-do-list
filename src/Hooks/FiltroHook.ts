
import { useState } from "react";
import todoInterface from "../interface/TodoInterface";
import { FilterReturn } from "../Types/TypeFilterReturn";

export default function useFiltro(initial : string) : FilterReturn {
  const [filtro, setFiltro] = useState<string>(initial);

  function Filtrar(todoList: Array<todoInterface> ) 
  {
    let filterToDoList: Array<todoInterface> = [];
    switch (filtro) {
      case "all":
        filterToDoList = [...todoList];
      break;

      case "completed":
        filterToDoList = todoList.filter((todoElemnt: todoInterface) => todoElemnt.completed );
      break;
      
      case "todo":
        filterToDoList = todoList.filter((todoElemnt: todoInterface) => !todoElemnt.completed);
      break;
    }

    return filterToDoList;
  }

  return [filtro, setFiltro, Filtrar];
}