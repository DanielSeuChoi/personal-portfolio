'use client'
import Image from 'next/image'
import { aboutData, progressData, endData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 2 * index,
        }
    }),
}

const Intro = ({ }) => {
    const { ref } = useSectionInView("Intro");
    return (
        <motion.div
            initial="initial"
            ref={ref}
            id="Intro"
            className='mt-10 scroll-mt-24
        h-full flex flex-col 
        lg:flex-row p-0 lg:p-10 container'>
            <div className='flex flex-col w-full h-full  mt-5 p-10 gap-5 '>
                <header className='flex text-center justify-start text-4xl lg:text-5xl'>
                    How I started
                </header>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className='text-start lg:text-start justify-evenly w-full '>
                    {aboutData.description}
                </motion.p>
                <br />
                <header className='flex text-center justify-start text-4xl lg:text-5xl'>
                    My Progression
                </header>
                <br />
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className='text-start lg:text-start justify-evenly w-full'>
                    {progressData.description}
                </motion.p>
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
            <div className='hidden lg:flex  sm:w-2/4 sm:h-2/4 mt-20 w-full justify-center '>
                <Image
                    className=' rounded-xl'
                    src={'/profilepicup.jpg'}
                    alt='prof'
                    height={300}
                    width={700}
                    quality={100}
                />
            </div>
        </motion.div>
    )
}

export default Intro