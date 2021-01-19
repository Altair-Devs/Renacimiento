import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* webfont */}
          {/* stylesheet */}
          {/* scripts */}
        </Head>
        <body className='body__'>
          <Main />
          <NextScript />
          {/* footer */}
        </body>
      </Html>
    )
  }
}

export default MyDocument;