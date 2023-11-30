import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img
          src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzRUQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f85dd6f4aa7a6ae2e0225694ac425b2f5530ee7d/logo.png"
          alt="logo"
        />
      </div>
      <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>
    </Container>
  );
}

const Container = styled.div`
padding: 0 4rem;
.logo{
  img{
    height: 5rem;
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

`;
