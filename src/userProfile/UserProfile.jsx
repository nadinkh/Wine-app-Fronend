
import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom'

const ProfileSettings = () => {

    const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const handleFirstName = event => {
        setFirstName(event.target.value)
        console.log('test1')
    }

    const handleEmail = event => {
        setEmail(event.target.value)
        console.log('test4')
    }
    const handlePassword = event => {
        setPassword(event.target.value)
        console.log('test5')
    }
    const handleBio = event => {
        setBio(event.target.value)
        console.log('test6')
    }

    // const handleIsAdmin = event => {
    //     setIsAdmin(event.target.value)
    // }
    // const handleLikedWines=event=>{
    //     setLikedWines(event.target.value)
    // }

    // const updateUser = async (event) => {
    //     event.preventDefault()
    //     const response = await axios.put(`http://localhost:5000/api/users/userdetails/${localStorage.getItem('id')}`, {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         password: password,
    //         bio: bio,
    //         isAdmin:isAdmin,
    //         likedWines:likedWines
    //     })
    const updateEmail = async (event) => {
        event.preventDefault()
        const response = await axios.put(`http://localhost:5000/api/users/updateemail${localStorage.getItem('id')}`, {
            email: email

        })



        // history.push('/HomeLogin')
        // const reload = window.location.reload()

    }
    const UpdatePassword = async (event) => {
        event.preventDefault()
        const response = await axios.put(`http://localhost:5000/api/users/updatepassword${localStorage.getItem('id')}`, {
            password: password,

        })

    }
    const UpdateName = async (event) => {
        event.preventDefault()
        const response = await axios.put(`http://localhost:5000/api/users/updatename${localStorage.getItem('id')}`, {
            firstName: firstName,

        })

    }
    const UpdateBio = async (event) => {
        event.preventDefault()
        const response = await axios.put(`http://localhost:5000/api/users/updatebio${localStorage.getItem('id')}`, {
            bio: bio,

        })

    }


    return (
        <div className="settings-container">
            <div className="top-container"><h4>User Profile</h4></div>
            <div className="middle-container">
                <form>
                    <div className="first-last-name-profile-container">

                        <div className="name-container">
                            <label for="fname">Name</label>
                            <input className="first-name-profile" type="text"
                                onClick={UpdateName} />
                        </div>
                    </div>
                    <label className="profile-label" for="email-profile">Email</label>
                    <input className="email-profile" type="email"
                        onClick={updateEmail} />
                    <label className="profile-label" for="password">Password</label>
                    <input className="password-profile" type="password"
                        onClick={UpdatePassword} />
                    <label className="profile-label" for="bio">Bio</label>
                    <input className="bio" type="text"
                        onClick={UpdateBio} />

                    {/* <button className="save-changes-btn" onClick={updateUser} type="submit">Save Changes</button> */}

                </form>
            </div>
        </div>
    )

}
export default ProfileSettings
