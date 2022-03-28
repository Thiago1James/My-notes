
import { Main } from "../../styles/presetationPage";
import Head from "next/head";
import { NextPageIcon } from "../components/NextPageIcon";
import Link from "next/link"
import Image from "next/image"

const presetationPage = () => {
  return (
    <>
      <Main>

        <Head>
          <title>My Notes</title>
          <meta name="description" content="Página Inicial- My Notes" />
          <link rel="icon" href="images/Logo.svg" />
         
          <meta name="theme-color" content="#FAE688" />

        </Head>

        <header>
          <div className="mainText">
            <h5>Create and</h5>
            <h5>design</h5>
            <h5>your  notes</h5>
            <h5 className="orangeTitle"> Easily</h5>
            <h5 className="orangeTitle">AND FREE</h5>
          </div>

          <NextPageIcon location="/Login" />

        </header>

        <div className="notesDrawing">
          <div className="Drawin1"></div>
          <div className="Drawin4"></div>

          <div className="Drawin3"></div>
          <div className="Drawin5"></div>

          <div className="Drawin2">
            <Link href='https://github.com/Thiago1James'>
              <a>
                Follow Me
                <Image
                  src='images/GitHub.svg'
                  alt="Git Hub Icon"
                  width={100}
                  height={100}
                  layout="intrinsic"
                  quality={100}
                />

              </a>
            </Link>
          </div>


        </div>



      </Main>
    </>
  );
};

export default presetationPage;
