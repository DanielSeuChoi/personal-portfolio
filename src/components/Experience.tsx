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
        <motion.section
        whileInView={"animate"}
        variants={fadeInAnimationVariants}
        viewport={{ once: true }}
        initial="initial"
        className='p-10 max-w-[50rem] scroll-mt-28 text-center mt-4 lg:mt-28 mr-15'>
            <motion.div
                className=''
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
                    className="py-4">
                        <li className='text-center lg:text-start text-3xl '>
                            {exp.title}
                        </li>
                        <li className='text-center lg:text-start'>
                            {exp.description}
                        </li>
                        <li className='text-center lg:text-start '>
                            {exp.date}
                        </li>
                    </motion.ul>
                ))}
                {/* <SkillsVideo /> */}
            </motion.div>
    </ motion.section>
    )
}
