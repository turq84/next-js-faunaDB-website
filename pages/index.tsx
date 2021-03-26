import Layout from '../components/Layout';
import styled from '@emotion/styled';
// import { server } from '../config';
// import ArticleList from '../components/ArticleList';

const home = ({ articles }) => {
  const keywords = 'web development, next js';
  const title = 'Home';
  const description = 'This is the home page for my Next js tutorial.';

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <h1>Welcome to Next!</h1>

      <h3>Articles</h3>

      {/* <ArticleList articles={articles} /> */}
    </Layout>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

export default home;
