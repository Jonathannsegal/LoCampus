import React, { useEffect } from 'react';
import {
  Box,
  Heading,
  IconButton,
  Flex,
  Text,
  useToast,
} from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { withRedux } from '../src/lib/redux';
import { useDispatch } from 'react-redux';

import { GiPoliceBadge } from 'react-icons/gi';
import BadgeCase from '../src/components/BadgeCase';
import PersonalHeading from '../src/components/PersonalHeading';
import PostList from '../src/components/PostList';
import Container from '../src/components/Shared/Container';

const usePersonal = () => {

  const dispatch = useDispatch();
  const setBadge = (badgeName, unlocked) =>
      dispatch({
          type: 'SET_BADGE',
          payload: { badge: badgeName, unlocked: unlocked },
      });

  const badges = useSelector((state) => ({...state.badges}));
  return { badges, setBadge };
};


const Personal = () => {
  const { badges, setBadge } = usePersonal();
  const toast = useToast();

  useEffect(() => {
    if(!badges.student){
      setBadge('student', true);
      toast({
        title: "\"Student\" Badge Earned!",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    }
  }, []);

  return (
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
};

export default withRedux(Personal);
