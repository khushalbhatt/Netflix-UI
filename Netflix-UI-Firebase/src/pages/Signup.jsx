import React, { useState } from 'react';
import styled from 'styled-components';
import Backgroundimage from '../components/Backgroundimage';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formValue, setFormValues] = useState({
    email: '',
    password: '',
  });
  const handleSignIn = async () => {
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });
  return (
    <Container showPassword={showPassword}>
      <Backgroundimage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere and anytime</h4>
            <h5>
              Ready to watch? Enter your email to create or restart membership
            </h5>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValue.email}
              onChange={(e) =>
                setFormValues({
                  ...formValue,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValue.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValue,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
position: relative;
.content{
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.5);
  height: 100vh;
  width: 100vw;
  display:grid;
  grid-template-rows:15vh 85vh;
  .body{
    gap: 1rem;
    .text{
      gap: 1rem;
      text-align: center;
      sont-sixe:2rem;
      h1{
        padding{
          0 25rem;
        }
      }
    }
    .form{
      display:grid;
      grid-template-column:${({ showPassword }) => {
        showPassword ? '1fr 1fr' : '2fr 2fr';
      }};
      width:40%;
      input{
        color:black;
        border:none;
        padding: 1.5rem;
        font-size: 1.2rem;
        border: 1px solid black;
        &:focus{
          outline:none;
        }
      }
      button{
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor:pointer;
        color:white;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
    button{
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor:pointer;
      color:white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
  }
}
`;
