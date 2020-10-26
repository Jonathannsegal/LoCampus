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
import getUsers from '../src/app/util/getUsers';
import makePost from '../src/app/util/makePost';
import { withRedux } from '../src/lib/redux';
import Container from '../src/components/Shared/Container';
import Post from '../src/components/Home/Post';
import Friend from '../src/components/Home/Friend';


const useHome = () => {
  const username = useSelector((state) => state.username);
  return { username };
};

const Home = () => {
  const { username } = useHome();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getPosts().then(result => setPosts(result));
    getUsers().then(result => setUsers(result));
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
        mb={4}
        color="black"
      >
        <Stack mt="4" mb="4">
          {users
            .map((c) => (
              <Friend
                id={c.id}
                me={1}
                name={c.name}
              />
            ))}
        </Stack>
      </Box>

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
            setPosts((posts) => [values, ...posts]);
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
        <Stack maxW="800px" mt="4" spacing={4} shouldWrapChildren>
          {posts
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((c) => (
              <Post
                key={c.id}
                author={c.author}
                rating={c.rank}
                content={c.content}
              />
            ))}
        </Stack>
      </Flex>
    </Container>
  );
};

export default withRedux(Home);
