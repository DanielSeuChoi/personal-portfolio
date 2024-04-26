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


export const mobileData = [
    {
        title: "iCBCM",
        description:
            `I worked as a full-stack developer on this application. This application is used by church administators as a directory. Admins can search for members through text or filter.`,
        tags: [".NET", ".NET-Maui", "Sqlite", "Xaml", "C#", "Azure"],
        imageUrl: iCBCM,
        google: Google,
        apple: Apple,
        googleHash: "https://play.google.com/store/apps/details?id=org.cbcm.icbcmmaui&hl=en&gl=US",
        hash: [Google, Apple],
        appleHash: "https://apps.apple.com/jm/app/icbcm/id675355705",
    },
] as const;

export const projectsData = [
    {
        title: "Climb-X",
        description:
            `A mock project created to replicate a company website for a local climbing gym. I worked to create an easy and accessible website with comfortable designs `,
        tags: ["React", "Next.js", "Tailwind"],
        imageUrl: ClimbX,
        hash: "not available",
    },


] as const;

export const skillsData = [
    `HTML`,
    "XAML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "C#",
    ".NET",
    ".NET Maui",
    "Azure",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Express",
    "PostgreSQL",
    "MySQL",
    "Sqlite",
    "Python",
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

export const experienceData = [
    {
        title: 'Golden West College',
        description: 'Associates in Psychology',
        date: '2014-2018'
    },
    {
        title: `CSULB`,
        description: 'Bachelors of Art In Psychology',
        date: '2018-2020'
    },
    {
        title: `Coding Dojo`,
        description: 'Certification Full-Stack Software Developer',
        date: '2022-2023'
    },
    {
        title: 'CBCM',
        description: 'Internship Software Engineer | Mobile App Developer',
        date: '2023-Present'
    },
]
