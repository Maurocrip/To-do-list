import todoInterface from "../interface/TodoInterface";
export type FilterReturn = 
[  
    filtro: string,
    setFiltro: React.Dispatch<React.SetStateAction<string>>,
    Filtrar: (todoList: Array<todoInterface>)=> todoInterface[]
];