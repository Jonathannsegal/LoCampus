import React, { useEffect, useState} from 'react';
import {
  Box,
  Heading,
  IconButton,
  Flex,
  Text,
  useToast,
  LightMode, 
  Button,
  Textarea 
} from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { withRedux } from '../src/lib/redux';
import { useDispatch } from 'react-redux';

import { GiPoliceBadge } from 'react-icons/gi';
import BadgeCase from '../src/components/BadgeCase';
import PersonalHeading from '../src/components/PersonalHeading';
import PostList from '../src/components/PostList';
import Container from '../src/components/Shared/Container';
//import Searchbar from '../src/components/Shared/searchbar'

const usePersonal = () => {

  const dispatch = useDispatch();
  const setBadge = (badgeName, unlocked) =>
      dispatch({
          type: 'SET_BADGE',
          payload: { badge: badgeName, unlocked: unlocked },
      });
      const setBio = (input) =>
      dispatch({
        type : 'SET_BIO',
        payload: { txt: input},
      });

  const badges = useSelector((state) => ({...state.badges}));
  const bio = useSelector((state) => state.bio);
  return { badges, setBadge, bio, setBio };
};



const Personal = () => {
  const { badges, setBadge, bio, setBio} = usePersonal();
  const toast = useToast();
  const [userBio, setUserBio] = useState("");
  const handleChangeBio = event => setUserBio(event.target.value);

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
        border="5px solid black"
        p="2%"
      >
        <Text fontSize="30px" color="black">Bio<br/></Text>
        <Textarea
        position="absolute"
        top="22%"
        w = "92%"
        h = "58%"
        value = {userBio}
        onChange = {handleChangeBio}
       placeholder = "Write bio and click Set Bio to save!">
        
          </Textarea>
        <Button 
        onClick = {() => setBio(userBio)}
        position="absolute"
        bottom="3%"
        w = "92%">
          Set Bio</Button>
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
