import { Flex, Box, HStack, Button, Link, Spacer } from '@chakra-ui/react';
import {useState}from 'react'
import loginSignupPage from './LoginSign';

import Auth from '../utils/auth';

function header (){
  const [showModal, setShowModal] = useState(false);
  
  
    return (

<Box
as="header"
position="fixed"
top={0}
left={0}
right={0}
zIndex={1000}
boxShadow="md"

>
<Flex
p={3}

>
  <HStack spacing={4}>
    <Link><Button>Signup | Login</Button></Link>
  </HStack>
  <Spacer />
  <HStack spacing={6}>
    <Link><Button>Join Event</Button></Link>
    <Link><Button>Create Event</Button></Link>
    <Link><Button>Home</Button></Link>
  </HStack>
</Flex>
</Box>

)}


export default header;