'use client'
import Image from 'next/image'
import { aboutData, progressData, endData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const Intro = ({ }) => {
    const { ref } = useSectionInView("Intro");
    return (
        <div
            ref={ref}
            id="Intro"
            className='scroll-mt-24
            h-full flex flex-col 
            lg:flex-row p-0 lg:p-10 '>
            <div className='flex flex-col w-full h-full container mt-5 p-10 gap-5 '>
                <header className='flex text-center justify-start text-4xl lg:text-5xl'>
                    How I started
                </header>
                <p className='text-start lg:text-start justify-evenly w-full '>
                    {aboutData.description}
                </p>
                <br />
                <header className='flex text-center justify-start text-4xl lg:text-5xl'>
                    My Progression
                </header>
                <p className='text-start lg:text-start justify-evenly w-full'>
                    {progressData.description}
                </p>
                <br />
                {/* <header className='flex text-center justify-start text-4xl lg:text-5xl'>
                    My End Goal
                </header>
                <p className='text-start lg:text-start justify-evenly w-full'>
                    {endData.description}
                </p> */}
                <div className='mt-4'>
                    <ul className='flex w-full justify-around lg:justify-between'>
                        <li className='p-3'>
                            <Image height={100} width={100} src={'/nextjs.png'} alt={'Next-Js'} />
                        </li>
                        <li className='p-3'>
                            <Image height={100} width={100} src={'/net.png'} alt={'Net'} />
                        </li>
                        <li className='p-3'>
                            <Image height={100} width={100} src={'/ts.png'} alt={'typescript'} />
                        </li>
                        <li className='p-3'>
                            <Image height={100} width={100} src={'/Maui.png'} alt={'Maui'} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hidden lg:flex w-full justify-center mt-5'>
                <Image
                    src={'/profilepicup.jpg'}
                    alt='prof'
                    height={300}
                    width={700}
                    quality={100}
                />
            </div>
        </div>
    )
}

export default Intro