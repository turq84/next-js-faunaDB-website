import React from 'react';
import Meta from './Meta';
import Nav from './Nav';
import styled from '@emotion/styled';

type Props = {
  title: string;
  children: any;
  keywords: string;
  description: string;
};

const Layout = (props: Props) => {
  const { title, children, keywords, description } = props;

  return (
    <div>
      <Meta title={title} keywords={keywords} description={description} />
      <Nav />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;

const Content = styled.main`
  max-width: 1200px;
  margin: auto;
  ]border: 1px solid red;
`;
