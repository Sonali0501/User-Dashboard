import React from 'react';
import { Box, Button, FormControl, Flex, Text, FormLabel, Input, InputRightElement, useColorModeValue, IconButton, InputGroup } from '@chakra-ui/react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addUser } from '../../actionCreators';

const Create = (props) => {

    const color = useColorModeValue('blue.600','blue.800');
    const inputBG = useColorModeValue('gray.200','gray.700');
    const history = useHistory();
    
    const addNewUser = async (name, username, email, street, suite, city, zipcode, phone, website) => {
        const user = {
            'name': name,
            'username': username,
            'email': email,
            'address': {
                'street': street,
                'suite': suite,
                'city': city,
                'zipcode': zipcode
            },
            'phone': phone,
            'website': website
        }

        await props.addUser(user);
        swal({
            title: "",
            text: "You have been successfully logged in",
            icon: "success",
            button: "Go to Dashboard",
        }).then(() => {
            history.push("/dashboard");
        });

    }

    return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
        <Box mt={50}
            borderWidth={1}
            p={4}
            pb={8}
            width='full'
            maxWidth='500px'
            borderRadius={4}
            textAlign='center'
            boxShadow='lg'>
        <Box my={8} textAlign='left'>
            <Formik
            initialValues={{  name: '', email: '', username:'', street:'', suite:'', city:'', zipcode:'', phone:'', website:'' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.fname = 'Required';
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                addNewUser(values.name, values.username, values.email, 
                    values.street, values.suite, values.city, values.zipcode, values.phone, values.website);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
            <form>

                <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type='text' 
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name} 
                    bg={inputBG} 
                    isRequired 
                    variant="filled" 
                    placeholder='Enter your name' />
                </FormControl>

                <Text fontSize="16px" color="tomato">
                {errors.name && touched.name && errors.name}
                </Text>  
                    
                <FormControl mt={6}>
                <FormLabel>Username</FormLabel>
                <Input type='text' 
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username} 
                    bg={inputBG} 
                    isRequired 
                    variant="filled" 
                    placeholder='Enter username' />
                </FormControl>

                <Text fontSize="16px" color="tomato">
                {errors.username && touched.username && errors.username}
                </Text>

                <FormControl mt={6}>
                <FormLabel>Email address</FormLabel>
                <Input type='email' 
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email} 
                    bg={inputBG} 
                    isRequired 
                    variant="filled" 
                    placeholder='Enter your email address' />
                </FormControl>

                <Text fontSize="16px" color="tomato">
                {errors.email && touched.email && errors.email}
                </Text>

                <FormLabel mt={6}>Address</FormLabel>
                    
                <Flex flexDirection={{ base:'column', md:"row" }} style={{gap:"24px"}} justifyContent='space-between'>
                    <Flex flexDirection="column">
                    <FormControl>
                    <FormLabel>Street</FormLabel>
                    <Input type='text' 
                        name="street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.street} 
                        bg={inputBG} 
                        isRequired 
                        variant="filled" 
                        placeholder='Enter address street' />
                    </FormControl>

                    <Text fontSize="16px" color="tomato">
                    {errors.street && touched.street && errors.street}
                    </Text>
                    </Flex>

                    <Flex flexDirection="column">
                    <FormControl>
                    <FormLabel>Suite</FormLabel>
                    <Input type='text' 
                        name="suite"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.suite} 
                        bg={inputBG} 
                        isRequired 
                        variant="filled" 
                        placeholder='Enter address suite' />
                    </FormControl>   

                    <Text fontSize="16px" color="tomato">
                    {errors.suite && touched.suite && errors.suite}
                    </Text> 
                    </Flex>
                </Flex>

                <Flex mt={4} flexDirection={{ base:'column', md:"row" }} style={{gap:"24px"}} justifyContent='space-between'>
                    <Flex flexDirection="column">
                    <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input type='text' 
                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city} 
                        bg={inputBG} 
                        isRequired 
                        variant="filled" 
                        placeholder='Enter address city' />
                    </FormControl>

                    <Text fontSize="16px" color="tomato">
                    {errors.city && touched.city && errors.city}
                    </Text>
                    </Flex>

                    <Flex flexDirection="column">
                    <FormControl>
                    <FormLabel>Zipcode</FormLabel>
                    <Input type='text' 
                        name="zipcode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.zipcode} 
                        bg={inputBG} 
                        isRequired 
                        variant="filled" 
                        placeholder='Enter your zipcode' />
                    </FormControl>   

                    <Text fontSize="16px" color="tomato">
                    {errors.zipcode && touched.zipcode && errors.zipcode}
                    </Text> 
                    </Flex>
                </Flex>

                <FormControl mt={6}>
                <FormLabel>Phone Number</FormLabel>
                <Input type='text' 
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone} 
                    bg={inputBG} 
                    isRequired 
                    variant="filled" 
                    placeholder='Enter your phone number' />
                </FormControl>

                <Text fontSize="16px" color="tomato">
                {errors.phone && touched.phone && errors.phone}
                </Text>  
                    
                <FormControl mt={6}>
                <FormLabel>Website</FormLabel>
                <Input type='text' 
                    name="website"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website} 
                    bg={inputBG} 
                    isRequired 
                    variant="filled" 
                    placeholder='Enter website' />
                </FormControl>

                <Text fontSize="16px" color="tomato">
                {errors.website && touched.website && errors.website}
                </Text>

                <Button width="200px" 
                    float="right" 
                    type="submit"
                    mt={8} 
                    colorScheme={color} 
                    color="white" 
                    disabled={isSubmitting}
                    bg="blue.700"
                    onClick={handleSubmit}>
                        Add
                </Button>

            </form>
            )}
            </Formik>
        </Box>
        </Box>
        </Flex>
    )
}

export default connect(null, {addUser})(Create);