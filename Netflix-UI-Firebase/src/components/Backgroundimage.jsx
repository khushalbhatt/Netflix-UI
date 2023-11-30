import React from 'react';
import styled from 'styled-components';
import background from '../assets/login.jpg';

export default function Backgroundimage() {
  return (
    <Container>
      <img
        src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL2dUQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cb8f3adb5caeed585e7cfd1cc515dcbd4cb37b19/login.jpg"
        alt="background"
      />
    </Container>
  );
}

const Container = styled.div`
height: 100vh;
width: 100vw;
img{
  height: 100vh;
  width: 100vw;
}
`;
