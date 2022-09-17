import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
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
        }
    }

    tambahTodos = (newTodos) => {
        const newTodosToAdd = {
            id: uuidv4, ...newTodos, 
        }

        this.setState({data: [...this.state.data, newTodosToAdd]});
    }

    hapusTodos = (id) => {
        const newTodos = this.state.data.filter(item => item.id !== id);

        this.setState({data: newTodos});
    }

    ubahStatusTodos = (id) => {
        const index = this.state.data.findIndex(data => data.id === id);
        let data = [...this.state.data];

        if(index !== -1){
            data[index].completed = !data[index].completed;
        }

        this.setState({data: data});
    }

    render(){
        return(
            <>
                <Header title={"Todos"}/>
                <TodosInput tambahTodos={this.tambahTodos}/>
                <TodosList data={this.state.data} hapusToDos={this.hapusTodos} ubahStatusTodos={this.ubahStatusTodos} />
            </>
        );
    }
}

export default Home;