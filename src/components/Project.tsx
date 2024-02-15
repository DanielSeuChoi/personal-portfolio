'use client'
import { FC } from 'react'
import { projectsData } from '@/lib/data'
import Projects from './Projects'
import { useSectionInView } from '@/lib/hooks'


const Project = ({}) => {
  const { ref } = useSectionInView("Projects");
  return (
      <div id='Projects' ref={ref}>
          <header className=' text-7xl w-full text-start p-10 mx-auto'>
            Projects
          </header>
        <div className='flex flex-col lg:grid lg:grid-cols-2'>
          {projectsData.map((projects, index)=>(
              <div key={index}>
                  <Projects {...projects} />
              </div>
          ))}
            </div>
      </div>
  )
}

export default Project