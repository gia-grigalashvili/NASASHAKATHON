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
    <HeaderWrapper>
      <LogoWrapper>
        <img src={Logo} alt="Company Logo" />
        <h1>EcoShade</h1>
      </LogoWrapper>
     
      <ButtonContainer>
        <button className="loginButton" onClick={() => toggleModal('login')}>
          <span>Login</span>
        </button>
        <button className="signupButton" onClick={() => toggleModal('signup')}>
          <span>Signup</span>
        </button>
      </ButtonContainer>

      {showModal && (
        <ModalOverlay aria-modal="true" role="dialog">
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
            <CloseButton onClick={() => setShowModal(false)}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5%;
  
  color: white;
  h1 {
    font-size: 24px;
    font-family: 'Edu AU VIC WA NT Guides', sans-serif;
  }
`;

const LogoWrapper = styled.div`
display: flex;
gap: 20px;
align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
  h1{
    color: #e4e4e4e8;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  
  button {
    background: none;
    border: 2px solid #8900f1;
    border-radius: 30px;
    cursor: pointer;
    padding: 10px 20px;
    color: white;
    transition: color 0.3s ease, border-color 0.3s ease;
    
    span {
      font-size: 16px;
    }
    
    &:hover {
      color: red;
      border-color: red;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  
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

const CloseButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

export default Header;
