import { useSelector, useDispatch } from 'react-redux';
import { hapusTodos, ubahStatusTodos } from '../../storage/todosSlice';
import ListCard from '../listCard/ListCard';
import './TodosList.css';

const TodosList = () => {
    const data = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    return(
        <div className="container">
            <table>
                {data.map((data) => (
                    <ListCard
                        key={data.id}
                        data={data}
                        hapusTodos={() => {
                            dispatch(hapusTodos(data.id))
                        }}
                        ubahStatusTodos={() => {
                            dispatch(ubahStatusTodos(data.id));
                        }} 
                    />
                ))}
            </table>
        </div>
    );
}

export default TodosList;