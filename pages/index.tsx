import Layout from '../components/Layout';
import styled from '@emotion/styled';
import ArticleList from '../components/ArticleList';
import { server } from '../config';

const Home = ({ articles }) => {
  const keywords = 'web development, next js';
  const title = 'Home';
  const description = 'This is the home page for my Next js tutorial.';

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <Container>
        <h1>Welcome to Next!</h1>

        <h3>Articles</h3>
        <ArticleList articles={articles} />
      </Container>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  // fetching data from an API

  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    // ASSIGNING THE PROPS TO PASS
    props: {
      articles,
    },
  };
};

// // getStaticProps PASSES PROPS BETWEEN PAGES
// export const getStaticProps = async () => {
//   // fetching data from an API

//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_limit=6'
//   );

//   const articles = await res.json();

//   return {
//     // ASSIGNING THE PROPS TO PASS
//     props: {
//       articles,
//     },
//   };
// };

const Container = styled.div``;
