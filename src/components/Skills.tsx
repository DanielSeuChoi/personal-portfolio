'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '@/lib/data';

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

export default function Skills() {
    return (
        <section
            className='p-10 mb-28 max-w-[50rem] scroll-mt-28 text-center mt-28 '>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileInView={{}}
                className=''
            >
                <h1 className='text-5xl text-center justify-center flex mb-12 dark:text-light-gold' >
                    My Skills
                </h1>
            </motion.div>
            <ul className="flex flex-wrap justify-center
            gap-2 text-sm text-gray-800">
                {skillsData.map((skills, index) => (
                    <motion.li
                        className='bg-white border border-black/[0.1]
                    rounded-xl px-7 py-3 dark:bg-white/10 dark:text-white/80'
                        whileInView={"animate"}
                        variants={fadeInAnimationVariants}
                        viewport={{ once: true }}
                        initial="initial"
                        key={index}
                        custom={index}
                    >{skills}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
