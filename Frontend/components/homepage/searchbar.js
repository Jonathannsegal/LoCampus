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
                <Flex 
                    align="center"
                    bg= {props.color2}
                    //justify="flex-end"
                    >
                        <Text 
                       color= {props.color1}
                        isTruncated
                        fontSize={[5.4, 9, 18, 36]}
                        position="relative" left="2%"
                        >
                             LoCampus
                        </Text>
                     <InputGroup
                     position="relative" left="15%"
                     w = "45vw"
                     >
                        <InputLeftElement children={<Icon name="search" color= {props.color1} />} />
                        <Input focusBorderColor= {props.color1}variant="filled" placeholder=" Search on LoCampus" />
                     </InputGroup>

                     <Text 
                       color= {props.color1}
                        isTruncated
                        fontSize={[3.6, 6, 12, 24]}
                        position="relative" left="25%"
                        >
                             Hey, Alexander!
                        </Text>

                        <Avatar
                            src={props.profilepic}
                            size="md"
                            position="relative" left="26%" 
                            />

                 </Flex>

                 <Flex height="150px">
                        <Image
                            src={props.backimage}
                            objectFit="cover"
                            objectPosition="0px -405px" />
                    </Flex>
                </>    
        );
    }
}