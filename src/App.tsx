import { useContext } from "react";
import Todos from "./Components/Todos";
import { todoListContext } from "./Context/TodoListContext";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
function App() {
  const context = useContext(todoListContext);

  if (!context) {
    throw new Error("MyComponent must be used within a TodoListProvider");
  }
  let { FiltrarLista } = context;

  return (
    <>
      <div className="todoapp">
        <Header></Header>
        <Todos todoList={FiltrarLista()}></Todos>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
