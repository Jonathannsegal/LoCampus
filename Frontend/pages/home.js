import React, { useEffect, useState } from 'react';
// import Map from '../src/components/Map';
import Post from '../src/components/Home/Post';
import { Formik, Field } from 'formik';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  FormErrorMessage
} from '@chakra-ui/core';

const Home = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('http://coms-309-hv-10.cs.iastate.edu:8080/post')
      .then(res => res.json())
      .then(
        (result) => {
          setState(result);
        })
  }, []);

  return (
    <>
      {/* <Map /> */}
      <Box m="auto" w="40vw">
        <Stack spacing={4} shouldWrapChildren>
          {state.map(c => <Post key={c.id} author={c.author} content={c.content} />)}
        </Stack>
      </Box>

      <Box
        border={"1px solid #E8EAED"}
        borderRadius="8px"
        boxshadow="0 2px 4px rgba(0,0,0,0.3)"
        bg={"white"}
        p={4}
        color="black"
      >
        <Formik
          initialValues={{ author: "", content: "" }}
          onSubmit={(values) => {
            setState(state => [...state, values]);
            fetch('http://coms-309-hv-10.cs.iastate.edu:8080/post/new', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ author: values.author, content: values.content })
            });
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <Field name="author">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor="author">Name</FormLabel>
                    <Input {...field} id="author" placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="content">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel htmlFor="content">Post</FormLabel>
                    <Input {...field} id="content" placeholder="Post n Stuff" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                variantColor="teal"
                type="submit"
              >
                Post!
          </Button>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
}

export default Home;
