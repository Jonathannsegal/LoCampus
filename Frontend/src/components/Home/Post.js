import React from 'react';
import {
  Text,
  Box,
  Heading,
  Avatar,
  Stack,
  Flex,
  Divider,
  IconButton,
  ButtonGroup
} from '@chakra-ui/core';

export default (props) => {
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
                <IconButton aria-label="upvote" icon="arrow-up" />
                <Text>123</Text>
                <IconButton aria-label="downvote" icon="arrow-down" />
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
