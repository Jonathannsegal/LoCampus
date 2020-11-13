import React from 'react';
import {
  Heading,
  Avatar,
  Stack,
  Flex,
  Button
} from '@chakra-ui/core';
import friend from '../../app/util/friend';
import follow from '../../app/util/follow';

export default (props) => {
  return (
    <>
      <Stack isInline spacing={2} pb={1} align="center">

        <Flex flexShrink="0" px={"3%"} minW="100%" justifyContent="space-between">
          <Flex alignItems="center">
            <Avatar size="xs" name={props.name} />
            <Heading pl="1em" as="h6" size="xs">
              {props.name}
            </Heading>
          </Flex>

          <Flex>
            <Stack isInline spacing={2} align="center">
              <Button variantColor="teal" size="sm" onClick={() => follow(props.me, props.id)}>Follow</Button>
              <Button variantColor="green" size="sm" onClick={() => friend(props.me, props.id)}>Friend</Button>
            </Stack>
          </Flex>
        </Flex>

      </Stack>
    </>
  );
};
