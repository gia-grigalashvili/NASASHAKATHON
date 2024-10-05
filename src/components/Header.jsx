import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from "/public/imgs/605a947c2d662438d332bb78_logo-nft-webflow-template.png";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true for login, false for signup

  const toggleModal = (type) => {
    setIsLogin(type === 'login');
    setShowModal(!showModal);
  };

  return (
    <Headers>
      <img src={Logo} alt="Logo" />
      <div className="maindiv"> 
        <button className="loginss" onClick={() => toggleModal('login')}>
          <h1>logins</h1>
        </button>
        <button className="signup" onClick={() => toggleModal('signup')}>
          <h1>signup</h1>
        </button>
      </div>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            {isLogin ? (
              <>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
              </>
            ) : (
              <>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
              </>
            )}
            <button onClick={() => setShowModal(false)}>Submit</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Headers>
  );
}

const Headers = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    width: 130px;
    height: 60px;
  }

  .maindiv {
    display: flex;
    gap: 20px;
    padding: 20px;
    border: 2px solid red; /* Add red border */
    border-radius: 30px;

    h1 {
      font-size: 20px;
      color: #fff;
    }
  }

  .loginss, .signup {
    background: none; 
    border: none;
    cursor: pointer;

    h1 {
      transition: color 0.3s ease; 
    }

    &:hover h1 {
      color: red; 
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it appears on top */
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px; /* Adjust width as needed */

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default Header;
