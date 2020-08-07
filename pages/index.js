import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CRUX Dashboard</title>
      </Head>

      <main>
        <h1>Chrome User Experience Dashboard</h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}
