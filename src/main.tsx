import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "todomvc-app-css/index.css";
import TodoListProvider from "./Context/TodoListContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoListProvider>
      <App />
    </TodoListProvider>
  </StrictMode>
);

/*
- Inicializar proyecto con Vite
- Añadir estilos del TodoMVC
- Listar todos los TODOs
- Poder borrar un TODO
- Marcar TODO como completado
- Añadir forma de filtrar TODOs (Footer)
- Mostrar número de TODOs pendientes (Footer)
- Añadir forma de borrar todos los TODOs completados
- Crear Header con input (Header)
- Crear un TODO (Header)
*/
