'use client'
import Button from './ui/Button'
import Link from 'next/link'
import Icons from './Icons'
import Image from 'next/image'
import {motion} from 'framer-motion'

const Links = ({ }) => {
    return (
        <motion.div 
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
        className='flex flex-col w-full h-[25rem] shadow-lg border-white'>
            <Image
                            src={'/prof-pic2.jpg'}
                            alt='profile pic'
                            height={192}
                            width={192}
                            priority={true}
                            className='h-[10rem] w-[10rem] border-[0.35rem] mt-10
                            rounded-full object-cover mx-auto border-white shadow-xl'
                        />
            <h2 className='text-3xl leading-tight tracking-tighter lg:text-5xl justify-start p-5 text-center'>Socials & Links</h2>
            <div
                className='flex flex-wrap mt-5 gap-5 justify-center'>
                {/* <Button className='gap-4' variant={'default'} size={'lg'}>
                    <Link className='gap-4 flex flex-row' href={'/#contact'}>
                        Contact
                        <Icons.MailQuestion />
                    </Link>
                </Button> */}

                <Button className='gap-4' variant={'default'} size={'default'}>
                    <Link className='gap-4 flex flex-row' href={'/Resume.pdf'}>
                        Resume
                        <Icons.Download />
                    </Link>
                </Button>

                <Button className='gap-4' variant={'default'} size={'default'}>
                    <Link className='gap-4 flex flex-row' href={'https://github.com/DanielSeuChoi'}>
                        Github
                        <Icons.Github />
                    </Link>
                </Button>

                <Button className='gap-4' variant={'default'} size={'default'}>
                    <Link className=' gap-4 flex flex-row' href={'https://www.linkedin.com/in/danielseungchoi/'}>
                        Linkedin
                        <Icons.Linkedin />
                    </Link>
                </Button>
            </div>
            
        </motion.div>
    )
}

export default Links