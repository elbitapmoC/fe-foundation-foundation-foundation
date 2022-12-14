import { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import PhaseOne from "../components/PhaseOne";
import PhaseTwo from "../components/PhaseTwo";
import PhaseThree from "../components/PhaseThree";
import PhaseFinal from "../components/PhaseFinal";

export default function Home() {
  const [count, setCount] = useState(1);

  return (
    <div className="p-4">
      <style jsx>{`
        .main {
          min-height: 85vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <Head>
        <title>State &amp; Props</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        {/* Button Increment & Decrement */}
        {/* <PhaseOne />   */}
        {/* Display as a string the info sent in from API */}
        {/* <PhaseTwo /> */}
        {/* Loads in a random user via API */}
        {/* <PhaseThree /> */}
        {/* Loads in an initial random user, click button to add new users and append to page. */}
        <PhaseFinal />
      </div>
      <Footer />
    </div>
  );
}
