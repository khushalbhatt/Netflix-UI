import React, { useState } from 'react';
import styled from 'styled-components';
import Backgroundimage from '../components/Backgroundimage';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

export default function Login() {
  const navigate = useNavigate();
  const [formValue, setFormValues] = useState({
    email: '',
    password: '',
  });
  const handleLogIn = async () => {
    try {
      const { email, password } = formValue;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });
  return (
    <Container>
      <Backgroundimage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Log In</h3>
              <div className="container flex column">
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
                <button onClick={handleLogIn}>Log In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .h3{
      margin: 10px
    }
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;