interface Techs {
    image: string,
    name: string,
    description: string,
    bgColor: string,
}

export const techs: Techs[] = [
    {
        name: "TypeScript",
        image: "/assets/typescript.svg",
        description: "JavaScipt on steroids",
        bgColor: "bg-blue-200/40"
    },
    {
        name: "React",
        image: "/assets/react.svg",
        description: "Javascript library",
        bgColor: "bg-cyan-200/30"
    },
    {
        name: "Next.js",
        image: "/assets/nextjs.svg",
        description: "React framework",
        bgColor: "bg-neutral-300 dark:bg-neutral-400"
    },
    {
        name: "Git",
        image: "/assets/git.svg",
        description: "Version control",
        bgColor: "bg-orange-200/50 dark:bg-orange-200/30"
    },
    {
        name: "Tailwind CSS",
        image: "/assets/tailwind.svg",
        description: "CSS framework",
        bgColor: "bg-sky-200/30"
    },

    {
        name: "Convex Database",
        image: "/assets/convex.svg",
        description: "Backend platform",
        bgColor: "bg-purple-200/50 dark:bg-purple-200/40"
    }
]
