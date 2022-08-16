/* eslint-disable prettier/prettier */
import { Avatar,  Box,  Flex, Image, WrapItem} from '@chakra-ui/react';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import StatusIndicator from '../status';
import styles from './header.module.scss';


export default function Header (props):  JSX.Element {

  return (
    <Box 
      maxWidth="100%" h="5rem" 
      display="flex" 
      justifyContent="space-between"
      alignItems="center"
      bg="#015F43;" 
      m="0 auto" p=".2rem" 

    >
      
      <Link href="/">
        <Flex gap=".5rem">
          <Image 
            src="icone.svg" 
            alt="icone" 
            w="1.9rem" 
            cursor="pointer"
          />
            <Box cursor="pointer" fontSize="1.5rem">
              DoksLab
            </Box>
        </Flex>
      </Link>


      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg="#018C63"
        border="1px solid #2de6ae"
        w="11rem"
        p="5"
        borderRadius="8"
        cursor="pointer"
      >
       

        <p>Douglas balde</p>


        {/* <Avatar
          bg= '#0ddb9d'
          borderRadius="50%"
          icon={<FiGithub fontSize='1.5rem' />}
          color= "#116839"
          border="1px solid #84f8d5"
          p="2"
          w="1.5rem"
          h="1.5rem"
        /> */}

          <WrapItem>
              <Avatar 
                w="2.5rem" h="2.5rem" p="2"
                borderRadius="50%"
                border="1px solid #84f8d5"
                bg= "#0a1511"
                color="white"
                name='Douglas Balde' src='https://bit.ly/code-beast' />
          </WrapItem>

      </Flex>

    </Box>
  );
}
