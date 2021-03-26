import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import { server } from '../../../config';

// THIS IS THE TEMPLATE FILE FOR THE INDIVIDUAL ARTICLE PAGES

const Article = ({ article }) => {
  //   // GRABS THE ID FROM THE ROUTER
  //     const router = useRouter();
  //     const { id } = router.query;

  const { id, title: articleTitle, body } = article;

  const keywords = 'web development, next js';
  const title = `${articleTitle}`;
  const description = 'This is the home page for my Next js tutorial.';

  console.log('type: ', typeof articleTitle);

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <Container>
        <h1>{articleTitle}</h1>
        <p>{body} </p>
      </Container>
    </Layout>
  );
};

// BOTH STATIC PROPS AND STATIC PATHS ARE REQUIRED TOGETHER

export const getStaticProps = async (context) => {
  // FETCHING DATA FOR PAGE
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    // ASSIGNING THE PROPS TO PASS
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false, //IF IT DOESN'T EXIST, A 404 PAGE WILL BE RETURNED
  };
};

// export const getStaticProps = async (context) => {
//   // FETCHING DATA FOR PAGE
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     // ASSIGNING THE PROPS TO PASS
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const articles = await res.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false, //IF IT DOESN'T EXIST, A 404 PAGE WILL BE RETURNED
//   };
// };

export default Article;

const Container = styled.div`
  width: 70ch;
  margin: auto;
`;
