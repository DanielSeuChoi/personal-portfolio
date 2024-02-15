'use client'
import React from 'react'
import SkillsVideo from './SkillsVideo'
import { motion } from "framer-motion"
import { experienceData } from '@/lib/data'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
}

export default function Experience() {
    return (
        <motion.div
            className='mt-2 lg:mt-40 text-center justifty-center justify-items-center w-full '
        
        >
            <header className='text-5xl text-center justify-center mb-5'>
                Experience
            </header>
            {experienceData.map((exp, index) => (
                <motion.ul
                whileInView={"animate"}
                variants={fadeInAnimationVariants}
                viewport={{ once: true }}
                initial="initial"
                key={index}
                custom={index}
                className="">
                    <li className='text-center lg:text-start text-3xl p-1'>
                        {exp.title}
                    </li>
                    <li className='text-center lg:text-start p-1'>
                        {exp.description}
                    </li>
                    <li className='text-center lg:text-start  p-1'>
                        {exp.date}
                    </li>
                </motion.ul>
            ))}
            {/* <SkillsVideo /> */}
        </motion.div>
    )
}
