import todoInterface from "../interface/TodoInterface";

export type UseTodoListReturn = 
{  
    todoList: todoInterface[],
    RemoveActivity: (id: number) => void,
    DeletCompletedActivity: () => void,
    countCompleted: ()=>  boolean,
    CreatTodo: (todo: todoInterface["title"]) => void,
    CompleteActivity: ( id: todoInterface["id"],completed: todoInterface["completed"]) => void,
    ActiveTodos: () => number
};