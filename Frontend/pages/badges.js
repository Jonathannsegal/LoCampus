import React from 'react';
import { Image, Box, Heading } from '@chakra-ui/core';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import BadgeCase from '../components/BadgeCase';

const Badges = () => (
  <>
    <Sidebar />
    <Box w="94vw" position="absolute" left="6%" px="100px" py="50px">
      <Heading>Badge Collection</Heading>
    </Box>
    <BadgeCase zIndex={99}/>
  </>
);

export default Badges;