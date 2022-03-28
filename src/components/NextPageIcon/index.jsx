import { Circle } from "./style"
import Link from "next/link"
import Image from "next/image"
import NextPage from '../../../public/images/PlayIcon.svg'




export const NextPageIcon = (props) => {
    return (
        <>

            <Circle>
                <Link href={props.location}>
                    <a>
                        <div className="image">
                            <Image
                                src={NextPage}
                                alt="Play icon"
                                className='Play'
                                width={100}
                                height={100}
                                layout="intrinsic"
                                quality={100}
                            />
                        </div>
                    </a>
                </Link>
            </Circle>



        </>)



}