import { Flex, Box, HStack, Button, Link, Spacer } from '@chakra-ui/react';

function header (){
    return (

<Box
position="sticky"
top={0}
zIndex={1000}
>
<Flex
as="header"
p={3}
alignItems="center"
boxShadow="md"
position="sticky"
top={12}
zIndex={1000}
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