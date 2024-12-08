import { } from '@chakra-ui/react';

import { useState } from 'react';
function loginSignupCard () {

const [isFlipped, setFlipped] = useState(false);
const handleFlip =() => setIsFlipped(!isFlipped);

return (
    <Box className={}>
        <Flex className={`relative w-[350px] h-[500px] transition-transform duration-700 transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        justify="center">
            
            {/*SignUp */}
            <Box className={`absolute w-full h-full bg-white text-black p-6 rounded-lg transition-all duration-700 transform ${
            isFlipped ? 'rotate-y-180' : ''
          }` }>
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

        <Box className={`absolute w-full h-full bg-white text-black p-6 rounded-lg transition-all duration-700 transform rotate-y-180 ${
            isFlipped ? 'rotate-y-0' : 'rotate-y-180'
          }` }>
            <Heading>Log In</Heading>
            <FormControl><FormLabel>Email</FormLabel>
                <Input />
            </FormControl>
            <FormControl><FormLabel>Password</FormLabel>
                <Input />
            </FormControl>

        </Box>
    </Box>
)

}
export default loginSignupCard;