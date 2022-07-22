/* eslint-disable prettier/prettier */
import { Box, Flex } from '@chakra-ui/react';

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
          w="66%"
          p=".3rem"
          borderRadius="8px"
        >
          <h4>Slide Dinamico aqui!</h4>
        </Box>
        <Box
          bg="#015f43"
          w="32%"
          p=".3rem"

          borderRadius="8px"

        >
            <h4>Menu</h4>
        </Box>

      </Flex>
    </header>
  );
}
