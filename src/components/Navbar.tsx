'use client'
import Link from 'next/link'
import { FC } from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import { useActiveSectionContext } from '@/context/active-section-context'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return <div className='hidden fixed lg:backdrop-blur-sm 
    z-50 top-0 left-0 right-0 lg:h-24 md:h-24 sm:h-24 h-24
        border-slate-300 dark:border-slate-700 shadow-sm md:flex 
        justify-between'>
        <Link className='hidden md:flex justify-end ml-6 mt-2 ' href={'#Home'}>
            <Image
                alt=''
                src={'/Frame1.svg'}
                height={100}
                width={100}
            />
        </Link>
        <div className='hidden md:flex justify-end mt-6'>
            <Link href={'#Home'}
                onClick={() => {
                    setTimeOfLastClick(Date.now())
                }}>
                <Button variant={'link'} className=''>Home</Button>
            </Link>
            <Link href={'#Intro'}
                onClick={() => {
                    setTimeOfLastClick(Date.now())
                }}>
                <Button variant={'link'} className=''>About</Button>
            </Link>
            <Link href={'#Skills'}
                onClick={() => {
                    setTimeOfLastClick(Date.now())
                }}>
                <Button variant={'link'} className=''>Skills</Button>
            </Link>
            <Link href={'#Projects'}>
                <Button variant={'link'} className=''>Projects</Button>
            </Link>
            {/* <Link href={'#Contact'}>
                <Button variant={'link'} className=''>Contact</Button>
            </Link> */}
        </div>
    </div>
}

export default Navbar