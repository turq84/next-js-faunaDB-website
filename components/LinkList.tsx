import React from 'react';
import styled from '@emotion/styled';
import LinkCard from './LinkCard';

const LinkList = ({ links, refreshLinks }) => (
  <Container>
    <h3>Links</h3>
    {links &&
      links
        .filter((link) => !link.archived)
        .map((link) => (
          <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
        ))}
    <h3>Archived Links</h3>
    {links &&
      links
        .filter((link) => link.archived)
        .map((link) => (
          <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
        ))}
  </Container>
);

export default LinkList;

const Container = styled.div`
  width: 550px;
  margin: auto;
`;
