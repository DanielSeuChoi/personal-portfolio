import Icons from "@/components/Icons"
import ImageOverlay from "@/components/ImageOverlay"
import Button from "@/components/ui/Button"
import { Link } from "lucide-react"

const page = () => (
    <div className="relative h-full flex flex-col items-center justify-center overflow-y-hidden overflow-x-hidden">
        <div className="bg-red-400">
            <ImageOverlay imageUrl="/ClimbX.png" title="Hello">
            </ImageOverlay>
        </div>

    </div>
)

export default page