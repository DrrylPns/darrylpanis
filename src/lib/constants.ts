import { Projects, Techs } from "./types";

export const techs: Techs[] = [
    {
        id: 1,
        name: "TypeScript",
        image: "/assets/typescript.svg",
        description: "JavaScipt on steroids",
        bgColor: "bg-blue-200/40"
    },
    {
        id: 2,
        name: "React",
        image: "/assets/react.svg",
        description: "Javascript library",
        bgColor: "bg-cyan-200/30"
    },
    {
        id: 6,
        name: "Next.js",
        image: "/assets/nextjs.svg",
        description: "React framework",
        bgColor: "bg-neutral-300 dark:bg-neutral-500/90"
    },
    {
        id: 3,
        name: "Git",
        image: "/assets/git.svg",
        description: "Version control",
        bgColor: "bg-orange-200/50"
    },
    {
        id: 4,
        name: "Tailwind CSS",
        image: "/assets/tailwind.svg",
        description: "CSS framework",
        bgColor: "bg-sky-300/40"
    },

    {
        id: 5,
        name: "Convex Database",
        image: "/assets/convex.svg",
        description: "Backend platform",
        bgColor: "bg-purple-200/50 dark:bg-purple-200/40"
    }
]

export const personalProjects: Projects[] = [
    {
        id: 1,
        name: "AGreenNatureConnect",
        description: "Informational markethub with social media features and videos for farmers",
        image: "/assets/agreennatureconnect.png",
        url: "https://a-green-nature-connect.vercel.app/",
        githubUrl: "",
    },
]

export const clientProjects: Projects[] = [
    {
        id: 1,
        name: "Naravel Tales",
        description: "Gamified story card sequence for kindergarten and elementary students",
        image: "/assets/naravel.png",
        url: "https://naraveltales.online/",
        githubUrl: "",
    },
    {
        id: 2,
        name: "ESMS",
        description: "An electronic school management system with a recommender system",
        image: "/assets/esms.png",
        url: "https://e-sms-flame.vercel.app/",
        githubUrl: "",
    },
    {
        id: 3,
        name: "Maristela Restaurant",
        description: "Online food ordering system with forecasted sales",
        image: "/assets/maristela.png",
        url: "https://www.maristelarestaurant.com/",
        githubUrl: "",
    },
    {
        id: 4,
        name: "Manila PRO",
        description: "A real estate web app that forecasts sales for better decision making",
        image: "/assets/manilapro.png",
        url: "https://manila-pro.vercel.app/",
        githubUrl: "",
    },
]