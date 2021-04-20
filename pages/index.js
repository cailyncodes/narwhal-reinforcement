import Head from 'next/head';
import styles from '../styles/Home.module.css';

const sayings = [
  "Look at you! That task didn't stand a chance!",
  "Whoa! That was amazing!",
  "You did that! Look at you!",
  "Great job! You made a real impact!",
  "Tada! You did it!",
  "Marvelous! Your skills are unparalleled!",
  "Terrific! You are unstoppable!",
  "You vanquished that task! Impressive!",
];

const imagePaths = [
  '/narwhal-1.png',
  '/narwhal-2.jpg',
  '/narwhal-3.png',
  '/narwhal-5.png',
  '/narwhal-6.png',
  '/narwhal-7.jpg',
]

function getData() {
  const sayingIndex = Math.floor(Math.random() * Date.now()) % sayings.length
  const imageIndex = Math.floor(Math.random() * Date.now()) % imagePaths.length;

  return ({
    saying: sayings[sayingIndex],
    imagePath: imagePaths[imageIndex],
  });
}

export default function Home({ saying, imagePath }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Narwhal Reinforcement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{saying}</h1>
        <div className={styles.imageWrapper}>
          <img src={imagePath} />
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by Narwhal Love 💜
      </footer>
    </div>
  )
}

export function getServerSideProps() {
  const props = getData();
  return { props };
}
