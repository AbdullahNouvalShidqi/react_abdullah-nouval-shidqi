import { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
    const baseData = {
        firstName: '',
        secondName: '',
        email: '',
        message: ''
    }

    const alertMessages = {
        firstNameAlert: '',
        secondNameAlert: '',
        emailAlert: '',
        messageAlert: ''
    }

    const [data, setData] = useState(baseData);
    const [errorMessage, setErrorMessage] = useState(alertMessages);

    const nameRegEx = /^[a-zA-Z\s]*$/;
    // eslint-disable-next-line no-useless-escape
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleOnChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        validator(name, value);

        setData({...data, [name]: value})
    }

    const validator = (name, value) => {
        switch(name){
            case 'firstName':
                if(!value.match(nameRegEx) || value === '' || value.includes('  ')){
                    setErrorMessage({...errorMessage, firstNameAlert: "Nama Lengkap Harus Berupa Huruf"});
                } else{
                    setErrorMessage({...errorMessage, firstNameAlert: ""})
                }
                break;
            case 'secondName':
                if(!value.match(nameRegEx) || value === '' || value.includes('  ')){
                    setErrorMessage({...errorMessage, firstNameAlert: "Nama Lengkap Harus Berupa Huruf"});
                } else{
                    setErrorMessage({...errorMessage, firstNameAlert: ""})
                }
                break;
            case 'message':
                if(value === ''){
                    setErrorMessage({...errorMessage, messageAlert: 'Tolong masukkan message untuk kita'});
                } else {
                    setErrorMessage({...errorMessage, messageAlert: ''});
                }
                break;
            default:
                if(!value.match(emailRegEx)){
                    setErrorMessage({...errorMessage, emailAlert: "Email Tidak Sesuai"});
                } else {
                    setErrorMessage({...errorMessage, emailAlert: ""});
                }
                break;
        }
    }

    const submitValidate = () =>{
        if(data.firstName === '' || data.secondName === '' || data.email === '' || data.message === ''){
            return true;
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(alertMessages.firstNameAlert !== '' || alertMessages.emailAlert !== '' || alertMessages.messageAlert !== '' || submitValidate()){
            alert('Masih ada data yang tidak sesuai cek kembali');
            return;
        }
        alert('Data berhasil dikirim');
        setData(baseData);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Contact Us</h1>
                <div className="contact-form-container">
                    <label htmlFor="firstName">
                        First Name
                        <br />
                        <input type="text" name="firstName" value={data.firstName} onChange={handleOnChange}/>
                    </label>
                    <label htmlFor="secondName">
                        Second Name
                        <br />
                        <input type="text" name="secondName" value={data.secondName} onChange={handleOnChange}/>
                    </label>
                </div>
                <p className='alert-message'>{errorMessage.firstNameAlert}</p>
                <div className="contact-form-container">
                    <label htmlFor="email">
                        Email
                        <br />
                        <input type="email" name="email" value={data.email} onChange={handleOnChange}/>
                    </label>
                </div>
                <p className='alert-message'>{errorMessage.emailAlert}</p>
                <div className="contact-form-container">
                    <label htmlFor="message">
                        What can we help you with?
                        <br />
                        <textarea name="message" id="" cols="30" rows="5" value={data.message} onChange={handleOnChange}></textarea>
                    </label>
                </div>
                <p className='alert-message'>{errorMessage.messageAlert}</p>
                <input type='submit' value='Submit'/>
            </div>
        </form>
    );
}

export default ContactForm;