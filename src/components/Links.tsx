import { FC } from 'react'
import Button from './ui/Button'
import Link from 'next/link'
import Icons from './Icons'


const Links = ({ }) => {
    return (
        <div className='flex flex-col text-left h-full w-full justify-center gap-5 '>
            <h2 className='text-5xl justify-start text-center'>Links</h2>
            <div
                className='flex flex-col lg:flex-row  mt-5 gap-5 justify-center'>
                <Button className='gap-4' variant={'default'} size={'lg'}>
                    <Link className='gap-4 flex flex-row' href={'/#contact'}>
                        Contact
                        <Icons.MailQuestion />
                    </Link>
                </Button>
                <Button className='gap-4' variant={'default'} size={'lg'}>
                    <Link className='gap-4 flex flex-row' href={'/Resume.pdf'}>
                        Resume
                        <Icons.Download />
                    </Link>
                </Button>
                <Button className='gap-4' variant={'default'} size={'lg'}>
                    <Link className='gap-4 flex flex-row' href={'https://github.com/DanielSeuChoi'}>
                        Github
                        <Icons.Github />
                    </Link>
                </Button>
                <Button className='gap-4' variant={'default'} size={'lg'}>
                    <Link className=' gap-4 flex flex-row' href={'https://www.linkedin.com/in/danielseungchoi/'}>
                        Linkedin
                        <Icons.Linkedin />
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Links