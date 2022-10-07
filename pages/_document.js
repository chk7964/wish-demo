import Document, {Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html className=''>
        <Head>
        <link rel="icon" type="image/x-icon" href="/img/favicon.png"/>
        </Head>
        <body>
        
       


       
          <Main />
       
          <NextScript />
       
        </body>
      </Html>
    );
  }
}
export default MyDocument;