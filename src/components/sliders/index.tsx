/* eslint-disable prettier/prettier */
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

export default function Slides(): JSX.Element {
  return (

    <header>
      <Flex
        h="20rem"
        gap="2rem"
        marginTop=".5rem"
        bg="#161216"
        mt="1.3rem"
      >
        <Box
          bg= "#018C63"
          border="1px solid #2de6ae"
          w="66%"
          p=".3rem"
          borderRadius="8px"
          backgroundSize="cover"
        >
            <Image 
              w="100%" 
              h="100%"
              src='imgLogoColab.jpeg'
            />
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          bg="#015f43"
          border="1px solid #2de6ae"
          w="30%"
          height="100%"
          p=".2rem"
          borderRadius="8px"
        >
          
          <Button h="2rem" w="2rem" border="1px solid #2de6ae" bg="#018C63">
            <FiMenu 
              fontSize="1.5rem"
              cursor="pointer"
              color="white"
            />
          </Button>
          
        </Box>

      </Flex>
    </header>
  );
}
