import React from 'react';
import {
  Text,
  Box,
  Heading,
  Avatar,
  Stack,
  Flex,
  Divider,
  IconButton
} from '@chakra-ui/core';
import makeVote from '../../app/util/makeVote';

const Post = (props) => {
  return (
    <>
      <Box borderWidth="1px" rounded="lg" p="10px">
        <Stack isInline spacing={2} align="center">

          <Flex flexShrink="0" minW="350px" justifyContent="space-between">
            <Flex alignItems="center">
              <Avatar size="xs" name={props.author} />
              <Heading pl="1em" as="h6" size="xs">
                {props.author}
              </Heading>
            </Flex>

            <Flex>
              <Stack isInline spacing={2} align="center">
                <IconButton aria-label="upvote" icon="arrow-up" onClick={() => makeVote(props.key, "up")} />
                <Text>{props.rating}</Text>
                <IconButton aria-label="downvote" icon="arrow-down" onClick={() => makeVote(props.key, "down")} />
              </Stack>
            </Flex>
          </Flex>

        </Stack>
        <Divider />
        <Text>{props.content}</Text>
      </Box>
    </>
  );
};

export default Post;