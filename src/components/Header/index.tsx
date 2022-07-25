/* eslint-disable prettier/prettier */
import { Avatar, background, Box, Flex, Image} from '@chakra-ui/react';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import styles from './header.module.scss';


// interface Post {
//     data: {
//       author: string;
//     }
// }

// interface Teste {
//   post: Post;
// }


export default function Header (props):  JSX.Element {

  return (
    <header className={styles.postHeader}

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
        w="8rem"
        p="5"
        borderRadius="8"
        cursor="pointer"
      >
        <p>Marcos Vini</p>


        <Avatar
          bg= '#0ddb9d'
          borderRadius="50%"
          icon={<FiGithub fontSize='1.5rem' />}
          color= "#116839"
          border="1px solid #84f8d5"
          p="2"
          w="1.5rem"
          h="1.5rem"
        />

      </Flex>

    </header>
  );
}
