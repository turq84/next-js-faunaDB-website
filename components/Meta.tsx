import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = (props: Props) => {
  const { title, keywords, description } = props;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, intial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>MyWebsite | {title}</title>
    </Head>
  );
};

export default Meta;
