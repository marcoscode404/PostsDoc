/* eslint-disable prettier/prettier */
import { Avatar, background, Flex, Image} from '@chakra-ui/react';
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


export default function Header ():  JSX.Element {

  return (
    <header className={styles.postHeader}

    >
      <Link href="/">
        <Flex gap=".5rem">
          <Image
            src="icone.svg" alt="icone"
            w="1.9rem"
          />
            <h1>DoksLab</h1>
        </Flex>
      </Link>


      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg="#018C63"
        w="8rem"
        p="5"
        borderRadius="8"
      >
        <p>Marcos Vini</p>


        <Avatar
          bg= '#0ddb9d'
          borderRadius="50%"
          icon={<FiGithub fontSize='1.5rem'/>}
          color= "#116839"
          p="2"
          w="1.5rem"
          h="1.5rem"
        />

      </Flex>

    </header>
  );
}
