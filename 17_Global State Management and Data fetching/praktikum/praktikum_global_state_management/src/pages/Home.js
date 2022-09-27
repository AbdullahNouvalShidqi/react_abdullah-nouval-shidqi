import Header from "../components/header/Header";
import HomeSidebar from "../components/homeSidebar/HomeSidebar";
import TodosInput from "../components/todosInput/TodosInput";
import TodosList from "../components/todosList/TodosList";

function Home (){
    return(
        <>
            <HomeSidebar />
            <Header title={"Todos"}/>
            <TodosInput />
            <TodosList />
        </>
    );
}

export default Home;