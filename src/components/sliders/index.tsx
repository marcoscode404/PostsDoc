/* eslint-disable prettier/prettier */
import { Box, Flex } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

export default function Slides(): JSX.Element {
  return (

    <header>
      <Flex
        h="20rem"
        gap="1rem"
        marginTop=".5rem"
        bg="#161216"
        mt="1.3rem"
      >
        <Box
          bg= "#018C63"
          w="100%"
          p=".3rem"
          borderRadius="8px"
        >
          <h4>Slide Dinamico aqui!</h4>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          bg="#015f43"
          border="1px solid #2de6ae"
          w="3%"
          height="2rem"
          p=".3rem"
          borderRadius="8px"
        >
          <FiMenu 
            width="100%"
            fontSize="1.5rem"
          />
        </Box>

      </Flex>
    </header>
  );
}
