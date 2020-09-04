import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';
import Login from '../components/Onboarding/Login';
import Header from '../components/Onboarding/Header';

const Video = styled.video`
  object-fit: cover;
  height: 100vh;
  width: 100vw;
`;

export default () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  return (
    <Box overflow="hidden">
      <Header school="Iowa State University" />
      <Login />
      <Video ref={videoRef} autoPlay loop muted>
        <source src="/videos/iowastate.mp4" type="video/mp4" />
      </Video>
    </Box>
  );
};
