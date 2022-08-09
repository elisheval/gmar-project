import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { sendRequest } from '../globalFunctions';
function SignUp() {
    // const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleSignUpSubmit = async (e) => {
        let userDetails = { password, firstName, lastName, id, email, phoneNumber, city, street, houseNumber, birthDate };
        let response = await (await sendRequest('customer/signup', 'post', userDetails)).json();
        console.log(response);
        if (response.userExist) {
            alert(response.errorMassege)
        }
        else {
            alert('נרשמת בהצלחה')
        }
        e.preventDefault();
    }


    return (
        <div className='sign-up'>
            <div className='title-sign-up'>
                <h1>הצטרפות</h1>
                {/* <Link to="/home/login">אני כבר רשומ\ה</Link> */}
            </div>
            <div className='sign-up-form'>
                <h1>ברוכים הבאים! הגעת למקום הנכון! התהליך קצר ומהיר,<br />ויקח לא יותר מחמש דקות</h1>
                <div className='store-sign-up'>
                    <input type='text' onChange={(e) => setFirstName(e.target.value)} placeholder='שם פרטי' value={firstName}></input><br />
                    <input type='text' onChange={(e) => setLastName(e.target.value)} placeholder='שם משפחה' ></input><br />
                    <input type='text' onChange={(e) => setPassword(e.target.value)} placeholder='סיסמא' ></input><br />
                    <input type='number' onChange={(e) => setId(e.target.value)} placeholder='תעודת זהות'></input><br />
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='מייל'></input><br />
                    <input type='number' onChange={(e) => setPhoneNumber(e.target.value)} placeholder='טלפון'></input><br />
                    <input type='text' onChange={(e) => setCity(e.target.value)} placeholder='עיר'></input><br />
                    <input type='text' onChange={(e) => setStreet(e.target.value)} placeholder='רחוב'></input><br />
                    <input type='number' onChange={(e) => setHouseNumber(e.target.value)} placeholder='מספר בית'></input><br />
                    <lable>תאריך לידה</lable><br />
                    <input type='date' onChange={(e) => setBirthDate(e.target.value)} placeholder='תאריך לידה'></input><br />
                    <button onClick={handleSignUpSubmit} >submit</button>
                </div>
            </div>
        </div>
    )
}


export default SignUp;