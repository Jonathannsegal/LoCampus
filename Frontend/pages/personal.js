import React from 'react';
import {
  Box,
  Heading,
  IconButton,
  Flex,
  Text,
} from '@chakra-ui/core';
import { GiPoliceBadge } from 'react-icons/gi';
import BadgeCase from '../src/components/BadgeCase';
import PersonalHeading from '../src/components/PersonalHeading';
import PostList from '../src/components/PostList';
import Container from '../src/components/Shared/Container';

const Personal = () => (
  <Container>
    <PersonalHeading />
    <Flex bg="green.200" w="100vw" h="2000px" position="relative">
      <Flex
        bg="green.300"
        w="55%"
        position="absolute"
        h="16%"
        top="3%"
        left="5%"
        borderRadius="30px"
        border="5px solid"
        p="2%"
      >
        <Text fontSize="30px">Bio</Text>
      </Flex>
      <PostList color="purple.200" />
      <BadgeCase
        position="relative"
        w="35vw"
        left="65%"
        color="blue.500"
        zIndex={60}
        borderRadius="15px 0 0 15px"
      />
    </Flex>

    {/* <IconButton
            variant="ghost"
            variantColor="gray"
            aria-label="Badges"
            fontSize="30px"
            icon={GiPoliceBadge}
            size="lg"
            border-radius="0.95rem"
      /> */}
  </Container>
);

export default Personal;
