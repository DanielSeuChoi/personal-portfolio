
import React, { HTMLAttributes } from "react";
import Image from "next/image";


interface ImageOverlayProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string,
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageUrl, children, ...props }) => {
    return (
        <div className="relative h-max lg:h-screen justify-items-center bg-cover
        w-screen"
        >
            <Image
                src={imageUrl}
                alt='stock lead climber'
                height={2000}
                width={2000}
                quality={100}
                priority
                style={{ objectFit: "cover" }}
                className=" overflow-hidden h-full w-full  "
            />
            {/* <h1 className="text-7xl sm:text-[10rem] absolute flex justify-center items-center 
            left-32 right-32 top-32 bottom-32 lg:bottom-20 md:left-64 md:right-64 md:top-64 md:bottom-64
            sm:left-64 sm:right-64 sm:top-64 sm:bottom-64
            text-black">{title}</h1> */}
            <div className="text-2xl text-white font-bold sm:text-[3rem] md:text-[4rem] absolute flex flex-col text-start sm:text-start md:text-start lg:text-start justify-center sm:gap-5 md:gap-6 lg:gap-10
            left-10 top-32 bottom-10 sm:left-10 md:left-20 lg:left-40 
            ">
                {children}
            </div>
        </div>
    );
}

export default ImageOverlay