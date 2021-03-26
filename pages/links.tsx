import React, { useEffect, useState } from 'react';
import LinkList from '../components/LinkList';
import LinkForm from '../components/LinkForm';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const links = () => {
  const [links, setLinks] = useState([]);
  const loadLinks = async () => {
    try {
      const res = await fetch('/.netlify/functions/getLinks');
      const links = await res.json();
      setLinks(links);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  const title = 'Links Query';
  const keywords = 'links, query, fauma DB, Fauma, Next JS';
  const description = 'A Fauma DB example using Next JS.';

  return (
    <Layout title={title} keywords={keywords} description={description}>
      <Container>
        <h1>List of Links</h1>
        <LinkForm refreshLinks={loadLinks} />
        <LinkList links={links} refreshLinks={loadLinks} />
      </Container>
    </Layout>
  );
};

export default links;

const Container = styled.div``;
