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

const Friend = (props) => {
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
                    duration: 9000,
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
                      duration: 9000,
                      isClosable: true,
                    })
                    setFollowShow(false);
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

export default Friend;