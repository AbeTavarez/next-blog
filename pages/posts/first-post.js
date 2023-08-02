import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src='https://connect.facebook.net/en_US/sdk.js'
          strategy='lazyOnload'
          onLoad={() => {
            console.log(
              `script loaded correctly, window.FB has been populated`
            );
            console.log(window.FB);
          }}
        />
      </Head>
      <div className='bg-slate-500'>
        <h1>First Post</h1>
        <img src='/images/profile.jpg' alt='Your Name' />
      </div>
    </Layout>
  );
}
