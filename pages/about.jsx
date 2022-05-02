import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title-side">
              About
            </h1>
            <p className="description">
              Howdy! I am Filip. I'll add more information later.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
