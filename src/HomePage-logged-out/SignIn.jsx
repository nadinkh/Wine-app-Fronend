import React, { useState } from 'react';
import axios from "axios";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'gray'
    }
};

Modal.setAppElement('#root')

const SignIn = ({ toggleModal2, modalIsOpen2 }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleEmail = event => {
        setEmail(event.target.value)
        console.log('test');
    }
    const handlePassword = event => {
        setPassword(event.target.value)
        console.log('test2');
    }
    const logIn = async (event) => {
        event.preventDefault()
        const response = await axios.post('http://localhost:5000/api/users/login', {
            email: email,
            password: password
        })
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
        }
        console.log('logged in')
        // history.push('/HomeLogin')
        // const reload = window.location.reload()
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen2}
                onRequestClose={toggleModal2}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>signIn</h2>
                {/* <button onClick={toggleModal2}>close</button> */}
                <form className="signIn-container">
                    <label for="email-signIn">Email:</label>
                    <input className="signIn-email" onChange={event => handleEmail(event)}
                        type="email" placeholder="Enter your email" required />
                    <label for="password-signIn">Password:</label>
                    <input className="signIn-password" onChange={event => handlePassword(event)}
                        type="password" placeholder="Enter your password" required />
                    <button className="signIn-btn" onClick={logIn} type="submit">SignIn</button>
                </form>
            </Modal>
        </div >
    );
}

export default SignIn