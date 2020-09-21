import React from 'react';
import {
  Text,
  Box,
  Heading,
  Avatar,
  Stack,
  Divider,
} from '@chakra-ui/core';

export default (props) => {
  return (
    <>
      <Box borderWidth="1px" rounded="lg" p="10px">
        <Stack isInline spacing={2} align="center">
          <Avatar size="xs" name={props.author} />
          <Heading as="h6" size="xs">
            {props.author}
          </Heading>
        </Stack>
        <Divider />
        <Text>{props.content}</Text>
      </Box>
    </>
  );
};
