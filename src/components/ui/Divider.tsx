'use client'

import {motion} from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
      opacity: 0,
      y: 100,
  },
  animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
          delay: 10 * index,
      }
  }),
}


const Divider = ({}) => {
  return (
        <motion.div 
        className="mt-10 mb-10 h-16 bg-slate-600 w-1"
        whileInView={"animate"}
        variants={fadeInAnimationVariants}
        viewport={{ once: true }}
        initial="initial"
        >
        </motion.div>
)
}

export default Divider