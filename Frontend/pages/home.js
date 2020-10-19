import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import {
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Stack,
  Text,
  Flex,
  Image,
  FormErrorMessage,
} from '@chakra-ui/core';
import getPosts from '../src/app/util/getPosts';
import makePost from '../src/app/util/makePost';
import { withRedux } from '../src/lib/redux';
import Container from '../src/components/Shared/Container';
import Post from '../src/components/Home/Post';

const useHome = () => {
  const username = useSelector((state) => state.username);
  return { username };
};

const Home = () => {
  const { username } = useHome();
  const [state, setState] = useState([]);
  useEffect(() => {
    // getPosts().then(result => setState(result));
  }, []);

  return (
    <Container>
      <Box
        border="1px solid #E8EAED"
        borderRadius="8px"
        boxshadow="0 2px 4px rgba(0,0,0,0.3)"
        mb={4}
        h="250px"
        backgroundImage="url('https://www.commonapp.org/static/249d7ea8a511a7d0d7591e9c679fe8b8/iowa-state-university_1047.jpg')"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Box
        border="1px solid #E8EAED"
        borderRadius="8px"
        boxshadow="0 2px 4px rgba(0,0,0,0.3)"
        bg="white"
        p={4}
        color="black"
      >
        <Formik
          initialValues={{ author: username, content: '' }}
          onSubmit={(values) => {
            setState((state) => [values, ...state]);
            const location = 'Iowa State';
            makePost(username, values.content, location, Date());
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Text fontSize="3xl">{username}</Text>
              <Field name="content">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="content">Post</FormLabel>
                    <Textarea
                      {...field}
                      id="content"
                      placeholder="Post n Stuff"
                    />
                    <FormErrorMessage>
                      {form.errors.name}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button mt={4} variantColor="teal" type="submit">
                Post!
              </Button>
            </form>
          )}
        </Formik>
      </Box>
      <Flex maxW="800px" flexShrink="0" flexDirection="row" m="auto">
        {/* <Flex flexShrink="0" m="auto"> */}
          <Stack maxW="800px" mt="4" spacing={4} shouldWrapChildren>
            {state
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((c) => (
                <Post
                  key={c.timestamp}
                  author={c.author}
                  content={c.content}
                />
              ))}
          </Stack>
        {/* </Flex> */}
        {/* <Flex flexShrink="0" mx="auto" mt="4">
          <Stack mt="4" spacing={4} shouldWrapChildren>
            <Post
              key="0"
              author="je;;p0"
              content="alskjdh"
            />
          </Stack>
        </Flex> */}
      </Flex>
    </Container>
  );
};

export default withRedux(Home);
