import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import JokeBlock from "@components/JokeBlock";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Boogiewoogie site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Caring for sam" />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
