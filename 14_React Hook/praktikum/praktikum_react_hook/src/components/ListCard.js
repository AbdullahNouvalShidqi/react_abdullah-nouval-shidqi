const ListCard = (props) => {
    const {data, hapusTodos, ubahStatusTodos} = props;

    return(
        <>
            <tr>
                <td>
                    <input 
                        onChange={() => {ubahStatusTodos(data.id)}} 
                        className='costum-checkbox' 
                        type={"checkbox"} 
                        {...data.completed === true ? {checked: "checked"} : {checked: ""}}
                        {...data.completed === true ? {style:{color: "grey"}} : {style:{color: "black"}}} 
                    />
                    {data.completed === true ? <strike><label>{data.title}</label></strike> : <label>{data.title}</label>}
                </td>
                <td><button className='costum-delete-button' onClick={() => {hapusTodos(data.id)}}>Delete</button></td>
            </tr>
        </>
    );
}

export default ListCard;