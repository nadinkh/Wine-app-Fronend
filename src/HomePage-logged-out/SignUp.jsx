import React, { useState } from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom'

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
    const history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const handleFirstName = event => {
        setFirstName(event.target.value)
        console.log('test');
    }
    const handleLastName = event => {
        setLastName(event.target.value)
        console.log('test');
    }

    // const handleBio = event => {
    //     setBio(event.target.value)
    //     console.log('test');
    // }
    const handleEmail = event => {
        setEmail(event.target.value)
        console.log('test');
    }
    const handlePassword = event => {
        setPassword(event.target.value)
        console.log('test');
    }
    const handlePassword2 = event => {
        setPassword2(event.target.value)
        console.log('test');
    }


    const creatUser = async (event) => {
        event.preventDefault()
        const response = await axios.post('http://localhost:5000/api/users/register', {
            firstName: firstName,
            lastName: lastName,
            // bio: bio,
            email: email,
            password: password,
            password2: password2
        })
        console.log(response)
        // history.push('/HomeLogin')
        // const reload = window.location.reload()
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
                                onChange={event => handleFirstName(event)} type="text"
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
                    <label for="password">Confirm Password:</label>
                    <input className="sign-up-password"
                        onChange={event => handlePassword2(event)} type="password"
                        placeholder="Enter your password"
                        required />
                    <label for="bio">Bio</label>
                    {/* <input className="bio"
                        onChange={event => handleBio(event)} type="text"

                        required /> */}
                    <button className="join" onClick={creatUser} >Join</button>
                </form>
            </Modal>
        </div >
    );
}


export default SignUp;