import React, { useEffect, useState } from 'react';
import {
  Heading,
  Avatar,
  Stack,
  Flex,
  Button,
  useColorMode,
  useToast
} from '@chakra-ui/core';
import { Spacer } from "@chakra-ui/react"
import friend from '../../app/util/friend';
import follow from '../../app/util/follow';

import { withRedux } from '../../lib/redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const useFriend = () => {
  
  const dispatch = useDispatch();
  const setBadge = (badgeName, unlocked) =>
      dispatch({
          type: 'SET_BADGE',
          payload: { badge: badgeName, unlocked: unlocked },
      });

  const badges = useSelector((state) => ({...state.badges}));
  return { badges, setBadge };
};

const Friend =  (props) => {
  const { badges, setBadge } = useFriend();

  const { colorMode } = useColorMode();
  const [friendShow, setFriendShow] = useState(true);
  const [followShow, setFollowShow] = useState(true);
  const toast = useToast()
  const textColor = {
    light: 'gray.900',
    dark: '#ffffff',
  };

  return (
    <>
      <Stack isInline spacing={2} pb={1} align="center">

        <Flex flexShrink="0" px={"3%"} minW="100%" justifyContent="space-between">
          <Flex alignItems="center">
            <Avatar size="xs" name={props.name} />
            <Heading pl="1em" as="h6" size="xs" color={textColor[colorMode]}>
              {props.name}
            </Heading>
          </Flex>
          <Spacer />
          <Flex>
            <Stack isInline spacing={2} align="center">

              {friendShow == true &&
                <Button variantColor="teal" size="sm" onClick={() => {
                  follow(props.me, props.id);
                  toast({
                    title: `Following ${props.name}`,
                    description: `You can now see posts from ${props.name}`,
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  });
                  setFriendShow(false);
                }}>Follow</Button>
              }
              {friendShow == false &&
                <Button variantColor="teal" size="sm" isDisabled onClick={() => {
                }}>Following</Button>
              }
              {followShow == true &&
                <Button variantColor="green" size="sm"
                  onClick={() => {
                    friend(props.me, props.id);
                    toast({
                      title: `Friend Request sent to ${props.name}`,
                      description: `Waiting for ${props.name} to accept`,
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    })
                    setFollowShow(false);
                    if(!badges.handshake){
                      setBadge('handshake', true);
                      toast({
                        title: "\"Collaborator\" Badge Earned!",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      })
                    }
                  }}>Friend</Button>
              }
              {followShow == false &&
                <Button variantColor="green" size="sm" isDisabled onClick={() => {
                }}>sent</Button>
              }
            </Stack>
          </Flex>
        </Flex>

      </Stack >
    </>
  );
};
export default withRedux(Friend);