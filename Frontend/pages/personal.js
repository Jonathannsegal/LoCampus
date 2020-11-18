import React, { useEffect, useState} from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  useToast,
  LightMode, 
  Button,
  Stack,
  Textarea 
} from '@chakra-ui/core';
import { Editable, EditableInput, EditablePreview, IconButton, ButtonGroup } from "@chakra-ui/react"
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'


import { useSelector } from 'react-redux';
import { withRedux } from '../src/lib/redux';
import { useDispatch } from 'react-redux';

import { GiPoliceBadge } from 'react-icons/gi';
import BadgeCase from '../src/components/BadgeCase';
import PersonalHeading from '../src/components/PersonalHeading';
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
  const username = useSelector((state) => state.username);
  return { badges, bio, username, setBadge, setBio };
};

function BioEditable() {
  const { bio, setBio} = usePersonal();
  /* Here's a custom control */
  function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="xl">
        <IconButton icon={<CheckIcon />} onClick={onSubmit} />
        <IconButton icon={<CloseIcon />} onClick={onCancel} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} onClick={onEdit} />
      </Flex>
    )
  }

  return (
    <Editable
      textAlign="left"
      defaultValue={bio ? bio : "Write your bio here!"}
      fontSize="lg"
      isPreviewFocusable={false}
      submitOnBlur={false}
      w="100%"
      onSubmit={(str) => setBio(str)}
    >
      {(props) => (
        <>
          <EditablePreview />
          <EditableInput />
          <EditableControls {...props} />
        </>
      )}
    </Editable>
  )
}

const Personal = () => {
  const { badges, setBadge} = usePersonal();
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
    <Flex w="100vw" h="2000px" position="relative" px="5%" >
      <Stack spacing={20} w="100%">
      <Flex
        bg="gray.600"
        w={["30%","40%","50%", "60%"]}
        position="relative"
        //h="16%"
        top="3%"
        borderRadius="30px"
        border="5px solid black"
        p="2%"
      >
        <Stack  w="100%" align="center" shouldWrapChildren>
          <Text fontSize={["30px","30px","30px","40px"]} color="black">Bio<br/></Text>
          <BioEditable/>
          {/* <Textarea
          position="absolute"
          value = {userBio}
          h="80%"
          onChange = {handleChangeBio}
          placeholder = "Write bio and click Set Bio to save!"
          /> */}
        </Stack>
      </Flex>

      <Flex bg="gray.500" w={["30%","40%","50%", "60%"]} position="relative" h="2000px" justify="center" borderRadius="30px" border="5px solid black" p="2%">
        <Text fontSize={["30px","30px","30px","40px"]} color="black">List of Posts</Text>
      </Flex>

      <BadgeCase
        position="absolute"
        w={["325px", "325px", "325px", "30%"]}
        right={0}
        color="blue.500"
        zIndex={60}
        borderRadius="15px 0 0 15px"
      />
    </Stack>
    </Flex>
  </Container>
  );
};

export default withRedux(Personal);
