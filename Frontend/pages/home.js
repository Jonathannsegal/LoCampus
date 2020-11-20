import React, { useEffect, useState } from 'react';
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
  useToast,
  FormErrorMessage,
  useColorMode,
} from '@chakra-ui/core';
import getPosts from '../src/app/util/getPosts';
import getUsers from '../src/app/util/getUsers';
import makePost from '../src/app/util/makePost';

import { withRedux } from '../src/lib/redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Container from '../src/components/Shared/Container';
import Post from '../src/components/Home/Post';
import Friend from '../src/components/Home/Friend';
import Map from '../src/components/Map';



const useHome = () => {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const setBadge = (badgeName, unlocked) =>
      dispatch({
          type: 'SET_BADGE',
          payload: { badge: badgeName, unlocked: unlocked },
      });

  const badges = useSelector((state) => ({...state.badges}));
  return { username, badges, setBadge };
};

const Home = () => {
  const { username, badges, setBadge } = useHome();
  const toast = useToast();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  };
  const altBgColor = {
    light: 'gray.100',
    dark: 'gray.800',
  };
  const textColor = {
    light: 'gray.900',
    dark: '#ffffff',
  };

  useEffect(() => {
    getPosts().then(result => { setPosts(result); console.log(result) });
    getUsers().then(result => setUsers(result));
  }, []);

  return ( //temp comment: 
    <Container>
      <Box //background image
        //border="1px solid black"
        borderRadius="8px 8px 8px 8px"
        boxshadow="0 2px 4px rgba(0,0,0,0.3)"
        mb={4}
        h="400px"
        w="100%"
        top="72px"
        backgroundImage="url('https://gray-kcrg-prod.cdn.arcpublishing.com/resizer/IoH9DKKfRJvK3qhRQvQd0hUb7bM=/1200x400/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/IWWIB3BCJRIR5DTJPZRIF3WZPY.jpg')"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        position="fixed"
      />
      <Box //Main Box
        // border="1px solid #E8EAED"
        borderRadius="8px"
        // boxshadow="0 2px 4px rgba(0,0,0,0.3)"
        bg={bgColor[colorMode]}
        color="black"
        position="absolute"
        w="50vw"
        zIndex={80}
        top="400px"
        left="25%"
        mb="20px"
      >
        <Stack mb="4">
          <Box
          // border="1px solid #E8EAED"
          borderRadius="8px"
          // boxshadow="0 2px 4px rgba(0,0,0,0.3)"
          bg={altBgColor[colorMode]}
          m={5}
          p={4}
          color="black"
          position="relative"
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
                <form onSubmit={() =>{
                  props.handleSubmit();

                  if(!badges.pencil){
                    setBadge('pencil', true);
                    toast({
                      title: "\"Writer\" Badge Earned!",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    })
                  }
                }}>
                  <Text fontSize="3xl" color={textColor[colorMode]}>{username}</Text>
                  <Field name="content">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        {/* <FormLabel htmlFor="content">Post</FormLabel> */}
                        <Textarea color={textColor[colorMode]}
                          {...field}
                          id="content"
                          placeholder="Write your post here!"
                        />
                        <FormErrorMessage>
                          {form.errors.name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button variantColor="teal" type="submit" position="absolute" bottom={6} right={8} zIndex={99}>
                    Post!
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
          <Flex maxW="600px" flexShrink="0" flexDirection="row" m="auto">
            <Stack maxW="600px" mt="4" spacing={4} shouldWrapChildren>
              {posts
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((c) => (
                  <Post
                    id={c.id}
                    key={c.id}
                    author={c.author}
                    rating={c.rank}
                    content={c.content}
                  />
                ))}
            </Stack>
          </Flex>
        </Stack>
      </Box>

      <Flex //Friends Box
        borderRadius="8px"
        bg={bgColor[colorMode]}
        mb={4}
        color="black"
        position="absolute"
        w="20%"
        top="505px"
        right="2.5%"
        justify="center"
        px="0px"
      >
        
        <Stack mt="4" mb="4" w="98%" >
        <Flex w="100%" h="100%" justify="center">
          <Text fontSize="150%" py="11px" color={textColor[colorMode]}> 
            People You May Know
          </Text>
        </Flex>
          {users
            .map((c) =>
              <Friend
                id={c.id}
                me={1}
                name={c.name}
                key={c.id}
              />
            )}
        </Stack>
      </Flex>

      <Flex //Location Box
      position="absolute" width="20vw" h="50vh" 
      bg={bgColor[colorMode]} borderRadius="8px 8px 8px 8px"
      top="550px" left="3%">
        <Stack alignItems="center">
          <Image src="https://www.brandmarketing.iastate.edu/wp-content/uploads/2015/10/primary1-red.png"
            w="100%" h="20%" mt="3%" display="block" objectFit="cover" position="relative" />
          <Flex width="100%" h="40%" bg="yellow.500">
            <Map mapStyle="mapbox://styles/mapbox/streets-v11" geolocate={false} />
          </Flex>
          <Text color={textColor[colorMode]}>
            Ames, IA 50011
          </Text>
        </Stack>
      </Flex>



    </Container>
  );
};

export default withRedux(Home);
