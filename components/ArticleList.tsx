import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/Link';

type Props = {
  articles: any;
};

const ArticleList = (props: Props) => {
  const { articles } = props;
  return (
    <ArticleContainer>
      {articles.map((article) => (
        <Link
          key={article.id}
          href="/article/[id]"
          as={`/article/${article.id}`}
        >
          <ArticleCard>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </ArticleCard>
        </Link>
      ))}
    </ArticleContainer>
  );
};

export default ArticleList;

const ArticleContainer = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const ArticleCard = styled.li`
  width: 500px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #eee;
  list-style: none;
  margin-bottom: 30px;
  cursor: pointer;
  flex: 0 0 32%;
  max-width: 32%;
  box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.1);
  transition: all 0.15s linear 0s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transition: all 0.15s linear 0s;
  }
`;
