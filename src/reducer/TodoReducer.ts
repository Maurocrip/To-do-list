
import todoInterface from "../interface/TodoInterface";

function updateLocalStorage(state: Array<todoInterface>) {
    window.localStorage.setItem("todoList", JSON.stringify(state));
}


export function TodoReducer(state: Array<todoInterface>, action: any) : Array<todoInterface>
{
    let todo: todoInterface = action.payLoad;
    let retorno: Array<todoInterface> = state;

    switch (action.type) {
      case "ADD_PRODUCT":

        let newTodoList: Array<todoInterface> = [...state];
        newTodoList.push({ title: todo.title, id: newTodoList.length + 1, completed: false });

        retorno = newTodoList;
          
      break;

      case "REMOVE_PRODUCT":
        retorno = state.filter((elementTodo) => elementTodo.id != todo.id);
      break;

      case "REMOVE_ALL_COMPLETED":
        retorno = state.filter((todoElemnt) => !todoElemnt.completed);
      break;

      case "COMPLETE_ACTIVITY":
        let newList: Array<todoInterface> = state.map((todoElement) => 
        {
          if (todoElement.id == todo.id) 
          {
            return {
              ...todoElement,
              completed: todo.completed,
            };
          }
          return todoElement;
        });
        retorno = newList;
      break;
    }
    updateLocalStorage(retorno);
    return retorno; 
}