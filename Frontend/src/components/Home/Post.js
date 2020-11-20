import React, { useEffect, useState } from 'react';
import {
  Text,
  Box,
  Heading,
  Avatar,
  Stack,
  Flex,
  Divider,
  IconButton,
  useToast,
  useColorMode,
} from '@chakra-ui/core';
import { Spacer } from "@chakra-ui/react"
import makeVote from '../../app/util/makeVote';

import { withRedux } from '../../lib/redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const usePost = () => {
  
  const dispatch = useDispatch();
  const setBadge = (badgeName, unlocked) =>
      dispatch({
          type: 'SET_BADGE',
          payload: { badge: badgeName, unlocked: unlocked },
      });

  const badges = useSelector((state) => ({...state.badges}));
  return { badges, setBadge };
};

const Post = (props) => {
  const { badges, setBadge } = usePost();
  const [rank, setRank] = useState(0);
  useEffect(() => {
    setRank(props.rating);
  }, []);

  const { colorMode } = useColorMode();
  const toast = useToast();

  const textColor = {
    light: 'gray.900',
    dark: '#ffffff',
  };

  return (
    <>
      <Box borderWidth="1px" rounded="lg" p="15px" >
        <Flex flexShrink="0" minW="350px" justifyContent="space-between">
          <Flex alignItems="center">
            <Avatar size="xs" name={props.author} />
            <Heading pl="1em" as="h6" size="xs" color={textColor[colorMode]}>
              {props.author}
            </Heading>
          </Flex>
          <Spacer />
          <Flex>
            <Stack isInline spacing={2} align="center">
              <IconButton aria-label="upvote" icon="arrow-up" onClick={() => { makeVote(props.id, "up");
                                                                                setRank(rank + 1)
                                                                                if(!badges.partycone){
                                                                                  setBadge('partycone', true);
                                                                                  toast({
                                                                                    title: "\"Influencer\" Badge Earned!",
                                                                                    status: "success",
                                                                                    duration: 3000,
                                                                                    isClosable: true,
                                                                                  })
                                                                                } 
                                                                              }} color={textColor[colorMode]} />
              <Text color={textColor[colorMode]}>{rank}</Text>
              <IconButton aria-label="downvote" icon="arrow-down" onClick={() => { makeVote(props.id, "down"); setRank(rank - 1) }} color={textColor[colorMode]} />
            </Stack>
          </Flex>
        </Flex>
        <Divider />
        <Text color={textColor[colorMode]}>{props.content}</Text>
      </Box>
    </>
  );
};

export default withRedux(Post);