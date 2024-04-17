'use client'
import { FC } from 'react'
import Skills from './Skills'
import { motion } from 'framer-motion'
import SkillsVideo from './SkillsVideo'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
import Experience from './Experience'

interface SkillExpProps {

}

const SkillExp: FC<SkillExpProps> = ({ }) => {
    const { ref } = useSectionInView("Skills");
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <div
            ref={ref}
            id='Skills'
            className='scroll-mt-28 m-24 flex flex-col h-full w-full lg:flex-row gap-0 lg:gap-14'>
            {/* <SkillsVideo /> */}
            <Skills />
            <Experience/>
        </div>
    )
}

export default SkillExp