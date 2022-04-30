import Head from 'next/head';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Netflix UI by YuriCPS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold text-center">Netflix UI</h1>
      </main>
      <Footer />
    </div>
  );
}
