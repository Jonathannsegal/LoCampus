import React from 'react';
import Map from '../src/components/Map';
import Sidebar from '../src/components/Sidebar';
import Post from '../src/components/Home/Post';
import {
  Image,
  Box,
  Heading,
  Stack
} from '@chakra-ui/core';


const posts = [
  { "id": 1, "author": "Joe", "conent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta massa mi, sed bibendum tortor tempor at." },
  { "id": 2, "author": "Lary", "conent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta massa mi, sed bibendum tortor tempor at." },
  { "id": 3, "author": "Moe", "conent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta massa mi, sed bibendum tortor tempor at." },
  { "id": 4, "author": "Curly", "conent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta massa mi, sed bibendum tortor tempor at." }
]

const Home = () => (
  <>
    <Sidebar />
    {/* <Box size="md" m="auto">
      <Heading>Welcome Home</Heading>
      <Image src="/images/logo_heads.png" alt="LoCampus" />
    </Box> */}
    {/* <Map /> */}
    <Box m="auto" w="40vw">
      <Stack spacing={8} shouldWrapChildren>
        {posts.map(c => <Post key={c.id} author={c.author} content={c.conent} />)}
      </Stack>
    </Box>
  </>
);

export default Home;
