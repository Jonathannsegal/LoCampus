import React from 'react';
import { Box, Text } from '@chakra-ui/core';
//import Sidebar from '../src/components/Sidebar';
import BadgeCase from '../src/components/BadgeCase';
import Container from '../src/components/Shared/Container';

const Badges = () => (
  <Container>
    {/* <Sidebar /> */}
    <Box w="94vw" position="absolute" left="6%" px="100px" py="50px">
        <Text fontSize={[60, 60, 80, 80]} fontFamily="Lexend Deca" display="block">
          Badge Collection
        </Text>
    </Box>
    <BadgeCase zIndex={99} color="blue.300" w="94%" h="100%" position="relative" left="6%" top="34vh"/>
  </Container>
);

export default Badges;