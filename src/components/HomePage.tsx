'use client'
import { FC } from 'react'
import ImageOverlay from './ui/ImageOverlay'
import { useSectionInView } from '@/lib/hooks';

interface HomePageProps {

}

const HomePage: FC<HomePageProps> = ({ }) => {
    const { ref } = useSectionInView("Home");
    return <div
        ref={ref}
        id='Home'
        className='flex flex-col h-full w-full lg:flex-row gap-0 lg:gap-14'>
        <ImageOverlay imageUrl='/back-shot.jpg'>
            <p>Daniel Choi</p>
            <p>Climb, Coffee, Code</p>
        </ImageOverlay>
    </div>
}

export default HomePage