import Head from 'next/head'

import styles from '@/pages/index.module.css'
import { useState } from 'react';
import UserProfile from '@/components/userProfiles';

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1>welcome to next.js! </h1>
      <h2>Home Page</h2>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text: </label>
        <input id="randomText" />
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific Text:</label>
        <input id="specificText" />
      </div>
      <div>
        <input placeholder="Search..." />
      </div>
      <div>
        <input value="AUDI Q5" onChange={() => {}} />
      </div>
      <div>
        {showText && <span>This is the text!</span>}
        <button
          onClick={() => {
            setTimeout(() => {
              setShowText(!showText);
            }, 1100);
          }}
        >
          Show Text
        </button>
      </div>
      <UserProfile
        displayName={"Adarshnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"}
        username={"dev.adarsh"}
        email={"adarsh@dev.com"}
        isEmailVerified={false}
      />
      </main>
    </div>
  )
}
