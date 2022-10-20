import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import GetAllPassangers from '../config/GetAllPassangers';
import DeletePassangerById from '../config/DeletePassangerById';
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import AddPassanger from '../config/AddPassanger';
import EditPengunjung from './EditPengunjung';
import UpdatePassanger from '../config/UpdatePassanger';

const Home = () => {
    const {data, loading: getLoading, error: getError} = useQuery(GetAllPassangers)
    const [deletePassangerById, {loading: deleteLoading, error: deleteError}] = useMutation(DeletePassangerById, {refetchQueries: [GetAllPassangers]});
    const [addPassanger, {loading: addLoading, error: addError}] = useMutation(AddPassanger, {refetchQueries: [GetAllPassangers]});
    const [updatePassanger, {loading: updateLoading, error: updateError}] = useMutation(UpdatePassanger, {refetchQueries: [GetAllPassangers]});
    const [toEditData, setToEditData] = useState({
        id: '',
        nama: '',
        jenisKelamin: '',
        umur: ''
    });
    
    const hapusPengunjung = (id) => {
        deletePassangerById({variables: {id: id}})
    }

    const tambahPengunjung = (newData) => {
        addPassanger({variables: newData})
    }

    const toEditOnClick = (dataToEdit) => {
        setToEditData(dataToEdit);
    }

    const editPengunjung = (toUpdateData) => {
        updatePassanger({variables: toUpdateData});
    }
    
    return (
        <div>
            <Header/>
            <ListPassenger 
                data={data}
                error={getError || deleteError || addError || updateError}
                loading={getLoading || deleteLoading || addLoading || updateLoading}
                hapusPengunjung={hapusPengunjung}
                toEditOnClick={toEditOnClick}
            />
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
            <EditPengunjung 
                toEditData={toEditData}
                editPengunjung={editPengunjung}
            />
        </div>
    )
}

export default Home;