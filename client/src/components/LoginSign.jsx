import { Box, Heading, Input, Button, Link } from '@chakra-ui/react';
import { FormControl, FormLabel, } from '@chakra-ui/form-control'

import { useMutation } from '@apollo/client';
import { SIGNUP } from '../utils/mutations';
import Auth from '../utils/auth';

import { useState } from 'react';
const LoginSign = () => {
    // form state 
    const [userData, setUserData] = useState({ username: '', email: '', password: '' });
    /* const [validate] = useState(false); */

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    // mutations
    const [Signup] = useMutation(SIGNUP);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await Signup({ variables: { ...userData } });

            //token
            const { token, user } = data.Signup;
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
        }
        //clear form
        setUserData({
            username: '',
            email: '',
            password: '',
        });
    }

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Box
                    width="350px"
                    height="500px"
                    position="relative">
                    {/* /* SIGN UP FORM */}
                  
                        <form onSubmit={handleFormSubmit}>
                            <Heading md={6}>SignUp</Heading>
                            <Stack spacing={4}>
                            <FormControl
                                isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input
                                    value={userData.username}
                                    onChange={handleInput}
                                    name="username" />
                            </FormControl>
                            <FormControl
                                isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={userData.email}
                                    onChange={handleInput} />
                            </FormControl>
                            <FormControl
                               isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    value={userData.password}
                                    onChange={handleInput} name="password"
                                    type="password" />
                            </FormControl>
                            <Button
                            type="submit"
                                disabled={!(userData.username && userData.email && userData.password)}
                                mb={4}>Sign Up</Button>
                                
                                {/*LoginLink */}
                                <Link
                                    textAlign="center"
                                    mt={4}
                                >Login Instead </Link>
                                </Stack>
                        </form>
                    </Box>
                </Box>
            
        </>
    )

}
export default LoginSign;