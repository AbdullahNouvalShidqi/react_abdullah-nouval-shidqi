import Header from "./components/Header";
import OvalCard from "./components/OvalCard";

export default function ToDoListPage({ToDoLists}) {
    return (
        <>
            <Header text="To Do App" />
            {ToDoLists.map(data => <OvalCard ToDoList={data}></OvalCard>)}
        </>
    );
}