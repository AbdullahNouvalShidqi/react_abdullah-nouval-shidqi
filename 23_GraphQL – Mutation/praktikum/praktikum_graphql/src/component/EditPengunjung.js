import { useState, useEffect } from 'react';

const EditPengunjung = (props) => {
    const [state, setState] = useState({
        ...props.toEditData,
        editing: true,
    })

      useEffect(() => {
        if(props.toEditData.nama !== ''){
            setState({
                ...props.toEditData,
                editing: false
            })
        }
        
      }, [props.toEditData])
    
      const onChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
      }
    
      const handleSubmit = (e) => {
        if (state.nama.trim() && state.umur && state.jenisKelamin) {
          const umur = state.umur
          if (umur >= 75 || umur <= 12) {
            alert("Umur tidak sesuai")
          } else {
            const afterEditData = {
                id: state.id,
                nama: state.nama,
                umur: state.umur,
                jenisKelamin: state.jenisKelamin,
            }
            props.editPengunjung(afterEditData)
            setState({
              ...state,
              nama: "",
              umur: "",
              jenisKelamin: "Pria",
              editing: true
            })
          }
        } else {
          alert("Data masih ada yang kosong")
        }
      }
    
      const handleTutupInput = () => {
        setState({
          ...state,
          editing: true,
        })
      }
    
      let viewMode = {}
      let editMode = {}
    
      if (state.editing) {
        viewMode.display = "none"
      } else {
        editMode.display = "none"
      }
    
      return (
        <div>
          <div onSubmit={handleSubmit} style={viewMode}>
            <h2 style={{marginTop: '30px'}}>Edit Data</h2>
            <p>Masukkan Nama Anda</p>
            <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
            <p>Masukkan Umur Anda</p>
            <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
            <p>Masukkan Jenis Kelamin Anda</p>
            <select onChange={onChange} name="jenisKelamin">
              <option value="Pria" selected={state.jenisKelamin.toLowerCase() === 'pria'}>
                Pria
              </option>
              <option value="Wanita" selected={state.jenisKelamin.toLowerCase() === 'wanita'}>Wanita</option>
            </select>
            <p></p>
            <button onClick={handleSubmit}>Update Data</button>
            <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
              Selesai
            </button>
          </div>
        </div>
      )
}

export default EditPengunjung;