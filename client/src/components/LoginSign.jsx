import {Box,Flex,FormControl,FormLabel,Input,Button,Heading } from '@chakra-ui/react';

import { useState } from 'react';
function loginSignupPage() {

const [isFlipped, setFlipped] = useState(false);
const handleFlip = () => setFlipped(!isFlipped);

return (
    <Box display="flex" justifyContent="center" alignItems="center">
        <Flex className={`relative`}
         width="350px"
         height="500px" 
         transform ={`perspective(1000px)} ${
          isFlipped ? 'rotateY(180deg)' : ''}`}
        position="relative"
        transition="transform 0.7s">
            
            {/*SignUp */}
            <Box
            width="100px"
            height="100px"
            transform ={`rotateY (${
                isFlipped ? 180:0} deg)`}
                backfaceVisibility="hidden"
                transition="transform 0.75">

                <Heading>SignUp</Heading>
                <FormControl><FormLabel>Username</FormLabel>
                    <Input />
                </FormControl>
                <FormControl><FormLabel>Email</FormLabel>
                    <Input />
                </FormControl>
                <FormControl><FormLabel>Password</FormLabel>
                    <Input />
                </FormControl>
                <Button onClick={handleFlip}>Sign Up</Button>

            </Box>
        </Flex>

        <Box
        width="100px"
        height="100px"
        transform ={`rotateY (${
            isFlipped ? 0: -180} deg)`}
            backfaceVisibility="hidden"
            transition="transform 0.75">
        
            <Heading>Log In</Heading>
            <FormControl><FormLabel>Email</FormLabel>
                <Input />
            </FormControl>
            <FormControl><FormLabel>Password</FormLabel>
                <Input />
            </FormControl>
            <Button colorScheme="blue" onClick={handleFlip}>Sign Up</Button>

        </Box>
    </Box>
)

}
export default loginSignupPage;