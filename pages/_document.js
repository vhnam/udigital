import Document, { Head, Html, Main, NextScript } from 'next/document';

class RootDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />

          <div id="portal-gate"></div>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
