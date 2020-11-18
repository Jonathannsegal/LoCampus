import React from 'react';
import { Box, Text } from '@chakra-ui/core';
// import Sidebar from '../src/components/Sidebar';
import BadgeCase from '../src/components/BadgeCase';
import Container from '../src/components/Shared/Container';

const Badges = () => (
  <Container>
    {/* <Sidebar /> */}
    <Box w="100%" h="20%" position="relative" px="100px" py="5px">
      {/* <Text fontSize={[60, 60, 80, 80]} fontFamily="Lexend Deca" display="block">
        Badge Collection
      </Text> */}
    </Box>
    <BadgeCase
      zIndex={99}
      color="blue.300"
      w="100%"
      h="100%"
      position="relative"
      borderRadius="15px"
    />
  </Container>
);

export default Badges;
