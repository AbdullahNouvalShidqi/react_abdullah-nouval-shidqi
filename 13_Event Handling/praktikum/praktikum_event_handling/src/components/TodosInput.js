import { Component } from "react";
import './TodosInput.css'

class TodosInput extends Component{
    state = {
        title: "",
        completed: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const titleIsNotEmpty = this.state.title;
        if(titleIsNotEmpty){
            const newData = {
                title: this.state.title,
                completed: false
            }

            this.props.tambahTodos(newData);
            this.setState({
                title: "",
                completed: false
            })
        } else {
            alert("Title is still empty");
        }
    }

    render(){

        return(
            <div className={"main-container"} onSubmit={() => {}}>
                <input type={"text"} placeholder={"Add todo..."} value={this.state.title} name={'title'} onChange={this.onChange} />
                <button className="costum-button" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default TodosInput;