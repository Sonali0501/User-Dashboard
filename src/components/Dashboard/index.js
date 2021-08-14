import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Flex,
    Spinner,
    Center,
    Button
  } from "@chakra-ui/react";
import { connect } from 'react-redux';
import { fetchData } from '../../actionCreators';
import { useHistory } from 'react-router-dom';


const Dashboard = (props) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const history = useHistory();

    React.useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            await props.fetchData()
            .then(() => {
                setIsLoading(false);
                console.log(props.users);
            })
                
        }

        getData();
    },[]);

    const goToCreate = () => {
        history.push("/create");
    }

    return (
        <Center>
        <Flex mb={50} mt={50} width={{base:300, md:700, lg:900, xl:1200}} align='center' alignItems="center" justifyContent='center'>
        <Button onClick={() => goToCreate()} position="absolute" top={100} right={{ base:15, md:30}} color="white" bg="blue.700">Add new</Button>
        <Box
            mt={120}
            borderWidth={1}
            p={4}
            pb={8}
            maxHeight="600px"
            width="fit-content" overflowX="auto"
            borderRadius={4}
            textAlign='center'
            boxShadow='lg'
            pt="0">
        
        <Table variant="simple" overflowY="auto"
            height="fit-content" mt="20px">
            <Thead bg="blue.700" color="white" position="sticky" top="0">
                <Tr px={10}>
                <Th color="white">No.</Th>
                <Th color="white">Name</Th>
                <Th color="white">Username</Th>
                <Th color="white">Email</Th>
                <Th color="white">Address</Th>
                <Th color="white">Phone</Th>
                <Th color="white">Website</Th>
                </Tr>
            </Thead>
            <Tbody>
                { isLoading ? 
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                        mt={10}
                        align="center"
                    /> :
                        props.users.map((user) => {
                            return (
                            <Tr key={user.id}>
                                <Td>{user.id}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.username}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.address.street + ", " + user.address.suite + ", " + user.address.city + ", " + user.address.zipcode}</Td>
                                <Td>{user.phone}</Td>
                                <Td>{user.website}</Td>
                            </Tr> 
                            )
                        })
                }
                
                
            </Tbody>
        </Table>
        </Box>
        </Flex>
        
        </Center>
    )
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps, {fetchData})(Dashboard);