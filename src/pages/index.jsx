import Head from "next/head";
import { Body } from "../../styles";
import Link from "next/link";


export default function Home() {
  return (
    <Body>
      <Head>
        <title>My Notes</title>
        <meta name="description" content="Página Inicial- My Notes" />
        <meta name="theme-color" content="#FAE688" />

        <link rel="icon" href="images/Logo.svg" />


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
            <a >
              <button>Get Started</button>
            </a>
          </Link>

        </div>
      </main>
    </Body>
  );
}
