import todoInterface from "../interface/TodoInterface";
import { UseTodoListReturn } from "./TypeTodoListReturn";

export type ContextReturn = UseTodoListReturn & 
{
    FiltrarLista: () => todoInterface[],
    setFiltro: React.Dispatch<React.SetStateAction<string>>,
    filtro : string
};