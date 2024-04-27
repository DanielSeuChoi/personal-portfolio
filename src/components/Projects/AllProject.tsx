import { FC } from 'react'
import Project from './Project'
import MobileProject from './MobileProject'
interface AllProjectProps {

}

const AllProject: FC<AllProjectProps> = ({ }) => {
    return (
        <div className=' container'>
            <header className='text-7xl text-start p-10 mx-auto'>
                Projects
            </header>
            <div className='flex flex-col lg:flex-row '>
                <Project />
                <MobileProject />
            </div>
        </div>
    )
}

export default AllProject