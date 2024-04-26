'use c'
import { FC } from 'react'
import { mobileData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link';

type MobileProjectProps = (typeof mobileData)[number];

const MobileProjects = ({ imageUrl, description, title, apple, google, googleHash, appleHash, hash, tags }: MobileProjectProps) => {
    return (
        <div className='relative justify-start flex flex-col p-10'>
            <div className='mt-5'>
                <header className='text-4xl'>
                    {title}
                </header>
                <br />
                <p className='leading-relaxed'>
                    {description}
                </p>
                <br />
                <ul className="flex flex-wrap mb-4 gap-2 sm:mt-auto">
                    {tags.map((tag, index) => (
                        <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            key={index}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <div className="hover:bg-white" >
                    <Image
                        className='relative h-[10.25rem] w-[10.25rem] rounded-t-lg shadow-2xl transition hover:bg-white'
                        src={imageUrl}
                        alt={'Photo'}
                    />
                </div>
            </div>
            <div className='flex flex-row mt-5'>
                <>
                    {googleHash == null ? (
                        <div>
                        </div>
                    ) : (
                        <div className='flex '>
                            <Link href={googleHash}>
                                <Image
                                    className="hover:opacity-70"
                                    src={google} alt={''}
                                    height={100}
                                    width={200}
                                />
                            </Link>
                            <Link href={appleHash}>
                                <Image
                                    className="hover:opacity-70"
                                    src={apple} alt={''}
                                    height={100}
                                    width={200}
                                />
                            </Link>
                        </div>
                    )}
                </>
            </div>
        </div>
    )
}

export default MobileProjects