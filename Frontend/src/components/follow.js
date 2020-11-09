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
                         w="24vw"
                         h= {['0.5vh', '1vh', '28vw', '17vw']}
                         position="absolute" 
                         right="3%" 
                         //px="100px"
                         //py="250px" 
                         bg= {props.color2}
                         bottom={['0.5vh', '1vh', '15vh', '2vh']} 
                         borderRadius = "25px"
                         textAlign = "center"
                        >
        
                                 <Stack spacing={0}>
                                 <Text as = "b" as = "u" 
                                 fontSize={['xs', 'sm', 'lg', '2xl']} >People to follow:</Text>  
                                 <Flex 
                                    w="24vw"
                                    h= "4.5vw"
                                    bg= {props.color1}
                                    bottom="0vh"
                                    textAlign = "center"
                                    align = "center"
                                >
                                    <Avatar
                                        src={props.jon}
                                        size="lg"
                                        position="relative" left="4%" 
                                        />
                                    <Text fontSize={['3px', '6px', '10px', 'lg']} position="relative" left="8%">Jonathan Segal</Text>
                                    <Button 
                                    leftIcon="check-circle" 
                                    variantColor="green" variant="solid" 
                                    position="relative" left="12%"
                                    h = {['', '', '3vh', '6vh']}
                                    w = {['', '', '3vw', '8vw']}
                                    fontSize={['3px', '6px', '6px', '20px']}>
                                Follow
                            </Button>
                                </Flex>    
                                <Flex 
                                    w="24vw"
                                    h= "4.5vw"
                                    bg= {props.color1}
                                    bottom="10vh"
                                    textAlign = "center"
                                    align = "center"
                                >
                                    <Avatar
                                        src={props.yunt}
                                        size="lg"
                                        position="relative" left="4%" 
                                        />
                                    <Text fontSize={['3px', '6px', '10px', 'lg']} position="relative" left="8%">Andrew Yunt</Text>
                                    <Button 
                                    leftIcon="check-circle" 
                                    variantColor="green" variant="solid" 
                                    position="relative" left="12%"
                                    h = {['', '', '3vh', '6vh']}
                                    w = {['', '', '3vw', '8vw']}
                                    fontSize={['3px', '6px', '6px', '20px']}
                               >
                                Follow
                            </Button>
                                </Flex>
                                <Flex 
                                    w="24vw"
                                    h= "4.5vw"
                                    bg= {props.color1}
                                    bottom="0vh"
                                    textAlign = "center"
                                    align = "center"
                                >
                                    <Avatar
                                        src={props.deick}
                                        size="lg"
                                        position="relative" left="4%" 
                                        />
                                    <Text fontSize={['3px', '6px', '10px', 'lg']} position="relative" left="8%">Andrew Deick</Text>
                                    <Button 
                                    leftIcon="check-circle" 
                                    variantColor="green" 
                                    variant="solid" 
                                    position="relative" left="12%" h = {['', '', '3vh', '6vh']}
                                    w = {['', '', '3vw', '8vw']}
                                    fontSize={['3px', '6px', '6px', '20px']}>
                                Follow
                            </Button>
                                </Flex>           
                                    
                                     </Stack>
                        </Box>

                        </>
        );
    }
}
