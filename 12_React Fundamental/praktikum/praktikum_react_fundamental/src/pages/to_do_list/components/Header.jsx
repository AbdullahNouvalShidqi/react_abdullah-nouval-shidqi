import styles from "./ToDoList.module.css"

export default function Header({text}){
    return <h1 className={styles.header}>{text}</h1>;
}