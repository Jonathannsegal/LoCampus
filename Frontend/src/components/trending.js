import React from 'react';
import { 
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
    Flex,
    Text,
    Avatar,
    Image,
    Box,
    Stack,
    Divider,
    Button,
    Textarea,
    useToast,
    StatGroup,
    Stat,
    StatLabel,
    StatNumber,
    Skeleton,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from "@chakra-ui/core";
import {MdBuild , MdCall} from "react-icons/md";

export default (props) => {
    if(props.type === "main")
    {
        return (
            <>
                        <Box 
                         w={['24vw', '24vw', '24vw', '24vw']} 
                         h= {['15vw', '15vw', '25vw', '15vw']} 
                         position="absolute" 
                         right="3%" 
                         //px="100px"
                         //py="250px" 
                         bg= {props.color2}
                         top="25vh"
                         borderRadius = "25px"
                         textAlign = "center"
                        >
                                    
                            <Stack spacing={0}>
                            <Text as = "b" as = "u" fontSize={['xs', 'xs', 'xs', '2xl']} >Trending</Text>
                            <Divider position="relative" left="8%" borderWidth = "3px" w = "20vw" borderColor= {props.color1} />
                            <Text fontSize="md">#COMS309</Text>
                            <Divider position="relative" left="8%" borderWidth = "3px" w = "20vw" borderColor= {props.color1} />
                            <Text fontSize="md">#Springboot</Text>
                            <Divider position="relative" left="8%" borderWidth = "3px" w = "20vw" borderColor= {props.color1} />
                            <Text fontSize="md">#React</Text>
                            <Divider position="relative" left="8%" borderWidth = "3px" w = "20vw" borderColor= {props.color1} />
                            <Text fontSize="md">#Java</Text>
                            <Divider position="relative" left="8%" borderWidth = "3px" w = "20vw" borderColor= {props.color1} />
                            <Text fontSize="md">#IowaState</Text>
                            </Stack>
                        </Box>

                        </>
        );
    } 
}
