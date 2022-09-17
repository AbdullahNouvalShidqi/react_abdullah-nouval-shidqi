import ToDoListPage from "./pages/to_do_list/ToDoListPage";
import { ToDoLists } from "./mockData";

function App() {
  return (
    <ToDoListPage ToDoLists={ToDoLists}/>
  );
}

export default App;
