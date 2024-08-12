import { useReducer } from "react";
import { TodoReducer } from "../reducer/TodoReducer";
import todoInterface from "../interface/TodoInterface";
import { UseTodoListReturn } from "../Types/TypeTodoListReturn";

export default function useTodoList() : UseTodoListReturn {
    const initial: Array<todoInterface> = JSON.parse(window.localStorage.getItem('todoList') ||  "[]");
    const [todoList, dispatch] = useReducer(TodoReducer,initial);

      function RemoveActivity(id: todoInterface["id"]) {
        dispatch({ type: "REMOVE_PRODUCT", payLoad: { id: id } });
      }

      function DeletCompletedActivity() {
        dispatch({ type: "REMOVE_ALL_COMPLETED" });
      }
    
      function countCompleted(): boolean {
        return todoList.some((element: todoInterface) => element.completed);
      }
    
      function CreatTodo(title: todoInterface["title"]) {
        dispatch({ type: "ADD_PRODUCT", payLoad: { title } });
      }

      function CompleteActivity(id: todoInterface["id"], completed: todoInterface["completed"]){
        dispatch({ type: "COMPLETE_ACTIVITY", payLoad: { id, completed } });
      }

      function ActiveTodos() {
        let retorno: number = 0;
        todoList.forEach((element: todoInterface) =>!element.completed ? retorno++ : retorno);
        return retorno;
      }

    return {todoList, RemoveActivity, DeletCompletedActivity, countCompleted, CreatTodo, CompleteActivity, ActiveTodos};
}