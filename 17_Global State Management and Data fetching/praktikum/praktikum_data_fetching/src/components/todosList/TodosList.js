import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, hapusTodos, ubahStatusTodos } from '../../storage/features/todosSlice';
import ListCard from '../listCard/ListCard';
import './TodosList.css';

const TodosList = () => {
    const data = useSelector((state) => state.todos.data);
    const isLoading = useSelector((state) => state.todos.status === 'loading');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])

    return(
        <div className="container">
            {isLoading ? <h3 style={{textAlign: 'center'}}>Loading Data...</h3> : 
            <table>
                {data?.map((data) => (
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
            </table> }
            
        </div>
    );
}

export default TodosList;