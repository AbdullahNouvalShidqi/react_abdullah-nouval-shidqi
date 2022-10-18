import ListItem from './ListItem';
import { useLazyQuery } from '@apollo/client'
import { useState } from "react"
import GetDataByUserId from '../config/GetDataByUserId';


const ListPassenger = props => {
        const [getData, {data, loading, error}] = useLazyQuery(GetDataByUserId)
        const [userId, setUserId] = useState(0);

        if(loading){
            return <p>loading...</p>;
        }

        if (error){
            return <p>Error: {error}</p>
        }

        const onGetData = () => {
            getData({variables : {
                id : userId
            }})
        }

        const onChangeDataId = (e) =>{
            if(e.target){
                setUserId(e.target.value)
            }
        }
    
    return (
        <div>
            <input style={{marginBottom: '20px'}} value={userId} onChange={onChangeDataId}/>
            <button onClick={onGetData}>Get Data</button>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {data?.passangersData_passangers.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;