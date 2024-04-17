import { FC } from 'react'
import Project from '../Project'
import MobileProject from './MobileProject'
interface AllProjectProps {

}

const AllProject: FC<AllProjectProps> = ({ }) => {
    return (
        <div className='p-10 bg-slate-100'>
            <header className='text-7xl w-full text-start p-10 mx-auto'>
            Projects
            </header>
            <div className='flex flex-col lg:flex-row'>
                <Project/>
                <MobileProject/>
            </div>
        </div>
    )
}

export default AllProject