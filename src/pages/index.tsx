/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-danger */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Prismic from '@prismicio/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import Header from '../components/Header';
import Slides from '../components/sliders';
import Footer from '../components/Footer';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    subtitle: string;
    author: string;
    readTime: number;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
  banner: {
    url: string;
  };
}

interface HomeProps {
  postsPagination: PostPagination;
  preview: boolean;
}

export default function Home({
  postsPagination,
  preview,
}: HomeProps): ReactElement {
  function getReadTime(item: Post): number {
    const totalWords = item.data.content.reduce((total, contentItem) => {
      total += contentItem.heading.split(' ').length;

      const words = contentItem.body.map(i => i.text.split(' ').length);
      words.map(word => (total += word));
      return total;
    }, 0);
    return Math.ceil(totalWords / 200);
  }

  const formattedPost = postsPagination.results.map(post => {
    const readTime = getReadTime(post);

    return {
      ...post,
      data: {
        ...post.data,
        readTime,
      },
      first_publication_date: format(
        new Date(post.first_publication_date),
        'dd MMM yyyy',
        {
          locale: ptBR,
        }
      ),
    };
  });

  const [posts, setPosts] = useState<Post[]>(formattedPost);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNextPage(): Promise<void> {
    if (currentPage !== 1 && nextPage === null) {
      return;
    }

    const postsResults = await fetch(`${nextPage}`).then(response =>
      response.json()
    );
    setNextPage(postsResults.next_page);
    setCurrentPage(postsResults.page);

    const newPosts = postsResults.results.map((post: Post) => {
      const readTime = getReadTime(post);

      return {
        uid: post.uid,
        first_publication_date: format(
          new Date(post.first_publication_date),
          'dd MMM yyyy',
          {
            locale: ptBR,
          }
        ),
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author,
          banner: {
            url: post.data.banner.url,
          },
          readTime,
        },
      };
    });

    // pega os itens do array, faz uma copia do que já tem e cria uma nova lista
    // só adicionando o novo post, sem precisar recarregar a list de post do zero
    setPosts([...posts, ...newPosts]);
  }

  return (
    <>
      <Head>
        <title>Home | ColabDevs</title>
      </Head>

      <main className={commonStyles.container}>
        {/* componente Header */}
        <Header />

        {/* componente de Sliders */}
        <Slides />

          <div className={styles.posts}>

            {posts.map(post => (
              <Link href={`/post/${post.uid}`} key={post.uid}>
                <a className={styles.post}>
                  <img src={post.data.banner.url} key={post.uid}  className={styles.image} alt="imagensPosts"/>

                  <div className={styles.titlePosts}>
                    <strong>{post.data.title}</strong>
                  </div>

                  <div className={styles.titlePosts}>
                    <p>{post.data.subtitle}</p>
                    <ul>
                      <li>
                        <FiCalendar />
                        {post.first_publication_date}
                      </li>
                      <li>
                        <FiUser />
                        {post.data.author}
                      </li>
                      <li>
                        <FiClock />
                        {`${post.data.readTime} min`}
                      </li>
                    </ul>
                  </div>
                </a>
              </Link>
            ))
            }

              {/* botao de carregar novos posts */}
            {nextPage && (
              <button className={styles.ButtonPosts} type="button" onClick={handleNextPage}>
                Carregar mais posts ...
              </button>
            )}
          </div>

        {preview && (
          <aside>
            <Link href="/api/exit-preview">
              <a className={commonStyles.preview}>Sair do modo Preview</a>
            </Link>
          </aside>
        )}

        {/* Footer */}
        <Footer />
      </main>

    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    {
      pageSize: 3,
      orderings: '[document.last_publication_date desc]',
    }
  );

  const posts = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
        banner: {
          url: post.data.banner.url,
        },
        content: post.data.content.map(content => {
          return {
            heading: content.heading,
            body: [...content.body],
          };
        }),
      },
    };
  });

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: posts,
  };

  return {
    props: {
      postsPagination,
      preview,
    },
    revalidate: 1800,
  };
};
