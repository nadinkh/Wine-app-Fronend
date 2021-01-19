import React, { useState } from 'react';

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


const SignUp = ({ toggleModal, modalIsOpen }) => {

    // const [modalIsOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const handleName = event => {
        setName(event.target.value)
        console.log('test');
    }
    const handleLastName = event => {
        setLastName(event.target.value)
        console.log('test');
    }
    const handlePhone = event => {
        setPhone(event.target.value)
        console.log('test');
    }
    const handleEmail = event => {
        setEmail(event.target.value)
        console.log('test');
    }
    const handlePassword = event => {
        setPassword(event.target.value)
        console.log('test');
    }
    const handleConfPassword = event => {
        setConfPassword(event.target.value)
        console.log('test');
    }
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>Sign Up</h2>
                <form className="sign-up-container">
                    <div className="first-last-name-container">
                        <div className="first-name-container">
                            <label for="fname">First Name:</label>
                            <input className="first-name"
                                onChange={event => handleName(event)} type="text"
                                placeholder="First Name" required
                            />
                        </div>
                        <div className="last-name-container">
                            <label for="lname">Last Name:</label>
                            <input className="last-name"
                                onChange={event => handleLastName(event)} type="text"
                                placeholder="Last Name"
                                required />
                        </div>
                    </div>
                    <label for="email">Email:</label>
                    <input className="sign-up-email"
                        onChange={event => handleEmail(event)} type="email"
                        placeholder="youremail@email.com"
                        required />
                    <label for="password">Password:</label>
                    <input className="sign-up-password"
                        onChange={event => handlePassword(event)} type="password"
                        placeholder="Enter your password"
                        required />
                    <label for="password-confirm">Confirm Password:</label>
                    <input className="sign-up-password-confirm"
                        onChange={event => handleConfPassword(event)} type="password"
                        placeholder="Enter your password again"
                        required />
                    <label for="phone">Enter your Phone Number:</label>
                    <input className="phone-number"
                        onChange={event => handlePhone(event)} type="tel"
                        placeholder="+927-XXXX-XXXXX"
                        required />
                    <button className="join" >Join</button>
                </form>
            </Modal>
        </div >
    );
}

export default SignUp