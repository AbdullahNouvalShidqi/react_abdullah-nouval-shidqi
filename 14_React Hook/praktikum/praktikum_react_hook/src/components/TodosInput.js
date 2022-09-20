import { useState } from "react";
import './TodosInput.css'

function TodosInput ({tambahTodos}){
    const [state, setState] = useState(
        {
            title: "",
            completed: false
        }
    );

    const onChange = (e) => {
        setState({
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const titleIsNotEmpty = state.title;
        if(titleIsNotEmpty){
            const newData = {
                title: state.title,
                completed: false
            }

            tambahTodos(newData);
            setState({
                title: "",
                completed: false
            })
        } else {
            alert("Title is still empty");
        }
    }
    return(
        <div className={"main-container"} onSubmit={() => {}}>
            <input type={"text"} placeholder={"Add todo..."} value={state.title} name={'title'} onChange={onChange} />
            <button className="costum-button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default TodosInput;