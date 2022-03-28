import Head from "next/head";
import { Body } from "../../styles";
import Link from "next/link";


export default function Home() {
  return (
    <Body>
      <Head>
        <title>My Notes</title>
        <meta name="description" content="Página Inicial- My Notes" />
        <link rel="icon" href="images/Logo.svg" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Tourney:ital,wght@1,100&display=swap')
        </style>
      </Head>

      <main>
        <div className="container">
          <h1 className="title">My Notes</h1>
        </div>

        {Array.from({ length: 20 }).map((_, index) => (
          <div className="background" key={index}>
            <div className="circle"></div>
            <div className="line"></div>
          </div>
        ))}

        <div className="containerBtn">
        <Link href="/presentationPage">
        <button>Get Started</button>
        </Link>
       
        </div>
      </main>
    </Body>
  );
}
