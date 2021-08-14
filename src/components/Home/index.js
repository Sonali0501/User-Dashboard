import { Box, Flex, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react';
import React from 'react';
import Login from './LoginForm';
import Signin from './SignupForm';

const Home = () => {

    return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
        <Box
            mt={50}
            borderWidth={1}
            p={4}
            pb={8}
            width='full'
            maxWidth='500px'
            borderRadius={4}
            textAlign='center'
            boxShadow='lg'>
        
            <Tabs isFitted variant="enclosed-colored">
            <TabList m={4}>
                <Tab _selected={{ color: "white", bg: "blue.700" }} fontSize={{ base:"18px", md:"20px" }} fontWeight="700">Login</Tab>
                <Tab _selected={{ color: "white", bg: "blue.700" }} fontSize={{ base:"18px", md:"20px" }} fontWeight="700">Sign Up</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Login />
                </TabPanel>
                <TabPanel>
                    <Signin />
                </TabPanel>
            </TabPanels>
            </Tabs>

        </Box>
        </Flex>
    )
}

export default Home;