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
  FormErrorMessage,
} from '@chakra-ui/core';
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
    fetch('http://coms-309-hv-10.cs.iastate.edu:8080/post')
      .then((res) => res.json())
      .then((result) => {
        setState(result);
      });
  }, []);

  return (
    <Container>
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
            fetch(
              'http://coms-309-hv-10.cs.iastate.edu:8080/post/new',
              {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  author: username,
                  content: values.content,
                  timestamp: Date()
                }),
              },
            );
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
        <Box m="auto" w="40vw">
          <Stack spacing={4} shouldWrapChildren>
            {state
              .sort((a, b) => b.id - a.id)
              .map((c) => (
                <Post
                  key={c.id}
                  author={c.author}
                  content={c.content}
                />
              ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default withRedux(Home);
