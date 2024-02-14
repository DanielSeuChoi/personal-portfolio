

const SkillsVideo = ({ }) => {
    return (
        <video className="p-3 mt-5 lg:p-10" style={{ objectFit: 'cover' }} autoPlay loop preload="auto" playsInline muted width={1000} height={1000} >
            <source src="/codeani.mp4" type="video/mp4" />
        </video>
    )
}

export default SkillsVideo