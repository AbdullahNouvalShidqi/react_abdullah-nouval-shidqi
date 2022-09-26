import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "../components/header/Header";
import HomeSidebar from "../components/homeSidebar/HomeSidebar";
import TodosInput from "../components/todosInput/TodosInput";
import TodosList from "../components/todosList/TodosList";

function Home (){
    const [data, setData] = useState(
        [
            {
                id: uuidv4(),
                title: "Mengerjakan Exercise",
                completed: true,
            },
            {
                id: uuidv4(),
                title: "Mengerjakan Assignment",
                completed: false,
            },
        ]
    );

    const tambahTodos = (newTodos) => {
        const newTodosToAdd = {
            id: uuidv4(), ...newTodos, 
        }

        setData((oldData) => [...oldData, newTodosToAdd]);
    }

    const hapusTodos = (id) => {
        const newTodos = data.filter(item => item.id !== id);

        setData(newTodos);
    }

    const ubahStatusTodos = (id) => {
        const index = data.findIndex(data => data.id === id);
        let dataToChange = [...data];

        if(index !== -1){
            dataToChange[index].completed = !dataToChange[index].completed;
        }

        setData(dataToChange);
    }

    return(
        <>
            <HomeSidebar />
            <Header title={"Todos"}/>
            <TodosInput tambahTodos={tambahTodos}/>
            <TodosList data={data} hapusTodos={hapusTodos} ubahStatusTodos={ubahStatusTodos} />
        </>
    );
}

export default Home;