import { Box, Heading, Input, Button, Link, Stack, Grid } from '@chakra-ui/react';
import { FormControl, FormLabel, } from '@chakra-ui/form-control'

import { useMutation } from '@apollo/client';
import { SIGNUP, LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { useState } from 'react';
import image from '../assets/presentation.jpg';

const LoginSign = () => {

    /////// form state /////// 
    const [userData, setUserData] = useState({ username: '', email: '', password: '' });
    const [formStatus, setformStatus] = useState('signup')

    ////////// input changes /////////
    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    /////// mutations ///////
    const [Signup,{error,data}] = useMutation(SIGNUP);
    const [Login,{error,data}] = useMutation(LOGIN);

    ////////// form submission /////////
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // if user chooses to signup use signup mutation
        if (formStatus === 'signup')
            try {
                const { data } = await Signup({ variables: { ...userData } });

                /////// token /////////
                const { token, user } = data.Signup;
                console.log(user);
                Auth.login(token);
                ////// clear form ////////
                setUserData({
                    username: '',
                    email: '',
                    password: '',
                });
            } catch (err) {
                console.error(err);
            }
        // else use login mutation with token
        try {
            const { data } = await Login({ variables: { email: userData.email, password: userData.password } });

            const { token, user } = data.Login;
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
        }
    }

    //////// switch between sign up & login ///////
    const formSwitch = () => {
        setformStatus(formStatus === 'signup' ? 'login' : 'signup');
    };

    return (
        <>
            {/* CONTAINER FOR ALL*/}
            <Grid
                className='fullformcontainer'
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={4}

                position="fixed"
                top="50%"
                left="50%"
                right={0}
                zIndex={1000}
                boxShadow="md"
                transform="translate(-50%, -50%)"
                width="95%"
                height="80vh"
                maxWidth="1200px">

                {/* IMAGE SECTION*/}
                <Box
                    backgroundImage={`url(${image})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    opacity={0.8}
                    zIndex={1}
                    height={{ base: "180px", md: "auto" }}
                />
                {/* /* LOGIN/SIGN UP FORM */}
                <Box
                    boxShadow="lg"
                    borderRadius={8}
                    borderWidth={1} display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bd="white"
                    zIndex={2}
                    padding="20px">

                    <form onSubmit={handleFormSubmit}>
                        <Heading md={6}>{formStatus === 'signup' ? 'Sign Up' : 'Login'}
                        </Heading>
                        <Stack spacing={4}>
                            {formStatus === 'signup' && (
                                <FormControl
                                isRequired>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        value={data.username}
                                        onChange={handleInput}
                                        name="username" />
                                </FormControl>)}
                            <FormControl
                                isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={handleInput} />
                            </FormControl>
                            <FormControl
                                isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    value={data.password}
                                    onChange={handleInput}
                                    name="password"
                                    type="password" />
                            </FormControl>
                            <Button
                                type="submit"
                                disabled={!(userData.username && userData.email && userData.password)}
                                mb={4}>
                                {formStatus == 'signup' ? 'Sign Up' : 'Log in'}
                            </Button>

                            {/* LOGIN/SIGNUP LINK */}
                            <Link
                                textAlign="center"
                                onClick={formSwitch}
                                mt={4}
                            >
                                {formStatus === 'signup' ? 'Login Instead' : 'Sign Up Instead'}
                            </Link>
                        </Stack>
                    </form>
                </Box>
            </Grid>

        </>
    )

}
export default LoginSign;