import ClimbX from "@/public/ClimbX.png";
import iCBCM from "@/public/icbcm.png";
import Apple from "@/public/appleblackbadge.svg"
import Google from "@/public/GooglePlayBadge.png"

export const links = [
    {
        name: "Intro",
        hash: "#home",
    },
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const imageData = [
    {
        imageUrl:"ClimbX.png"
    }
] as const;

export const mobileData=[
    {
            title: "iCBCM",
            description:
                `I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies Click On the photo to be linked to the site!.`,
            tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
            imageUrl: iCBCM,
            google: Google,
            apple: Apple,
            googleHash: "https://play.google.com/store/apps/details?id=org.cbcm.icbcmmaui&hl=en&gl=US",
            hash:[Google,Apple],
            appleHash:"https://apps.apple.com/jm/app/icbcm/id675355705",

    }
]

export const projectsData = [
    {
        title: "Climb-X",
        description:
            `I worked as a full-stack developer on this startup project for 2 years. 
            Users can give public feedback to companies Click On the photo to be linked to the site!.`,
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: ClimbX,
        google: ``,
        apple: ``,
        googleHash: null,
        hash:[],
        appleHash:"https://localhost:3000",
    },


] as const;

export const skillsData = [
    `HTML`,
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;

export const mainSkillsData = [
    'C#',
    'TypeScript',
    'JavaScript'
] as const;

export const aboutData = {
    description: ` My name is Daniel Choi, and I appreciate activities such as climbing, hiking, and savoring a good cup of coffee. 
    I hold a Bachelor of Arts degree in Psychology and am a licensed optician. 
    Following the attainment of my degree, my journey into the realm of programming started during my involvement with electronic health record databases.  
    The intricate engineering of databases captivated my interest. 
    Subsequently, I embarked on a coding bootcamp in the fall of 2022 and successfully completed it in the spring of 2023.
    I'm currently focused on Next.JS and .Net Maui!`
} as const;

export const progressData = {
    description: `Currently, my primary focus lies in the realm of mobile app development. 
    Since 2023, I have been interning at ICBCM, where I am actively involved in producing mobile applications and enhancing existing ones. 
    In the course of my work, I've used C# within the .NET framework while also utilizing the Microsoft's MAUI, formerly recognized as Xamarin.Forms.
    I'm eager to advance my skills and make lasting contributions! `
} as const;

export const endData = {
    description: ` My name is Daniel Choi, and I appreciate activities such as climbing, hiking, and savoring a good cup of coffee. 
    I hold a Bachelor of Arts degree in Psychology and am a licensed optician. 
    Following the attainment of my degree, my journey into the realm of programming started during my involvement with electronic health record databases.  
    The intricate engineering of databases captivated my interest. 
    Subsequently, I embarked on a coding bootcamp in the fall of 2022 and successfully completed it in the spring of 2023.`
} as const;

export const experienceData=[
    {
        title:`CSULB`,
        description:'Bachelors of Art In Psychology',
        date:'2018-2020'
    },
    {
        title:`Coding Dojo`,
        description:'Certification Full-Stack Software Developer',
        date:'2022-2023'
    },
    {
        title:'iCBCM',
        description:'Internship Software Engineer | Mobile App Developer',
        date:'2023-Present'
    },
]
