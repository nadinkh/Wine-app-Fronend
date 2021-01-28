import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./homePage.css";

// import Image from '../Images/backgroungApp.jpg'
const HomePage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }
  function toggleModal2() {
    setIsOpen2(!modalIsOpen2);
	}
	function setUserOut() {
		localStorage.setItem('user', "out")
		 window.location.reload();
	}

  return (
    <>
      <div className="homepage-logged-out-container">
        <h1>Wine n' Shine</h1>
        {localStorage.getItem("user") === "in" && (
          <div>
            <h2>Shalom {localStorage.getItem("firstName")}!</h2>
          </div>
        )}
        <h2>TAKE A SIP OF THE BEST!</h2>
        <div className="btn-container">
          {localStorage.getItem("user") !== "in" && (
            <div>
              <button className="sign-in-btn" onClick={toggleModal2}>
                SignIn
              </button>
            </div>
          )}
          {localStorage.getItem("user") !== "in" && (
            <div>
              <button className="sign-up-btn" onClick={toggleModal}>
                Sign Up
              </button>
            </div>
          )}

          <Link to="/pairing">
            <div>
              <button className="pairing-recommendation-btn">
                Pairing Recommendation
              </button>
            </div>
          </Link>

          <Link to="/search">
            <button className="search-btn">Search</button>
          </Link>
        </div>
        {localStorage.getItem("user") === "in" && (
          <div>
            <button className="sign-up-btn" onClick={setUserOut}>
              Log Out
            </button>
          </div>
        )}
      </div>
      <SignIn modalIsOpen2={modalIsOpen2} toggleModal2={toggleModal2} />
      <SignUp modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
    </>
  );
};

export default HomePage;
