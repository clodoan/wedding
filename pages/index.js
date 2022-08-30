import Head from "next/head";
import Image from "next/image";
import Navigation from "./components/Navigation";
import HorizontalData from "./components/HorizontalData";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>S&A 10.14.20</title>
        <meta name="description" content="We’re Getting Married!" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💘</text></svg>"
        />
      </Head>
      <Navigation />
      <main className="main">
        <div className="hero">
          <div className="card">
            <small>We're getting married!</small>
            <h1>Soria & Antoine </h1>
            <small>10.14.20</small>
          </div>
        </div>
      </main>
      <HorizontalData
        title="Ceremony"
        subtitle="4 PM"
        imagePath="/images/placeholder.jpeg"
        orientation="left"
      >
        <p>custom text</p>
        <Button>See map</Button>
      </HorizontalData>
    </>
  );
}
