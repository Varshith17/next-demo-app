import Head from 'next/head'
import React from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Open Graph Meta Tags: Everything You Need to Know" />
        <meta property="og:url" content="https://63a6ad0ab865f341a351c47e--profound-alpaca-ba9d44.netlify.app/" />
        <meta property="og:image" content="https://cdn-jxty9psj.files-simplefileupload.com/static/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd1ZuQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--680f4836c6f8035528639bf5de876daaa3360d94/download%20(1).jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>Main Page</div>

      </main>
    </>
  )
}
