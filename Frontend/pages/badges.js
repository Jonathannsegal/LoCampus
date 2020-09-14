import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
// import Sidebar from '../src/components/Sidebar';
import BadgeCase from '../src/components/BadgeCase';
import Container from '../src/components/Shared/Container';

const Badges = () => (
  <Container>
    {/* <Sidebar /> */}
    <Box w="94vw" position="absolute" left="6%" px="100px" py="50px">
      <Heading>Badge Collection</Heading>
    </Box>
    <BadgeCase zIndex={99} />
  </Container>
);

export default Badges;