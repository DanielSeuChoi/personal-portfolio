import ImageOverlay from "@/components/ImageOverlay"

const page = () => {
    return (
        <div className="relative h-full flex flex-col items-center justify-center overflow-y-hidden overflow-x-hidden">
            <div className="bg-red-400">
                <ImageOverlay imageUrl="/ClimbX.png" title="Hello">
                </ImageOverlay>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quas assumenda,
                sed consequuntur accusantium animi dolorem sapiente accusamus? Praesentium, minus?</div>
        </div>
    )
}

export default page