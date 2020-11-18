import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Button,
  Flex,
  Box,
  IconButton,
  useToast,
} from '@chakra-ui/core';
import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { withRedux } from '../../lib/redux';
import { useDispatch } from 'react-redux';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;
const useContainer = () => {

  const dispatch = useDispatch();
  const setBadge = (badgeName, unlocked) =>
      dispatch({
          type: 'SET_BADGE',
          payload: { badge: badgeName, unlocked: unlocked },
      });

  const badges = useSelector((state) => ({...state.badges}));
  return { badges, setBadge };
};

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { badges, setBadge } = useContainer();
  const toast = useToast();

  const colorButtonClicked = () => {
    toggleColorMode();
    if(!badges.daynight){
      setBadge('daynight', true);
      toast({
        title: "\"Night Owl\" Badge Earned!",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    }
  };

  const bgColor = {
    light: '#ffffff',
    dark: 'gray.900',
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white',
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)',
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="100%"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        mt={[0, 0, 8]}
        px={8}
        py={0}
        mb={5}
        mx="auto"
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          onClick={colorButtonClicked}
        />
        <Box>
          <NextLink href="/badges" passHref>
            <Button as="a" variant="ghost">
              Badges
            </Button>
          </NextLink>
          <NextLink href="/personal" passHref>
            <Button as="a" variant="ghost">
              Personal
            </Button>
          </NextLink>
          <NextLink href="/location" passHref>
            <Button as="a" variant="ghost">
              Location
            </Button>
          </NextLink>
          <NextLink href="/home" passHref>
            <Button as="a" variant="ghost">
              Home
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        mt={8}
        mb="2em"
      >
        {children}
      </Flex>
    </>
  );
};

export default withRedux(Container);
