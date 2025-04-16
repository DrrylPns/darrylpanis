interface Techs {
    id: number,
    image: string,
    name: string,
    description: string,
    bgColor?: string,
}

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
