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
                         w="36vw"
                         h = "33vw"
                         position="absolute" 
                         //left={['73.8px', '123px', '246px', '492px']}
                         left = "32vw"
                         bg= {props.color2}
                         top="25vh"
                         borderRadius = "25px"
                         
                        >

                            <Avatar
                                src={props.profilepic}
                                size="md" 
                                position="relative" left="2%" 
                                />
                            <Text 
                                color= {props.color1}
                                isTruncated
                                fontSize="2xl"
                                position="relative" left={['0.5vh', '1vh', '24%', '12%']} top = "-6vh"
                                >
                                    Alexander
                                </Text>


                            <Textarea 
                                placeholder="Have something to say or post?"
                                w = "30vw" 
                                h = "15vw"
                                position="relative" left="9%"/>    

                            <Button leftIcon="arrow-forward"
                             bg={props.color1} 
                             color={props.color2} variant="solid"
                             position="relative" left={['6vh', '12vh', '24vh', '56vh']} top = {['0.3vh', '0.5vh', '1vh', '2vh']}>
                                Post
                            </Button>
        

                        </Box>
                        
                </>    
        );
    }
}
