import React from 'react';
import { Box, Button, FormControl, Text, FormLabel, Input, InputRightElement, useColorModeValue, IconButton, InputGroup } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

const Login = () => {

    const color = useColorModeValue('blue.600','blue.800');
    const [show, setShow] = React.useState(false);
    const inputBG = useColorModeValue('gray.200','gray.700');
    const history = useHistory();


    return (
        <Box my={8} textAlign='left'>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
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
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                swal({
                        title: "",
                        text: "You have been successfully logged in",
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

                 <FormControl>
                     <FormLabel>Email address</FormLabel>
                     <Input type='email'
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} 
                        bg={inputBG} 
                        isRequired 
                        variant="filled" 
                        placeholder='Enter your email address' 
                        />
                </FormControl>

                <Text fontSize="16px" color="tomato">
                {errors.email && touched.email && errors.email}
                </Text>

                <FormControl mt={8}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input type={show ? "text" : "password"} 
                            bg={inputBG} 
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            isRequired 
                            variant="filled" 
                            placeholder='Enter your password' 
                            />
                        <InputRightElement width="4.5rem">
                            <IconButton h="1.75rem" size="sm" 
                                onClick={() => setShow(!show)} 
                                icon={show ? <ViewOffIcon /> : <ViewIcon />} 
                                />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Text fontSize="16px" color="tomato">
                {errors.password && touched.password && errors.password}
                </Text>

                <Button width="200px" float="right" mt={8} 
                    colorScheme={color} color="white" 
                    bg="blue.700"
                    type="submit" disabled={isSubmitting}
                    onClick={handleSubmit}>
                    Login
                </Button>

            </form>
        )}
        </Formik>
     </Box>
    )
}

export default Login;