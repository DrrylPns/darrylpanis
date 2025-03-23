import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { FaGithub } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export const Hero = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center min-h-dvh">
            <div className="font-semibold uppercase text-xs">
                Based in the Philippines
            </div>

            <div className="text-3xl">
                Hey, I&apos;m Darryl
            </div>

            <div className="text-sm text-muted-foreground">
                A Full Stack Web Developer
            </div>

            <Link
                href="https://github.com/DrrylPns"
                className={cn("text-muted-foreground", buttonVariants({
                    variant: "ghost",
                }))}
                target="_"
            >
                <FaGithub />
                GitHub
            </Link>

            <Avatar className="w-[50px] h-[50px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DP</AvatarFallback>
            </Avatar>

        </div>
    )
}