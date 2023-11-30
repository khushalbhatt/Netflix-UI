import React, { useState } from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Player() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/2gTC4uWP3_Y?autoplay=1"
          title="Breaking Bad | The Final Season Teaser"
          allow="autoplay;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}

const Container = styled.div`
.player{
  width: 100vw;
  height: 100vh;
  .back{
    position: absolute;
    padding: 2rem;
    z-index: 1;
    svg{
      font-size: 3rem;
      cursor: pointer:
    }
  }
}
`;
