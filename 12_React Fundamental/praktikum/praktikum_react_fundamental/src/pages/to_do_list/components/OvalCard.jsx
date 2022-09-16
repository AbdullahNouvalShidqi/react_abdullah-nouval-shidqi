import styles from "./ToDoList.module.css";

export default function OvalCard({ToDoList}){

    return (
        <div>
            <button className={styles.card}>
                {ToDoList.completed ? <strike><p>{ToDoList.title}</p></strike> : <p>{ToDoList.title}</p>}
            </button>
        </div>
    );
}