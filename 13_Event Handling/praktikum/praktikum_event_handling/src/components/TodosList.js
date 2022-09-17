import ListCard from './ListCard';
import './TodosList.css';

const TodosList = (props) => {
    const {data, hapusToDos: hapusTodos, ubahStatusTodos} = props;
    return(
        <div className="container">
            <table>
                {data.map((data) => (
                    <ListCard data={data} hapusTodos={hapusTodos} ubahStatusTodos={ubahStatusTodos} />
                ))}
            </table>
        </div>
    );
}

export default TodosList;