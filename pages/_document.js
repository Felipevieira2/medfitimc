import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="facebook-domain-verification" content="dmul7k34k1v4nsi55jas5knv1t04hd" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
