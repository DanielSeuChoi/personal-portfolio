'use client'
import { imageData, projectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link';
import Button from './ui/Button';

type ProjectProps = (typeof projectsData)[number];



const Projects = ({ imageUrl, description, title, apple, google, googleHash, appleHash,hash }: ProjectProps) => {
    return (
        <div className='relative justify-center flex flex-col  p-10'>
            <div className='mt-5'>
                <header className='text-4xl'>
                    {title}
                </header>
                <br />
                {description}
                <br/>
                {/* <Button variant={'subtle'} className="text-black">
                    <Link href={'/'}>Climb-X</Link>
                </Button> */}
                <div  className="hover:bg-white" >
                    {/* <Link href={hash}>

                    <Image
                        className='relative w-[28.25rem] rounded-t-lg shadow-2xl transition hover:bg-white'
                        src={imageUrl}
                        alt={'Photo'}
                    />
                    </Link> */}
                    <Image
                        className='relative w-[28.25rem] rounded-t-lg shadow-2xl transition hover:bg-white'
                        src={imageUrl}
                        alt={'Photo'}
                    />
                    <div className='flex gap-4'>
                        {hash.map((something,index)=>(
                            <div
                            key={index}
                            className="flex flex-row"
                            >
                               
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-row gap-4 mt-5'>
                    <>
                        {googleHash == null? (
                            <div>
                            </div>
                        ) : (
                            <div className='flex'>
                                <Link href={googleHash}>
                                    <Image src={google} alt={''}
                                        height={100}
                                        width={200}
                                    />
                                </Link>
                                <Link href={appleHash}>
                                    <Image src={apple} alt={''}
                                        height={100}
                                        width={200}
                                    />
                                </Link>
                            </div>
                        )}
                    </>
                    {/* <Link href={googleHash}>
                        <Image src={google} alt={''}
                            height={100}
                            width={200}
                        />
                    </Link>
                    <Link href={appleHash}>
                        <Image src={apple} alt={''}
                            height={100}
                            width={200}
                        />
                    </Link> */}
                </div>
            </div>

        </div>

    )
}

export default Projects