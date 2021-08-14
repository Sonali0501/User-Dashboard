import React from 'react';
import { Box, Button, FormControl, Text, FormLabel, Input, InputRightElement, InputGroup, IconButton, useColorModeValue, Flex } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Formik } from 'formik';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';


const Signin = () => {

    const color = useColorModeValue('blue.600','blue.800');
    const [show, setShow] = React.useState(false)
    const inputBG = useColorModeValue('gray.200','gray.700');
    const history = useHistory();

    return (
        <Box my={8} textAlign='left'>
            <Formik
            initialValues={{  fname: '', lname:'', email: '', password: '', cpassword:'' }}
            validate={values => {
                const errors = {};
                if (!values.fname) {
                    errors.fname = 'Required';
                }
                if (!values.lname) {
                    errors.lname = 'Required';
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (values.password.length < 8) {
                    errors.password = 'Password should be minimum 8 characters';
                }
                if(values.password !== values.cpassword){
                    errors.cpassword = "passwords don't match"
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                swal({
                        title: "",
                        text: "You have successfully signed up",
                        icon: "success",
                        button: "Go to Dashboard",
                    }).then(() => {
                        history.push("/dashboard");
                        setSubmitting(false);
                    });
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

                <Flex flexDirection={{ base:'column', md:"row" }} style={{gap:"24px"}} justifyContent='space-between'>
                    <Flex flexDirection="column">
                    <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input type='text' 
                        name="fname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fname} 
                        bg={inputBG} 
                        isRequired 
                        variant="filled" 
                        placeholder='Enter your first name' />
                    </FormControl>

                    <Text fontSize="16px" color="tomato">
                    {errors.fname && touched.fname && errors.fname}
                    </Text>
                    </Flex>

                    <Flex flexDirection="column">
                    <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' 
                        name="lname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lname} 
                        bg={inputBG} 
                        isRequired 
                        variant="filled" 
                        placeholder='Enter your last name' />
                    </FormControl>   

                    <Text fontSize="16px" color="tomato">
                    {errors.lname && touched.lname && errors.lname}
                    </Text> 
                    </Flex>
                </Flex>

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

                <FormControl mt={8}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input type={show ? "text" : "password"} 
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password} 
                    bg={inputBG} 
                    isRequired 
                    variant="filled" 
                    placeholder='Enter your password' />
                <InputRightElement width="4.5rem">
                    <IconButton h="1.75rem" size="sm" onClick={() => setShow(!show)} icon={show ? <ViewOffIcon /> : <ViewIcon />} />
                </InputRightElement>
                </InputGroup>
                </FormControl>

                <Text fontSize="16px" color="tomato">
                {errors.password && touched.password && errors.password}
                </Text>

                <FormControl mt={6}>
                <FormLabel>Confirm Password</FormLabel>
                <Input type='password' 
                    name="cpassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cpassword} 
                    bg={inputBG} 
                    isRequired 
                    variant="filled" 
                    placeholder='Enter your password again' />
                </FormControl>

                <Text fontSize="16px" color="tomato">
                {errors.cpassword && touched.cpassword && errors.cpassword}
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
                        Sign Up
                </Button>

            </form>
            )}
            </Formik>
        </Box>
    )
}

export default Signin;