'use client'
import { mobileData } from '@/lib/data'
import MobileProjects from './MobileProjects'


const MobileProject = ({ }) => {
    return (
        <div>
      <div className='flex flex-col lg:grid lg:grid-cols-2'>
        {mobileData.map((projects, index)=>(
            <div key={index}>
                <MobileProjects {...projects} />
            </div>
        ))}
          </div>
    </div>
        )
}

export default MobileProject