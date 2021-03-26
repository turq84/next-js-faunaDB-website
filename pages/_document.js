import Document, { Html, Head, Main, NextScript } from 'next/document';

// THIS DOCUMENT FILE ISN'T REQURIED, BUT IT IS GOOD FOR CUSTOM FEATURES, SUCH AS LANG="EN"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
