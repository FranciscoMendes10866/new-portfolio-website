import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://unpkg.com/kursor" />
        <script dangerouslySetInnerHTML={{__html:`new kursor({ type: 2, removeDefaultCursor: true, color:"#939393" })`}} />
      </Html>
    )
  }
}

export default MyDocument
