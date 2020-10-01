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
                        fontSize="4xl"
                        position="relative" left="2%"
                        >
                             LoCampus
                        </Text>
                     <InputGroup
                     position="relative" left="15%"
                     width="42rem"
                     >
                        <InputLeftElement children={<Icon name="search" color= {props.color1} />} />
                        <Input focusBorderColor= {props.color1}variant="filled" placeholder=" Search on LoCampus" />
                     </InputGroup>

                     <Text 
                       color= {props.color1}
                        isTruncated
                        fontSize="2xl"
                        position="relative" left="28%"
                        >
                             Hey, Alexander!
                        </Text>

                        <Avatar
                            src={props.profilepic}
                            size="md" 
                            position="relative" left="29%" 
                            />

                 </Flex>

                 <Flex height="150px">
                        <Image
                            src={props.backimage}
                            objectFit="cover"
                            objectPosition="0px -405px" />
                    </Flex>

                   <Flex>
                   
                        <Box 
                         w="24vw"
                         h ="33vw"
                         position="absolute" 
                         left="3%"  
                         bg= {props.color2}
                         top="25vh"
                         borderRadius = "25px"
                        >
        
                            <Image
                                src={props.isu}
                                w = "20vw"
                                position="relative" left="4vh" top = "3vh"
                                />
                             <Flex
                              position="relative" top = "5vh" left = "10vh"
                              align="center"
                              >   
                                <StatGroup
                                    align="left">
                                    <Stat>
                                    <StatLabel>Followers</StatLabel>
                                    <StatNumber>345,670</StatNumber>
                                    </Stat>
                                </StatGroup> 
                                <Divider orientation="vertical" />
                                <StatGroup
                                    align="left">
                                    <Stat>
                                    <StatLabel>Followers</StatLabel>
                                    <StatNumber>345,670</StatNumber>
                                    </Stat>
                                </StatGroup> 
                        </Flex>
                            <Skeleton height="20px" my="10px" position="relative" top = "5vh" />
                            <Skeleton height="20px" my="10px" position="relative" top = "5vh"/>
                            <Skeleton height="20px" my="10px" position="relative" top = "5vh"/>

                            <Tabs variant="soft-rounded" variantColor="green" position="relative" top = "5vh" left = "0vh">
                                <TabList>
                                    <Tab>About</Tab>
                                    <Tab>Academics</Tab>
                                    <Tab>Campus</Tab>
                                    <Tab>Student Life</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                    <p>Iowa State University of Science and Technology, (Iowa State University or Iowa State), is a public land-grant research university in Ames, Iowa. It is the largest university in the state of Iowa and the third largest university in the Big 12 athletic conference.</p>
                                    </TabPanel>
                                    <TabPanel>
                                    <p>Iowa State University is organized into eight colleges and two schools that offer 100 Bachelor's degree programs, 112 Masters programs, and 83 Ph.D programs, including one professional degree program in Veterinary Medicine.</p>
                                    </TabPanel>
                                    <TabPanel>
                                    <p>Iowa State's campus contains over 160 buildings. Several buildings, as well as the Marston Water Tower, are listed on the National Register of Historic Places. The central campus includes 490 acres of trees, plants, and classically designed buildings.</p>
                                    </TabPanel>
                                    <TabPanel>
                                    <p>Iowa State operates 20 on-campus residence halls. The Union Drive Association consists of four residence halls located on the west side of campus, including Friley Hall, which has been declared one of the largest residence halls in the country.</p>
                                    </TabPanel>
                                </TabPanels>
                                </Tabs>
                        </Box>

                        <Box 
                         w="36vw"
                         h = "33vw"
                         position="absolute" 
                         left="492px" 
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
                                position="relative" left="12%" top = "-6vh"
                                >
                                    Alexander
                                </Text>


                            <Textarea 
                                placeholder="Have something to say or post?"
                                w = "30vw" 
                                h = "15vw"
                                position="relative" left="9%"/>    

                            <Button leftIcon="arrow-forward" bg={props.color1} color={props.color2} variant="solid" position="relative" left="70%" top = "2vh">
                                Post
                            </Button>
        

                        </Box>

                        <Box 
                         w="24vw"
                         h= "15vw"
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
                            <Text as = "b" as = "u" fontSize="2xl">Trending</Text>
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

                        <Box 
                         w="24vw"
                         h= "17vw"
                         position="absolute" 
                         right="3%" 
                         //px="100px"
                         //py="250px" 
                         bg= {props.color2}
                         bottom="2vh"
                         borderRadius = "25px"
                         textAlign = "center"
                        >
        
                                 <Stack spacing={0}>
                                 <Text as = "b" as = "u" fontSize="2xl">People to follow:</Text>  
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
                                    <Text fontSize="lg" position="relative" left="8%">Jonathan Segal</Text>
                                    <Button leftIcon="check-circle" variantColor="green" variant="solid" position="relative" left="12%">
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
                                        src={props.yunt}
                                        size="lg"
                                        position="relative" left="4%" 
                                        />
                                    <Text fontSize="lg" position="relative" left="8%">Andrew Yunt</Text>
                                    <Button leftIcon="check-circle" variantColor="green" variant="solid" position="relative" left="12%">
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
                                    <Text fontSize="lg" position="relative" left="8%">Andrew Deick</Text>
                                    <Button leftIcon="check-circle" variantColor="green" variant="solid" position="relative" left="12%">
                                Follow
                            </Button>
                                </Flex>           
                                    
                                     </Stack>
                        </Box>
 
                       </Flex> 
            </>
        );
    }
}
