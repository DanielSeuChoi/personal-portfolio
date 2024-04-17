'use client'

import { projectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link';
import Button from './ui/Button';

type ProjectProps = (typeof projectsData)[number];

const Projects = ({ imageUrl, description, title, hash,tags }: ProjectProps) => {
    return (
        <div className='relative justify-center flex flex-col p-10'>
            <div className='mt-5'>
                <header className='text-4xl'>
                    {title}
                </header>
                <br />
                <p className='leading-relaxed'>
                    {description}
                </p>
                <br/>
                <ul className="flex flex-wrap  mb-4 gap-2 sm:mt-auto">
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
                        className='relative w-[28.25rem] rounded-t-lg shadow-2xl transition hover:bg-white'
                        src={imageUrl}
                        alt={'Photo'}
                    />
                    </div>
                </div>
                <div className='flex flex-row justify-start mt-5'>
                    <Button variant={'outline'} >
                        <Link className='text-[1.3rem] flex flex-row text-left' href={hash}>
                            {title}
                        </Link>
                    </Button>
                </div>
            </div>
    )
}

export default Projects