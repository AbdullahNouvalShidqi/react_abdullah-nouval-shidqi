import ListItem from './ListItem';
// import { useQuery, useMutation } from '@apollo/client'
// // import { useState } from "react"
// // import GetDataByUserId from '../config/GetDataByUserId';
// import GetAllPassangers from '../config/GetAllPassangers'
// import DeletePassangerById from '../config/DeletePassangerById';


const ListPassenger = props => {
        if(props.loading){
            return <p>loading...</p>;
        }

        if (props.error){
            return <p>Error: Something Went Wrong</p>
        }
    
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {props.data?.passangersData_passangers.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                        toEditOnClick={props.toEditOnClick}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;