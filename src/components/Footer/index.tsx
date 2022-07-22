/* eslint-disable prettier/prettier */
import { Box } from '@chakra-ui/react';

export default function Footer(): JSX.Element {
  return (
    <Box
      w="100%"
      h="5rem"
      bg="#024424"
      m=".5rem auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
        Todos Direitos Reservados Colab Devs | 2022
    </Box>
  );
}
