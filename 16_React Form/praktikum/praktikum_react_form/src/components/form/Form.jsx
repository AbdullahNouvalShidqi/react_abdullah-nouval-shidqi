import { useRef } from "react";
import { useState } from "react";
import './Form.css';


const Form = () =>{
    const baseData = {
        nama: "",
        email: "",
        noHandphone: "",
        pendidikan: "IT",
        kelas: "",
        harapan: "",
    }

    const baseError = {
        nama: "Nama Lengkap Harus Berupa Huruf",
        email: "Email Tidak Sesuai",
        noHandphone: "No Handphone Tidak Sesuai",
    }

    const nameRegEx = /^[a-zA-Z\s]*$/;
    // eslint-disable-next-line no-useless-escape
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const noHandphoneRegEx = /^\d+$/;

    const [data, setData] = useState(baseData);
    const [errorMessage, setErrorMessage] = useState(baseError);
    const suratKesungguhan = useRef('');

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        validator(name, value);

        setData({
            ...data,
            [name]: value
        });
    }

    const validator = (name, value) => {
        switch(name){
            case 'nama':
                if(!value.match(nameRegEx) || value === '' || value.includes('  ')){
                    setErrorMessage({...errorMessage, [name]: "Nama Lengkap Harus Berupa Huruf"});
                } else{
                    setErrorMessage({...errorMessage, [name]: ""})
                }
                break;
            case 'email':
                if(!value.match(emailRegEx)){
                    setErrorMessage({...errorMessage, [name]: "Email Tidak Sesuai"});
                } else {
                    setErrorMessage({...errorMessage, [name]: ""});
                }
                break;
            default:
                if(!value.match(noHandphoneRegEx) || value.length < 9 || value.length > 14 ){
                    setErrorMessage({...errorMessage, [name]: "No Handphone Tidak Sesuai"});
                } else{
                    setErrorMessage({...errorMessage, [name]: ""});
                }
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(errorMessage.nama !== '' && errorMessage.email !== '' && errorMessage.noHandphone !== ''){
            alert("Data Pendaftar Tidak Sesuai");
        } else{
            alert("Data Pendaftar " + data.nama +" Berhasil Diterima");
        }
    }

    const resetData = () =>{
        setData(baseData);
        setErrorMessage(baseError);
    }

    return(
        <>
            <form className="costum-form" onSubmit={handleSubmit}>
                <label>
                    Nama Lengkap:
                    <input 
                        type="text"
                        name="nama"
                        value={data.nama}
                        onChange={handleOnChange}
                        className="input"
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={handleOnChange}
                        className="input"
                    />
                </label>
                <label>
                    No Handphone:
                    <input 
                        type="text"
                        name="noHandphone"
                        value={data.noHandphone}
                        onChange={handleOnChange}
                        className="input"
                    />
                </label>
                <label>
                    Latar Belakang Pendidikan:
                    <br />
                    <input 
                        checked={data.pendidikan === 'IT'} 
                        type="radio"
                        name="pendidikan"
                        value='IT'
                        onChange={handleOnChange}
                    /> IT
                    <input 
                        type="radio"
                        name="pendidikan"
                        value='NonIT'
                        onChange={handleOnChange}
                    /> NonIT
                </label>
                <br />
                <label>
                    Kelas Coding yang Dipilih:
                    <select className="input" name="kelas" id="kelas" onChange={handleOnChange}>
                        <option value="Pilih Program" >Pilih Program</option>
                        <option value="React">React</option>
                        <option value="Flutter">Flutter</option>
                    </select>
                </label>
                <label>
                    Foto Surat Kesungguhan:
                    <input className="input" type="file" ref={suratKesungguhan} />
                </label>
                <label>
                    Harapan Untuk Coding Bootcamp Ini:
                    <textarea name="harapan" value={data.harapan} onChange={handleOnChange} />
                </label>
                <ul>
                    {errorMessage.nama && <li>{errorMessage.nama}</li>}
                    {errorMessage.email && <li>{errorMessage.email}</li>}
                    {errorMessage.noHandphone && <li>{errorMessage.noHandphone}</li>}
                </ul>
                
                <div className="buttons">
                    <input className="submit-button" type='submit' value='Submit' />
                    <button className="reset-button" type="reset" onClick={resetData}>Reset</button>
                </div>
            </form>
        </>
    );
}

export default Form;