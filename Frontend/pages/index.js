import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { withRedux } from '../src/lib/redux';
import Login from '../src/components/Onboarding/Login';
import Header from '../src/components/Onboarding/Header';

const Video = styled.video`
  object-fit: cover;
  height: 100vh;
  width: 100vw;
`;

const useIndex = () => {
  const username = useSelector((state) => state.username);
  return { username };
};

const Index = () => {
  const { username } = useIndex();
  const videoRef = useRef();
  const router = useRouter();

  useEffect(() => {
    if (username != null) {
      router.push('/home');
    };
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

export default withRedux(Index);
