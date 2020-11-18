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
  useColorMode,
} from '@chakra-ui/core';
import { Spacer } from "@chakra-ui/react"
import makeVote from '../../app/util/makeVote';

const Post = (props) => {
  const [rank, setRank] = useState(0);
  useEffect(() => {
    setRank(props.rating);
  }, []);

  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.900',
    dark: '#ffffff',
  };

  return (
    <>
      <Box borderWidth="1px" rounded="lg" p="15px">
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
              <IconButton aria-label="upvote" icon="arrow-up" onClick={() => { makeVote(props.id, "up"); setRank(rank + 1) }} color={textColor[colorMode]} />
              <Text>{rank}</Text>
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

export default Post;