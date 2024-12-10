import { useMutation } from '@apollo/client';
import {Box,Flex,FormControl,FormLabel,Input,Button,Heading } from '@chakra-ui/react';
import { SIGNUP, LOGIN } from '../utils/mutations';
import { useState } from 'react';

function loginSignupPage() {

const [isFlipped, setFlipped] = useState(false);
const handleFlip = () => setFlipped(!isFlipped);

const [formData, setFormData] = useState({username: '', email: '', password: ''})

const [signup, {error, data}] = useMutation(SIGNUP)
const [login, {error,data}] = useMutation(LOGIN)

const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})
}
const handleFormSubmit= async(event)=> {
    event.preventDefault()
    const form = event.currentTarget;
    if(form.checkValidity() === false){
        event.preventDefault()
        event.stopPropagation()
    }
    try{
        const {data} = await signup({
            variables: {...formData}
        })
    }
}
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