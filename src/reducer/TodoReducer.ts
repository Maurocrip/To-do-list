
import todoInterface from "../interface/TodoInterface";
import { TodoReducerActions } from "../Types/TypeReducer";

function updateLocalStorage(state: Array<todoInterface>) {
    window.localStorage.setItem("todoList", JSON.stringify(state));
}

export function TodoReducer(state: Array<todoInterface>, action: TodoReducerActions) : Array<todoInterface>
{
    let newTodoList: Array<todoInterface> = [...state];

    switch (action.type) {
      case "ADD_PRODUCT":
        newTodoList.push({ title: action.payload.title, id: newTodoList.length + 1, completed: false });  
      break;

      case "REMOVE_PRODUCT":
        newTodoList = state.filter((elementTodo) => elementTodo.id != action.payload.id);
      break;

      case "REMOVE_ALL_COMPLETED":
        newTodoList = state.filter((todoElemnt) => !todoElemnt.completed);
      break;

      case "COMPLETE_ACTIVITY":
        newTodoList = state.map((todoElement) => 
        {
          if (todoElement.id == action.payload.id) 
          {
            return {
              ...todoElement,
              completed: action.payload.completed,
            };
          }
          return todoElement;
        });
      break;
    }
    updateLocalStorage(newTodoList);
    return newTodoList; 
}